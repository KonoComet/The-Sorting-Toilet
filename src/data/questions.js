export const answerOptions = [
  { value: 1, label: "放屁" },
  { value: 2, label: "比较不同意" },
  { value: 3, label: "不好说" },
  { value: 4, label: "比较同意" },
  { value: 5, label: "确实" }
];

export const questions = [
  { id: 14, text: { zh: "所有人都说看了难受一天，结果你更想看了", en: "Everyone says it’ll ruin your day, so now you obviously need to see it." }, weights: { T: 0, F: 0, S: 2, R: 0, H: -1 } },
  { id: 3, text: { zh: "如果小作弊能换大收益，为什么不呢", en: "If a tiny cheat gets you a huge payoff, why are we pretending this is a hard question?" }, weights: { T: 2, F: 0, S: 1, R: 0, H: -2 } },
  { id: 22, text: { zh: "你不相信“我是为你好”这句话", en: "The phrase “I’m doing this for your own good” makes you immediately suspicious." }, weights: { T: 0, F: 1, S: 0, R: 2, H: -1 } },
  { id: 7, text: { zh: "输赢不重要，表现最重要", en: "Winning is optional. Looking good while losing is not." }, weights: { T: 0, F: 2, S: 0, R: 0, H: -1 } },
  { id: 18, text: { zh: "你其实一直很好奇触碰了别人的底线会怎样", en: "You have always wanted to know what happens when someone’s “line” actually gets crossed." }, weights: { T: 0, F: 0, S: 2, R: 1, H: -1 } },
  { id: 25, text: { zh: "踩着别人获得的成就还是算了吧", en: "If the achievement comes from stepping on someone else, maybe leave it in the trash." }, weights: { T: -1, F: -1, S: -1, R: -1, H: 2 } },

  { id: 1, text: { zh: "人生苦短，及时行乐，长期规划，有空再说", en: "Life is short. Enjoy it now. Long-term planning can wait until the panic wears off." }, weights: { T: 2, F: 0, S: 0, R: 0, H: -1 } },
  { id: 16, text: { zh: "你最喜欢闷声发大财", en: "Your favorite way to win is quietly, before anyone realizes they should have stopped you." }, weights: { T: 0, F: 1, S: 2, R: 0, H: -1 } },
  { id: 29, text: { zh: "即便做不到你也渴望着公平", en: "Even when you fail at it, some annoying part of you still wants things to be fair." }, weights: { T: -1, F: 0, S: 0, R: -1, H: 2 } },
  { id: 10, text: { zh: "这不叫玩弄感情这叫管理他人情绪健康", en: "It’s not emotional manipulation. It’s unpaid management of someone else’s mental state." }, weights: { T: 0, F: 2, S: 0, R: 0, H: -1 } },
  { id: 5, text: { zh: "稳定的生活也太无聊了吧", en: "A stable life sounds like a slow, well-decorated death." }, weights: { T: 2, F: 0, S: 0, R: 0, H: -1 } },
  { id: 23, text: { zh: "比起规则本身的合理性，你更在意是谁制定的规则", en: "The rules matter less to you than the people who got to write them." }, weights: { T: 0, F: 0, S: 1, R: 2, H: -1 } },

  { id: 12, text: { zh: "你其实挺享受很多人都在议论你的情况", en: "You do not hate being talked about nearly as much as you pretend to." }, weights: { T: 0, F: 2, S: 1, R: 0, H: -2 } },
  { id: 30, text: { zh: "无论怎样，无辜者受到牵连都是难以接受的", en: "No matter how people dress it up, dragging innocent people into it is still disgusting." }, weights: { T: -2, F: -1, S: -2, R: -2, H: 3 } },
  { id: 19, text: { zh: "性只是人类的本能，你不介意这个话题出现在任何场合", en: "Sex is just biology. The real joke is everyone acting shocked when biology enters the room." }, weights: { T: 0, F: 0, S: 1, R: 2, H: -2 } },
  { id: 4, text: { zh: "你经常安慰别人别急别慌哪怕实际上有点大难临头", en: "You tell people not to panic even when disaster has already found parking." }, weights: { T: 1, F: 1, S: 0, R: 0, H: -1 } },
  { id: 27, text: { zh: "被说“天真”总比装聪明强", en: "Being called naive is still better than cosplaying as smart." }, weights: { T: -1, F: -1, S: -1, R: 0, H: 2 } },
  { id: 15, text: { zh: "比起揭开科学奥秘，你更想要看惊天大瓜", en: "Given a scientific breakthrough and a catastrophic piece of gossip, you know which one you’re clicking." }, weights: { T: 0, F: 1, S: 2, R: 0, H: -1 } },

  { id: 8, text: { zh: "为了维持关系，你常把真相修饰成对方能接受的样子", en: "To keep a relationship alive, you sand down the truth until it stops cutting them." }, weights: { T: 0, F: 2, S: 0, R: 0, H: -2 } },
  { id: 21, text: { zh: "你渴望一场完全真诚的对话", en: "You want one conversation where everyone finally drops the performance." }, weights: { T: 0, F: 0, S: 1, R: 2, H: -1 } },
  { id: 2, text: { zh: "你宁愿沦为笑柄也不愿被说平庸", en: "You would rather be a joke than background noise." }, weights: { T: 2, F: 0, S: 0, R: 1, H: -1 } },
  { id: 26, text: { zh: "凭直觉回答吧", en: "Go with your gut. The brain has already hired lawyers." }, weights: { T: -1, F: -2, S: -1, R: -1, H: 2 } },
  { id: 11, text: { zh: "没必要“做自己”，好好活着才重要", en: "Who cares about “being yourself” when simply surviving already takes this much effort?" }, weights: { T: 0, F: 2, S: 0, R: 0, H: -1 } },
  { id: 24, text: { zh: "结果比过程更重要", en: "The result matters more than how clean your hands look afterward." }, weights: { T: 1, F: 0, S: 0, R: 2, H: -1 } },

  { id: 6, text: { zh: "这些问题太保守了", en: "These questions are still playing it too safe." }, weights: { T: 1, F: 0, S: 0, R: 1, H: -1 } },
  { id: 17, text: { zh: "没必要宣布胜利，你只在意你得到了你想要的东西", en: "No need for a victory speech. You got what you came for." }, weights: { T: 0, F: 1, S: 2, R: 0, H: -2 } },
  { id: 28, text: { zh: "你觉得作者是个坏东西", en: "You suspect the person who wrote this should not be left alone with a moral compass." }, weights: { T: -1, F: 0, S: -1, R: -1, H: 2 } },
  { id: 9, text: { zh: "获得你的真诚相待是很难的一件事", en: "Your sincerity has an application process." }, weights: { T: 0, F: 2, S: 1, R: 0, H: -1 } },
  { id: 20, text: { zh: "人和动物没什么区别", en: "Humans are just animals with better excuses." }, weights: { T: 0, F: 0, S: 0, R: 2, H: -1 } },
  { id: 13, text: { zh: "有没有朋友其实没太所谓", en: "Friends are nice, but let’s not pretend they’re oxygen." }, weights: { T: 0, F: 0, S: 2, R: 0, H: -1 } }
];
