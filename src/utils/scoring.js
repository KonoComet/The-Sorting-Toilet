import { questions } from "../data/questions.js";

export function answerToValue(answer) {
  return answer - 3;
}

export function calculateRawScores(answers) {
  const scores = { T: 0, F: 0, S: 0, R: 0, H: 0 };

  for (const question of questions) {
    const answer = answers[question.id];

    if (![1, 2, 3, 4, 5].includes(answer)) {
      throw new Error(`Invalid answer for question ${question.id}`);
    }

    const v = answerToValue(answer);

    for (const key of Object.keys(scores)) {
      scores[key] += v * question.weights[key];
    }
  }

  return scores;
}

const maxPossible = {
  T: 34,
  F: 34,
  S: 38,
  R: 38,
  H: 58
};

export function normalizeScores(rawScores) {
  const normalized = {};

  for (const key of Object.keys(rawScores)) {
    normalized[key] = Math.round(
      Math.max(
        0,
        Math.min(
          100,
          50 + (rawScores[key] / maxPossible[key]) * 50
        )
      )
    );
  }

  return normalized;
}

export function decideHouse(scores) {
  const darkScores = {
    T: scores.T,
    F: scores.F,
    S: scores.S,
    R: scores.R
  };

  const sortedDark = Object.entries(darkScores)
    .sort((a, b) => b[1] - a[1]);

  const [topKey, topScore] = sortedDark[0];
  const [secondKey, secondScore] = sortedDark[1];

  if (scores.H >= 72 && topScore <= 60) {
    return "E";
  }

  if (scores.H >= 80 && scores.H - topScore >= 10) {
    return "E";
  }

  if (topScore < 52 && scores.H >= 65) {
    return "E";
  }

  if (topScore - secondScore >= 5) {
    return mapHouse(topKey);
  }

  return tieBreak(topKey, secondKey, scores);
}

export function mapHouse(key) {
  return {
    T: "A",
    F: "B",
    S: "C",
    R: "D"
  }[key];
}

export function tieBreak(a, b, scores) {
  if ([a, b].includes("S")) {
    return "C";
  }

  if ([a, b].includes("F")) {
    return "B";
  }

  if ([a, b].includes("T") && [a, b].includes("R")) {
    return scores.T >= scores.R ? "A" : "D";
  }

  return mapHouse(a);
}

export function calculateSortingToiletResult(answers) {
  const rawScores = calculateRawScores(answers);
  const normalizedScores = normalizeScores(rawScores);
  const house = decideHouse(normalizedScores);

  return {
    house,
    rawScores,
    normalizedScores
  };
}
