// export let ruNum = getNum();

export function getRuNum() {
	console.log(2);
  const ruArr = [
    "ё",
	"1",
	"¶",
    " ",
    "!",
    "2",
    '"',
    " ",
    "3",
    "№",
    "4",
    ";",
    " ",
    "5",
    "%",
    "6",
    " ",
    ":",
	"7",
	"¶",
    "?",
    "8",
    " ",
    "*",
    "9",
    "(",
    " ",
    "0",
    ")",
	"-",
	"¶",
    "_",
    "=",
    " ",
    "+",
    " "
  ];
  let newArr = [];
  for (let i = 0; i < 1000; i++) {
    newArr.push(ruArr[Math.floor(Math.random() * ruArr.length)]);
  }
  return newArr.join("");
}