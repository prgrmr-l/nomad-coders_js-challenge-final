const quotes = [
  {
    quote: "가갸 뒷다리(뒤 자)도 모른다.",
    meaning:
      "'가'와 '갸'의 'ㅏ' , 'ㅑ'도 쓸 줄 모른다는 말로, 글자를 모르거나 사리에 어두는 무식한 사람을 놀림조로 이르는 말이다.",
  },
  {
    quote: "가게 기둥에 입춘.",
    meaning:
      "제 격식에 어울리지 않음을 이르는 말. 입춘대길은 집에 붙이는 문구고 가게 기둥은 물건값을 적던 곳이다.",
  },
  {
    quote: "가까운 남이 먼 친척(일가)보다 낫다.",
    meaning:
      "가까운 이웃끼리 친하게 지내다 보면 멀리 있는 친척보다 더 친하게 된다는 말이다.",
  },
  {
    quote: "가까운 데 집은 깎이고 먼 데 절(집)은 비친다.",
    meaning:
      "늘 가까이에 있는 것은 흠이 잘 드러나 좋아 보이지 않지만 멀리 있는 것은 실제보다 더 좋아 보인다는 말.",
  },
  {
    quote: "가까운 데를 가도 점심밥을 싸 가지고 가거라.",
    meaning: "어떤 일이든지 준비를 든든히 하라는 말",
  },
  {
    quote: "가까운 무당보다 먼 데 무당이 영하다.",
    meaning: "자신이 잘 모르는 멀리 있는 것이 더 좋은 줄 안다는 말",
  },
  {
    quote: "가까운 제 눈썹 못 본다.",
    meaning: "눈앞에 가까이 있는 것은 오히려 더욱 못 본다는 말",
  },
  {
    quote: "가까운 집 며느리일수록 흉이 많다.",
    meaning: "가깝고 잘 아는 사람일수록 안 좋은 점이 더 보인다는 말",
  },
  {
    quote: "가까이 앉아야 정이 두터워진다.",
    meaning: "서로 가까이 있으면서 자주 만나야 정이 깊어진다는 말",
  },
  {
    quote: "가꾸지 않는 곡식 잘 되는 법이 없다.",
    meaning:
      "사람을 잘 이끌고 가르치지 않으면 잘 되지 않음을 비유적으로 이르는 말",
  },
];

const quote = document.querySelector("#quote span:first-child");
const meaning = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `<속담>: ${todaysQuote.quote}`;
meaning.innerText = `<뜻>: ${todaysQuote.meaning}`;
