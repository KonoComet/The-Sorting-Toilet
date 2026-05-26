export const radarLabels = {
  zh: {
    T: "梭哈精神",
    F: "八面玲珑",
    S: "禁忌渴望",
    R: "秩序腐蚀",
    H: "道德残留"
  },
  en: {
    T: "Risk Approach",
    F: "Social Masking",
    S: "Forbidden Craving",
    R: "Order Corrosion",
    H: "Moral Residue"
  }
};

export const copy = {
  zh: {
    appName: "分院马桶",
    schoolName: "黑荆棘魔法学校",
    languageChinese: "中文",
    languageEnglish: "English",
    languageSwitchLabel: "语言",
    mute: "静音",
    unmute: "开启声音",
    soundOff: "声音：关",
    soundOn: "声音：开",
    nameTitle: "录取档案检索",
    namePrompt: "你是？",
    nameButton: "查询录取结果",
    errors: { name: "请输入名字。" },
    envelopeLine: "正在检索黑荆棘魔法学校录取档案……",
    letter: {
      dear: "亲爱的「USER_NAME」：",
      body: [
        "我们愉快地通知您，您已获准在黑荆棘魔法学校就读。",
        "随信附上所需书籍和装备清单。",
        "学期定于九月一日开始，请勿同时接受其它魔法学院"
      ],
      closing: "您忠诚的，",
      headmaster: "黑彗彗·星\n校长"
    },
    useToilet: "使用分院马桶!",
    toiletEntryKicker: "分院仪式",
    toiletEntryTitle: "请在圣器前保持端正",
    beginTest: "入座",
    questionCount: (current, total) => `第 ${current} / ${total} 题`,
    answerOptions: [
      { value: 1, label: "放屁" },
      { value: 2, label: "比较不同意" },
      { value: 3, label: "不好说" },
      { value: 4, label: "比较同意" },
      { value: 5, label: "确实" }
    ],
    back: "上一题",
    next: "下一题",
    submit: "提交审判",
    restartQuiz: "重新开始",
    restartQuizConfirm: "确定要重新开始测试吗？当前答题进度将被清空，并返回分院仪式。",
    judgingLines: [
      "分院马桶正在冲洗您的灵魂残渣……",
      "正在检测黑魔法适配度……",
      "请勿起身。命运尚未冲净。"
    ],
    resultKicker: "黑荆棘录取结论",
    ordinalAdmitted: (ordinal, houseName) => `恭喜！你是第 ${ordinal} 个加入「${houseName}」的学生！`,
    ordinalExpelled: (ordinal) => `你是第 ${ordinal} 个被当场开除的学生，请前往对面报道！`,
    statsTitle: "全校统计",
    statsUnavailable: "统计暂不可用",
    registrationUnavailable: "全校统计暂时无法连接。您的分院结果已生成，但尚未登记。",
    statRows: {
      A: "蟾院",
      B: "狐院",
      C: "蝎院",
      D: "兔院",
      E: "当场开除"
    },
    admissionAssessment: "录取评估",
    professionalAnalysis: "心理分析备忘",
    syndromeTitle: "黑魔法适配症候群",
    radarTitle: "伪装心理指标",
    shareTitle: "分享卡片",
    retake: "重新测试",
    acceptable: "可控",
    unstable: "已冲走",
    diagnosticFields: {
      syndromeName: "症候名称",
      darkCompatibility: "黑魔法适配度",
      moralResidue: "道德残留量",
      socialMasking: "社交伪装指数",
      forbiddenCraving: "禁忌知识渴求度",
      flushStability: "冲水稳定性",
      treatment: "建议处理方式"
    }
  },
  en: {
    appName: "The Sorting Toilet",
    schoolName: "Blackthorn School of Magic",
    languageChinese: "中文",
    languageEnglish: "English",
    languageSwitchLabel: "Language",
    mute: "Mute",
    unmute: "Unmute",
    soundOff: "Sound: Off",
    soundOn: "Sound: On",
    nameTitle: "Admission Archive Retrieval",
    namePrompt: "Enter your name to retrieve your admission result",
    nameButton: "Retrieve Admission Result",
    errors: { name: "Please enter your name." },
    envelopeLine: "Retrieving your Blackthorn admission record...",
    letter: {
      dear: "Dear 「USER_NAME」,",
      body: [
        "We are pleased to inform you that you have been accepted at Blackthorn School of Magic.",
        "Please find enclosed a list of all necessary books and equipment.",
        "Term begins on the first of September."
      ],
      closing: "Yours sincerely,",
      headmaster: "Blacomet·Star\nHeadmaster"
    },
    useToilet: "Use The Sorting Toilet!",
    toiletEntryKicker: "Sorting Rite",
    toiletEntryTitle: "Remain Properly Seated Before the Relic",
    beginTest: "Begin Psychological Assessment",
    questionCount: (current, total) => `Question ${current} / ${total}`,
    answerOptions: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Uncertain" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" }
    ],
    back: "Back",
    next: "Next",
    submit: "Submit Judgment",
    restartQuiz: "Restart Quiz",
    restartQuizConfirm: "Restart the quiz? Your current answers and progress will be cleared, and you will return to the sorting start.",
    judgingLines: [
      "The Sorting Toilet is rinsing the residue of your soul...",
      "Detecting dark magical compatibility...",
      "Remain seated. Fate has not finished flushing."
    ],
    resultKicker: "Blackthorn Admission Verdict",
    ordinalAdmitted: (ordinal, houseName) => `Congratulations! You are the #${ordinal} student admitted to ${houseName}!`,
    ordinalExpelled: (ordinal) => `You are the #${ordinal} student expelled on the spot. Please report across the street.`,
    statsTitle: "Schoolwide Statistics",
    statsUnavailable: "Statistics temporarily unavailable",
    registrationUnavailable: "Schoolwide statistics are temporarily unavailable. Your result has been generated but not registered.",
    statRows: {
      A: "Toad House",
      B: "Fox House",
      C: "Scorpion House",
      D: "Rabbit House",
      E: "Expelled on the Spot"
    },
    admissionAssessment: "Admission Assessment",
    professionalAnalysis: "Psychological Analysis Memo",
    syndromeTitle: "Dark Compatibility Syndrome",
    radarTitle: "Disguised Psychological Indicators",
    shareTitle: "Shareable Result Card",
    retake: "Retake",
    acceptable: "Acceptable",
    unstable: "Flushed",
    diagnosticFields: {
      syndromeName: "Syndrome Name",
      darkCompatibility: "Dark Compatibility",
      moralResidue: "Moral Residue",
      socialMasking: "Social Masking Index",
      forbiddenCraving: "Forbidden Knowledge Craving",
      flushStability: "Flush Stability",
      treatment: "Recommended Treatment"
    }
  }
};

export const houseContent = {
  A: {
    zh: {
      name: "蟾院",
      animal: "蟾蜍",
      verdict: "您的判断力并未缺席，它只是经常在刺激出现时主动请假。",
      keywords: ["高风险", "高回报", "享乐主义", "赌徒心理", "短期兴奋偏好"],
      admissionAssessment: "您展现出明显的风险趋近倾向：面对不确定收益时，您并不会本能退缩，反而会被代价、赔率和旁观者的沉默所吸引。您的心理结构并非单纯冲动，而是倾向于把危险视为一种高浓度体验。普通人追求安全感，您更像是在测试安全感还能被破坏到什么程度。",
      psychAnalysis: "从黑荆棘的入学评估角度看，您的奖赏系统对“可能赢得很多”反应过度，而对“可能失去很多”保持一种令人费解的礼貌性冷淡。这不构成疾病诊断，只构成对本校财务部门的潜在威胁。",
      headmasterNote: "校长批注：可录取。请勿让此生物靠近奖学金预算、骰子或任何写着“最后一次”的机会。",
      syndromeName: "高赔率兴奋依赖型黑魔法适配症",
      recommendedTreatment: "立即分入蟾院。建议定期投喂危险、掌声与可控损失。",
      shareLine: "我被分院马桶诊断为：风险趋近过量，道德刹车偏软。"
    },
    en: {
      name: "Toad House",
      animal: "Toad",
      verdict: "Your judgment is not absent. It simply files for leave whenever stimulation enters the room.",
      keywords: ["High risk", "High reward", "Pleasure drive", "Gambler psychology", "Short-term thrill preference"],
      admissionAssessment: "Your profile shows a clear risk-approach tendency. When faced with uncertain reward, you do not instinctively retreat; you become attentive to stakes, odds, and the silence of people who expected you to be sensible. This is not mere impulsiveness. It is a tendency to treat danger as a concentrated form of experience. Ordinary people seek safety. You appear more interested in discovering how far safety can be bent before it screams.",
      psychAnalysis: "From Blackthorn's admissions perspective, your reward system responds excessively to the phrase “you might win a great deal,” while maintaining a troublingly polite indifference toward “you might lose a great deal.” This is not a clinical diagnosis. It is, however, a potential threat to the school budget.",
      headmasterNote: "Headmaster's Note: Admissible. Do not allow this creature near scholarship funds, dice, or anything labeled “one last time.”",
      syndromeName: "High-Odds Excitation Dependency",
      recommendedTreatment: "Assign to Toad House immediately. Provide controlled doses of danger, applause, and acceptable loss.",
      shareLine: "The Sorting Toilet diagnosed me with excessive risk approach and insufficient moral braking."
    }
  },
  B: {
    zh: {
      name: "狐院",
      animal: "狐狸",
      verdict: "您并非不诚实，您只是认为真相没有必要每次都以原形出席。",
      keywords: ["社交伪装", "虚荣", "情绪结果主义", "体面管理", "关系操盘"],
      admissionAssessment: "您的评估结果显示出高度的社会情境敏感性。您擅长理解他人的期待，并能在必要时调整自己的呈现方式。您并不把语言当作事实的容器，而更倾向于把它视为局面控制工具。对您来说，真诚不是默认设置，而是一种需要选择释放对象的高价值资源。",
      psychAnalysis: "从心理结构上看，您具有稳定的外部形象管理需求和较强的结果导向。您能够在不明显破坏规则的前提下，让规则逐渐变得有利于您。这不属于临床问题，只是让诚实的人在您旁边显得像未经训练的公共设施。",
      headmasterNote: "校长批注：可录取。请为其配发镜子、手套和三份彼此矛盾但都很得体的声明。",
      syndromeName: "高功能社交伪装型黑魔法适配症",
      recommendedTreatment: "分入狐院。建议置于人群中观察，不建议让其负责会议纪要。",
      shareLine: "我被分院马桶诊断为：真相弹性良好，体面操控能力偏高。"
    },
    en: {
      name: "Fox House",
      animal: "Fox",
      verdict: "You are not necessarily dishonest. You simply believe truth need not appear in its original form every time.",
      keywords: ["Social masking", "Vanity", "Emotional consequentialism", "Reputation management", "Relational maneuvering"],
      admissionAssessment: "Your profile suggests high sensitivity to social context. You understand what others expect and can adjust your presentation when necessary. You do not treat language merely as a container for facts, but as an instrument for moving situations. For you, sincerity is not a default setting. It is a premium resource, released only to suitable recipients.",
      psychAnalysis: "Psychologically, you show a stable need for external image management and a strong outcome orientation. You can often make rules become useful to you without appearing to break them. This is not a clinical concern. It merely makes honest people look like untrained public furniture.",
      headmasterNote: "Headmaster's Note: Admissible. Issue a mirror, gloves, and three mutually contradictory yet impeccably tasteful statements.",
      syndromeName: "High-Functioning Social Camouflage Adaptation",
      recommendedTreatment: "Assign to Fox House. Observe in crowds. Do not let them write the meeting minutes.",
      shareLine: "The Sorting Toilet diagnosed me with flexible truth tolerance and elevated reputation control."
    }
  },
  C: {
    zh: {
      name: "蝎院",
      animal: "蝎子",
      verdict: "您不急着回答问题，因为您通常更关心是谁规定了问题。",
      keywords: ["禁忌知识", "冷观察", "隐性策略", "反社会机敏", "边界测试"],
      admissionAssessment: "您的结果显示出强烈的禁忌渴求和结构性怀疑。您对标准答案的兴趣有限，更在意答案背后的权限、锁、漏洞和沉默。您倾向于在别人表达态度时观察动机，在别人强调规则时寻找腐烂处。您不是单纯追求知识，您追求的是能改变他人行为的知识。",
      psychAnalysis: "从黑魔法适配角度看，您的认知系统对“不可触碰”三个字有异常稳定的注意力反应。普通学生看见门会寻找钥匙，您会先研究谁有资格宣布它是一扇门。这不是医学诊断，但足以让档案管理员把您的名字写在不可外借名单上。",
      headmasterNote: "校长批注：可录取。请勿向其透露禁书区位置；当然，它大概已经知道了。",
      syndromeName: "禁忌认知渴求型黑魔法适配症",
      recommendedTreatment: "分入蝎院。建议提供足够复杂的秘密，以免其自行制造更糟的。",
      shareLine: "我被分院马桶诊断为：禁忌渴求过高，普通答案耐受性极低。"
    },
    en: {
      name: "Scorpion House",
      animal: "Scorpion",
      verdict: "You are in no hurry to answer the question, because you are usually more interested in who was allowed to ask it.",
      keywords: ["Forbidden knowledge", "Cold observation", "Hidden strategy", "Antisocial cunning", "Boundary testing"],
      admissionAssessment: "Your result indicates a strong craving for forbidden knowledge and structural suspicion. Standard answers do not hold your attention for long. You are more interested in the permissions, locks, loopholes, and silences behind them. When others state their values, you observe their motives. When others praise the rules, you look for rot. You are not simply seeking knowledge; you are seeking knowledge that changes behavior.",
      psychAnalysis: "From a dark-magic compatibility perspective, your cognition shows a stable attentional response to the phrase “do not touch.” Ordinary students see a door and look for a key. You first investigate who had the authority to call it a door. This is not a medical diagnosis, but it is enough to put your name on the restricted archive list.",
      headmasterNote: "Headmaster's Note: Admissible. Do not disclose the location of the restricted section. Naturally, they probably already know.",
      syndromeName: "Forbidden Cognition Craving Adaptation",
      recommendedTreatment: "Assign to Scorpion House. Provide sufficiently complex secrets before they manufacture worse ones.",
      shareLine: "The Sorting Toilet diagnosed me with excessive forbidden craving and low tolerance for ordinary answers."
    }
  },
  D: {
    zh: {
      name: "兔院",
      animal: "兔子",
      verdict: "您不是热爱混乱，您只是对文明的包装纸严重过敏。",
      keywords: ["秩序腐蚀", "原始行动", "犬儒主义", "直接破坏", "生存本能"],
      admissionAssessment: "您的测试结果呈现出高秩序腐蚀倾向。您对群体共识、礼貌规则和温情叙事保持长期警惕，并倾向于相信文明只是暂时没露出牙齿。您不一定主动制造混乱，但一旦秩序开始松动，您会比大多数人更快看见其中的真实结构，并决定不再假装惊讶。",
      psychAnalysis: "您的心理防御方式偏向犬儒化现实检验：先假定包装会破，再观察里面剩下什么。此倾向在普通社交场合可能被误读为冷漠、粗暴或“为什么他还在笑”。在本校语境下，这被视为对世界最低限度的诚实。",
      headmasterNote: "校长批注：可录取。请配发耐咬家具，并避免在其面前使用“我们都是一家人”这类句子。",
      syndromeName: "高强度秩序腐蚀型黑魔法适配症",
      recommendedTreatment: "分入兔院。建议提供明确出口、低信任环境和足够结实的门。",
      shareLine: "我被分院马桶诊断为：秩序过敏，文明包装纸不耐受。"
    },
    en: {
      name: "Rabbit House",
      animal: "Rabbit",
      verdict: "You do not love chaos. You are simply severely allergic to the wrapping paper of civilization.",
      keywords: ["Order corrosion", "Primitive action", "Cynicism", "Direct disruption", "Survival instinct"],
      admissionAssessment: "Your profile shows a high order-corrosion tendency. You maintain long-term suspicion toward consensus, polite rules, and sentimental narratives. You seem inclined to believe civilization is only temporarily hiding its teeth. You may not actively create chaos, but once order begins to loosen, you see its underlying structure sooner than most, and decide not to pretend surprise.",
      psychAnalysis: "Your psychological defense style leans toward cynical reality testing: assume the packaging will tear, then inspect what remains. In ordinary social environments, this may be misread as coldness, bluntness, or “why are they laughing right now?” At Blackthorn, it is considered a minimum standard of honesty.",
      headmasterNote: "Headmaster's Note: Admissible. Provide bite-resistant furniture and avoid using phrases such as “we are all family” in their presence.",
      syndromeName: "High-Intensity Order Corrosion Adaptation",
      recommendedTreatment: "Assign to Rabbit House. Provide visible exits, low-trust environments, and sufficiently sturdy doors.",
      shareLine: "The Sorting Toilet diagnosed me with order allergy and poor tolerance for civilized packaging."
    }
  },
  E: {
    zh: {
      name: "我们认错人了",
      animal: "无",
      verdict: "分院马桶沉默了很久，最后认为您对黑荆棘校风存在净化风险。",
      keywords: ["道德残留", "过度善良", "克制", "共情", "黑魔法不适配"],
      admissionAssessment: "您的结果显示，道德残留量显著偏高。您在优势、伤害、信任和代价之间仍保留了令人担忧的克制反射。黑荆棘评估系统认为，继续收容您可能导致周围学生出现反省、内疚、合作等不良风气，因此不建议录取。",
      psychAnalysis: "从黑魔法适配角度看，您表现出异常稳定的共情反应和伦理刹车。此现象不构成疾病，但在本校属于传染性校风事故。马桶已启动紧急冲送程序，以保护黑荆棘现有生态。",
      headmasterNote: "校长批注：不予录取。此人太善良，已被马桶冲走，发配至霍格沃茨。",
      syndromeName: "高道德残留型黑魔法排异反应",
      recommendedTreatment: "立即冲走。建议转入更适合善良、勇气、友谊和其他危险品质的学校。",
      shareLine: "我被分院马桶诊断为：道德残留超标，已被冲走。"
    },
    en: {
      name: "Hogwarts",
      animal: "None; flushed away",
      verdict: "The Sorting Toilet remained silent for a long time and concluded that you pose a purification risk to Blackthorn's culture.",
      keywords: ["Moral residue", "Excessive kindness", "Restraint", "Empathy", "Dark-magic rejection"],
      admissionAssessment: "Your result indicates significantly elevated moral residue. When faced with advantage, harm, trust, and cost, you still retain a concerning reflex for restraint. Blackthorn's admissions system has determined that continued containment may cause reflection, guilt, cooperation, and other undesirable atmospheric changes among the student body. Admission is therefore not recommended.",
      psychAnalysis: "From a dark-magic compatibility perspective, you show unusually stable empathy and ethical braking. This is not a disease. At this school, however, it qualifies as a contagious cultural incident. The Toilet has activated emergency flush transfer to protect the existing ecosystem.",
      headmasterNote: "Headmaster's Note: Rejected. Too kind. Flushed away and reassigned to Hogwarts.",
      syndromeName: "High Moral Residue Dark-Magic Rejection",
      recommendedTreatment: "Flush immediately. Recommend transfer to an institution more tolerant of kindness, courage, friendship, and other hazardous qualities.",
      shareLine: "The Sorting Toilet diagnosed me with excessive moral residue. I have been flushed away."
    }
  }
};
