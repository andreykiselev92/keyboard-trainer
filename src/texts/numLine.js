export const getNum = lang => {
  const arr = lang === "eng" ? engArr : ruArr;

  let newArr = [];
  for (let i = 0; i < 1000; i++) {
    newArr.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return newArr.join("");
};

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

const engArr = [
  "`",
  "~",
  "¶",
  " ",
  "1",
  "!",
  "2  ",
  " ",
  "@",
  "3",
  "#",
  "¶",
  "4",
  "$",
  " ",
  "5",
  "%",
  "6",
  "^",
  " ",
  "7",
  "&",
  "8",
  "*",
  "9",
  "(",
  "¶",
  " ",
  "0",
  ")",
  "-",
  "_",
  "=",
  " ",
  "+"
];
