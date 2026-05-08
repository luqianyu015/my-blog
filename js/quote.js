const quotes = [
    "星空之所以美丽，是因为它把光芒藏在黑暗里。",
    "你是藏在云层里的月亮，也是我穷极一生寻找的宝藏。",
    "愿你眼里的星星，永远明亮。",
    "星光不问赶路人，时光不负有心人。",
    "把烦恼丢进银河里，做个闪闪发光的大人。",
    "在自己的宇宙里，种自己的花，爱自己的世界。"
];

let currentIndex = 0;
const quoteElement = document.getElementById('quote-text');

function updateQuote() {
    quoteElement.innerText = quotes[currentIndex];
    currentIndex = (currentIndex + 1) % quotes.length;
}

updateQuote();
setInterval(updateQuote, 10000);