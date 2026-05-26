import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { questions } from "./data/questions.js";
import { copy, houseContent, radarLabels } from "./data/copy.js";
import { calculateSortingToiletResult } from "./utils/scoring.js";
import { playSound, toggleMuted } from "./utils/audio.js";
import {
  clearCurrentResultRegistration,
  createAttemptId,
  getGlobalStats,
  getStoredResultRegistration,
  recordResult,
  storeResultRegistration
} from "./utils/globalStats.js";
import "./styles.css";

const STORAGE_KEY = "sorting-toilet-state-v1";

const steps = {
  LANGUAGE: "language",
  NAME: "name",
  ENVELOPE: "envelope",
  LETTER: "letter",
  TOILET: "toilet",
  TEST: "test",
  JUDGING: "judging",
  RESULT: "result"
};

const initialState = {
  language: "",
  name: "",
  step: steps.LANGUAGE,
  currentQuestion: 0,
  answers: {},
  result: null,
  muted: true
};

const badgeAssets = {
  A: "/assets/badges/toad.png",
  B: "/assets/badges/fox.png",
  C: "/assets/badges/scorpion.png",
  D: "/assets/badges/rabbit.png"
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...initialState, ...stored, muted: stored?.muted ?? true };
  } catch {
    return initialState;
  }
}

function App() {
  const [state, setState] = useState(loadState);
  const [nameError, setNameError] = useState("");
  const t = copy[state.language || "en"];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    toggleMuted(state.muted);
  }, [state.muted]);

  const goTo = (step, patch = {}) => {
    playSound("page-turn");
    setState((current) => ({ ...current, step, ...patch }));
  };

  const selectLanguage = (language) => {
    playSound("ui-click");
    setState((current) => ({ ...current, language, step: steps.NAME }));
  };

  const switchLanguage = (language) => {
    playSound("ui-click");
    setState((current) => ({ ...current, language }));
  };

  const submitName = (event) => {
    event.preventDefault();
    const name = state.name.trim().slice(0, 20);
    if (!name) {
      setNameError(t.errors.name);
      return;
    }
    setNameError("");
    playSound("wax-seal");
    setState((current) => ({ ...current, name, step: steps.ENVELOPE }));
  };

  const startTest = () => {
    playSound("toilet-lid");
    setState((current) => ({ ...current, step: steps.TEST, currentQuestion: 0 }));
  };

  const answerQuestion = (value) => {
    playSound("ui-click");
    setState((current) => ({
      ...current,
      answers: { ...current.answers, [questions[current.currentQuestion].id]: value }
    }));
  };

  const nextQuestion = () => {
    const isLast = state.currentQuestion === questions.length - 1;
    if (!state.answers[questions[state.currentQuestion].id]) return;

    if (isLast) {
      const result = calculateSortingToiletResult(state.answers);
      playSound("flush");
      setState((current) => ({ ...current, result, step: steps.JUDGING }));
      return;
    }

    playSound("page-turn");
    setState((current) => ({
      ...current,
      currentQuestion: Math.min(questions.length - 1, current.currentQuestion + 1)
    }));
  };

  const previousQuestion = () => {
    playSound("page-turn");
    setState((current) => ({
      ...current,
      currentQuestion: Math.max(0, current.currentQuestion - 1)
    }));
  };

  const restartQuiz = () => {
    if (!window.confirm(t.restartQuizConfirm)) return;
    playSound("stamp");
    clearCurrentResultRegistration();
    sessionStorage.removeItem(STORAGE_KEY);
    setState((current) => {
      const nextState = {
        ...current,
        step: steps.TOILET,
        currentQuestion: 0,
        answers: {},
        result: null
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
      return nextState;
    });
  };

  const retake = () => {
    playSound("stamp");
    clearCurrentResultRegistration();
    setState({
      ...initialState,
      language: state.language,
      name: state.name,
      muted: state.muted,
      step: steps.NAME
    });
  };

  const renderStep = () => {
    switch (state.step) {
      case steps.LANGUAGE:
        return <LanguageSelect onSelect={selectLanguage} />;
      case steps.NAME:
        return (
          <NameInput
            t={t}
            value={state.name}
            error={nameError}
            onChange={(name) => setState((current) => ({ ...current, name }))}
            onSubmit={submitName}
          />
        );
      case steps.ENVELOPE:
        return <Envelope t={t} onComplete={() => goTo(steps.LETTER)} />;
      case steps.LETTER:
        return <AdmissionLetter t={t} name={state.name} onContinue={() => goTo(steps.TOILET)} />;
      case steps.TOILET:
        return <SortingToiletEntry t={t} onStart={startTest} />;
      case steps.TEST:
        return (
          <Test
            t={t}
            language={state.language}
            currentQuestion={state.currentQuestion}
            answers={state.answers}
            onAnswer={answerQuestion}
            onNext={nextQuestion}
            onBack={previousQuestion}
            onLanguageChange={switchLanguage}
            onRestart={restartQuiz}
          />
        );
      case steps.JUDGING:
        return <Judging t={t} onComplete={() => goTo(steps.RESULT)} />;
      case steps.RESULT:
        return <Result t={t} language={state.language} name={state.name} result={state.result} onRetake={retake} />;
      default:
        return <LanguageSelect onSelect={selectLanguage} />;
    }
  };

  return (
    <main className="app-shell">
      <div className="ambient" aria-hidden="true" />
      <button
        className="sound-toggle"
        type="button"
        aria-label={state.muted ? t.unmute : t.mute}
        onClick={() => setState((current) => ({ ...current, muted: !current.muted }))}
      >
        {state.muted ? t.soundOff : t.soundOn}
      </button>
      {renderStep()}
    </main>
  );
}

function LanguageSelect({ onSelect }) {
  return (
    <section className="screen centered">
      <div className="sigil" aria-hidden="true">BT</div>
      <p className="eyebrow">Blackthorn Archive</p>
      <h1>The Sorting Toilet</h1>
      <p className="subtitle">请选择录取语言 / Choose Your Admission Language</p>
      <div className="button-row">
        <button className="primary-button" type="button" onClick={() => onSelect("zh")}>中文</button>
        <button className="primary-button ghost" type="button" onClick={() => onSelect("en")}>English</button>
      </div>
    </section>
  );
}

function NameInput({ t, value, error, onChange, onSubmit }) {
  return (
    <section className="screen centered narrow">
      <p className="eyebrow">{t.schoolName}</p>
      <h1>{t.nameTitle}</h1>
      <form className="name-form" onSubmit={onSubmit}>
        <label htmlFor="candidateName">{t.namePrompt}</label>
        <input
          id="candidateName"
          maxLength="20"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="name"
        />
        {error && <p className="error">{error}</p>}
        <button className="primary-button" type="submit">{t.nameButton}</button>
      </form>
    </section>
  );
}

function Envelope({ t, onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2200);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="screen centered">
      <p className="eyebrow">{t.envelopeLine}</p>
      <div className="envelope" aria-hidden="true">
        <div className="envelope-flap" />
        <div className="letter-peek" />
        <div className="wax-seal" />
      </div>
    </section>
  );
}

function AdmissionLetter({ t, name, onContinue }) {
  return (
    <section className="screen letter-screen">
      <article className="letter">
        <p>{t.letter.dear.replace("USER_NAME", name)}</p>
        {t.letter.body.map((line) => <p key={line}>{line}</p>)}
        <p>{t.letter.closing}</p>
        <p>{t.letter.headmaster}</p>
      </article>
      <button className="toilet-entry-button" type="button" onClick={onContinue}>
        <ToiletIcon compact />
        <span>{t.useToilet}</span>
      </button>
    </section>
  );
}

function SortingToiletEntry({ t, onStart }) {
  return (
    <section className="screen centered toilet-stage">
      <p className="eyebrow">{t.toiletEntryKicker}</p>
      <h1>{t.toiletEntryTitle}</h1>
      <ToiletIcon />
      <button className="primary-button" type="button" onClick={onStart}>{t.beginTest}</button>
    </section>
  );
}

function Test({ t, language, currentQuestion, answers, onAnswer, onNext, onBack, onLanguageChange, onRestart }) {
  const question = questions[currentQuestion];
  const selected = answers[question.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const questionText = question.text[language] || question.text.zh;

  return (
    <section className="screen test-screen">
      <div className="quiz-toolbar">
        <div className="language-switch" aria-label={t.languageSwitchLabel}>
          <span>{t.languageSwitchLabel}</span>
          <button
            className={language === "zh" ? "switch-option active" : "switch-option"}
            type="button"
            onClick={() => onLanguageChange("zh")}
            aria-pressed={language === "zh"}
          >
            {t.languageChinese}
          </button>
          <button
            className={language === "en" ? "switch-option active" : "switch-option"}
            type="button"
            onClick={() => onLanguageChange("en")}
            aria-pressed={language === "en"}
          >
            {t.languageEnglish}
          </button>
        </div>
        <button className="secondary-button compact-button" type="button" onClick={onRestart}>
          {t.restartQuiz}
        </button>
      </div>
      <div className="test-topline">
        <span>{t.questionCount(currentQuestion + 1, questions.length)}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
      <article className="question-panel">
        <p className="question-id">{String(question.id).padStart(2, "0")}</p>
        <h2>{questionText}</h2>
        <div className="answers">
          {t.answerOptions.map((option) => (
            <button
              className={selected === option.value ? "answer selected" : "answer"}
              type="button"
              key={option.value}
              onClick={() => onAnswer(option.value)}
            >
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </article>
      <div className="nav-row">
        <button className="secondary-button" type="button" onClick={onBack} disabled={currentQuestion === 0}>{t.back}</button>
        <button className="primary-button" type="button" onClick={onNext} disabled={!selected}>
          {currentQuestion === questions.length - 1 ? t.submit : t.next}
        </button>
      </div>
    </section>
  );
}

function Judging({ t, onComplete }) {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const lineTimer = window.setInterval(() => {
      setLineIndex((index) => (index + 1) % t.judgingLines.length);
    }, 900);
    const doneTimer = window.setTimeout(onComplete, 3600);
    return () => {
      window.clearInterval(lineTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onComplete, t.judgingLines.length]);

  return (
    <section className="screen centered judging-stage">
      <ToiletIcon judging />
      <p className="judging-line">{t.judgingLines[lineIndex]}</p>
    </section>
  );
}

function Result({ t, language, name, result, onRetake }) {
  const [statsState, setStatsState] = useState({
    counts: null,
    ordinal: null,
    unavailable: false,
    loading: true
  });

  useEffect(() => {
    let isActive = true;

    async function syncGlobalStats() {
      const stored = getStoredResultRegistration();
      const matchingRegistration = stored?.house === result.house ? stored : null;

      try {
        let registration = matchingRegistration;

        if (!registration) {
          registration = {
            attemptId: createAttemptId(),
            house: result.house,
            ordinal: null
          };
          await recordResult({
            house: result.house,
            language,
            attemptId: registration.attemptId
          });
          storeResultRegistration(registration);
        }

        const counts = await getGlobalStats();
        const ordinal = registration.ordinal ?? counts[result.house];

        if (!matchingRegistration || !registration.ordinal) {
          storeResultRegistration({
            attemptId: registration.attemptId,
            house: result.house,
            ordinal
          });
        }

        if (isActive) {
          setStatsState({ counts, ordinal, unavailable: false, loading: false });
        }
      } catch {
        try {
          const counts = await getGlobalStats();
          if (isActive) {
            setStatsState({
              counts,
              ordinal: matchingRegistration?.ordinal ?? null,
              unavailable: !matchingRegistration,
              loading: false
            });
          }
        } catch {
          if (isActive) {
            setStatsState({
              counts: null,
              ordinal: matchingRegistration?.ordinal ?? null,
              unavailable: true,
              loading: false
            });
          }
        }
      }
    }

    if (result) {
      syncGlobalStats();
    }

    return () => {
      isActive = false;
    };
  }, [language, result]);

  if (!result) return null;
  const content = houseContent[result.house][language];
  const chartData = makeRadarData(result.normalizedScores, language);
  const isRejected = result.house === "E";

  return (
    <section className="screen result-screen">
      <div className="result-hero">
        <ResultMark house={result.house} name={content.name} />
        <div>
          <p className="eyebrow">{t.resultKicker}</p>
          <h1>{content.name}</h1>
          <p className="animal">{content.animal}</p>
          <p className="verdict">{content.verdict}</p>
          <OrdinalSentence t={t} house={result.house} houseName={content.name} ordinal={statsState.ordinal} />
        </div>
      </div>

      {statsState.unavailable && <p className="stats-fallback">{t.registrationUnavailable}</p>}

      <div className="keyword-row">
        {content.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
      </div>

      <div className="result-grid">
        <section className="analysis-block">
          <h2>{t.admissionAssessment}</h2>
          <p>{content.admissionAssessment}</p>
          <h2>{t.professionalAnalysis}</h2>
          <p>{content.psychAnalysis}</p>
          <blockquote>{content.headmasterNote}</blockquote>
        </section>
        <section className="diagnostic-panel">
          <h2>{t.syndromeTitle}</h2>
          <dl>
            <div><dt>{t.diagnosticFields.syndromeName}</dt><dd>{content.syndromeName}</dd></div>
            <div><dt>{t.diagnosticFields.darkCompatibility}</dt><dd>{averageDark(result.normalizedScores)}%</dd></div>
            <div><dt>{t.diagnosticFields.moralResidue}</dt><dd>{result.normalizedScores.H}%</dd></div>
            <div><dt>{t.diagnosticFields.socialMasking}</dt><dd>{result.normalizedScores.F}%</dd></div>
            <div><dt>{t.diagnosticFields.forbiddenCraving}</dt><dd>{result.normalizedScores.S}%</dd></div>
            <div><dt>{t.diagnosticFields.flushStability}</dt><dd>{isRejected ? t.unstable : t.acceptable}</dd></div>
            <div><dt>{t.diagnosticFields.treatment}</dt><dd>{content.recommendedTreatment}</dd></div>
          </dl>
        </section>
      </div>

      <section className="chart-block">
        <h2>{t.radarTitle}</h2>
        <RadarChart data={chartData} />
      </section>

      <StatsPanel t={t} counts={statsState.counts} loading={statsState.loading} />

      <section className="share-section">
        <h2>{t.shareTitle}</h2>
        <ShareCard
          name={name}
          content={content}
          result={result}
          language={language}
          counts={statsState.counts}
          ordinal={statsState.ordinal}
        />
      </section>

      <button className="secondary-button retake" type="button" onClick={onRetake}>{t.retake}</button>
    </section>
  );
}

function OrdinalSentence({ t, house, houseName, ordinal }) {
  if (!ordinal) return null;
  return (
    <p className="ordinal-line">
      {house === "E" ? t.ordinalExpelled(ordinal) : t.ordinalAdmitted(ordinal, houseName)}
    </p>
  );
}

function StatsPanel({ t, counts, loading }) {
  const rows = ["A", "B", "C", "D", "E"];

  return (
    <section className="stats-panel">
      <h2>{t.statsTitle}</h2>
      {counts ? (
        <dl>
          {rows.map((house) => (
            <div key={house}>
              <dt>{t.statRows[house]}</dt>
              <dd>{counts[house]}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p>{loading ? t.statsUnavailable : t.statsUnavailable}</p>
      )}
    </section>
  );
}

function ResultMark({ house, name }) {
  if (house === "E") {
    return (
      <div className="rejection-mark" aria-label={name}>
        <ToiletIcon compact />
        <strong>FLUSHED</strong>
      </div>
    );
  }
  return <img className="badge" src={badgeAssets[house]} alt={name} />;
}

function ShareCard({ name, content, result, language, counts, ordinal }) {
  const t = copy[language];
  return (
    <article className={`share-card house-${result.house}`}>
      <p className="share-school">{copy[language].schoolName}</p>
      <ResultMark house={result.house} name={content.name} />
      <h3>{name}</h3>
      <p className="share-result">{content.name}</p>
      <OrdinalSentence t={t} house={result.house} houseName={content.name} ordinal={ordinal} />
      <p>{content.shareLine}</p>
      {counts && (
        <div className="share-stats">
          <strong>{t.statsTitle}</strong>
          {["A", "B", "C", "D", "E"].map((house) => (
            <span key={house}>{t.statRows[house]}: {counts[house]}</span>
          ))}
        </div>
      )}
      <div className="share-mini-scores">
        {makeRadarData(result.normalizedScores, language).map((item) => (
          <span key={item.label}>{item.label}: {item.value}</span>
        ))}
      </div>
    </article>
  );
}

function makeRadarData(scores, language) {
  const labels = radarLabels[language];
  return [
    { label: labels.T, value: scores.T },
    { label: labels.F, value: scores.F },
    { label: labels.S, value: scores.S },
    { label: labels.R, value: scores.R },
    { label: labels.H, value: scores.H }
  ];
}

function averageDark(scores) {
  return Math.round((scores.T + scores.F + scores.S + scores.R) / 4);
}

function RadarChart({ data }) {
  const size = 320;
  const center = size / 2;
  const maxRadius = 104;
  const points = data.map((item, index) => polarPoint(center, maxRadius * (item.value / 100), index, data.length));
  const polygon = points.map((point) => `${point.x},${point.y}`).join(" ");
  const rings = [25, 50, 75, 100];

  return (
    <svg className="radar" viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Radar chart">
      {rings.map((ring) => {
        const ringPoints = data.map((_, index) => polarPoint(center, maxRadius * (ring / 100), index, data.length));
        return <polygon key={ring} points={ringPoints.map((point) => `${point.x},${point.y}`).join(" ")} className="radar-ring" />;
      })}
      {data.map((item, index) => {
        const end = polarPoint(center, maxRadius, index, data.length);
        const label = polarPoint(center, maxRadius + 34, index, data.length);
        return (
          <g key={item.label}>
            <line x1={center} y1={center} x2={end.x} y2={end.y} className="radar-axis" />
            <text x={label.x} y={label.y} textAnchor="middle" dominantBaseline="middle">{item.label}</text>
          </g>
        );
      })}
      <polygon points={polygon} className="radar-score" />
      {points.map((point, index) => <circle key={data[index].label} cx={point.x} cy={point.y} r="4" className="radar-dot" />)}
    </svg>
  );
}

function polarPoint(center, radius, index, total) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return {
    x: center + Math.cos(angle) * radius,
    y: center + Math.sin(angle) * radius
  };
}

function ToiletIcon({ compact = false, judging = false }) {
  return (
    <div className={`toilet-wrap ${compact ? "compact" : ""} ${judging ? "judging" : ""}`}>
      <div className="spotlight" />
      <svg className="toilet-svg" viewBox="0 0 220 220" aria-hidden="true">
        <defs>
          <linearGradient id="toiletCeramic" x1="0" x2="1">
            <stop offset="0" stopColor="#050505" />
            <stop offset="1" stopColor="#17110b" />
          </linearGradient>
        </defs>
        <path className="toilet-tank" d="M65 52h92c8 0 13 5 13 13v34H52V65c0-8 5-13 13-13Z" />
        <path className="toilet-lid" d="M57 96c11-13 91-13 105 0 8 7 5 20-8 24-21 7-63 7-86 0-15-4-19-16-11-24Z" />
        <ellipse className="toilet-bowl" cx="110" cy="128" rx="58" ry="34" />
        <ellipse className="toilet-glow" cx="110" cy="128" rx="36" ry="18" />
        <path className="toilet-base" d="M82 150h55l15 35H68l14-35Z" />
        <path className="toilet-foot" d="M59 184h101c8 0 13 5 13 12v6H47v-6c0-7 5-12 12-12Z" />
        <path className="gold-trim" d="M58 96c29 9 75 9 105 0M78 151h64M65 61h92" />
        <path className="flush-swirl" d="M89 128c13-16 42-14 47 2 4 13-15 22-29 14 19-2 25-17 8-22-8-2-18 0-26 6Z" />
      </svg>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
