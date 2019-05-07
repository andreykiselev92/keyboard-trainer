// export let engNum = getNum();

export function getEngNum() {
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
  let newArr = [];
  for (let i = 0; i < 1000; i++) {
    newArr.push(engArr[Math.floor(Math.random() * engArr.length)]);
  }
  return newArr.join("");
}
