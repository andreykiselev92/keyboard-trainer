import { eng } from "./texts/eng";
import { ru } from "./texts/ru";
export function getArrOfText(engLang, str = "") {
  const lengthOfSubArr = 76;
  let arr = [];
  if (engLang) {
    if (str === "") {
      str = eng;
    }
  }
  else {
    if (str === "") {
      str = ru;
    }
  }
  str = str.replace(/( )+/g, " ");
  str = str.replace(/\n+/g, "¶");
  for (let i = 0; i < str.length; i++) {
    let subStr = str.slice(i, i + lengthOfSubArr);
    const indexSpace = subStr.lastIndexOf(" ");
    const indexEnter = subStr.indexOf("¶");
    let newI = i;
    if (indexEnter !== -1) {
      newI = i + indexEnter;
      let newElem = subStr.slice(0, indexEnter + 1);
      if (newElem.length > 1) {
        arr.push(newElem);
      }
    }
    else if (indexSpace !== -1) {
      let newElem;
      if (subStr.length + i === str.length) {
        newElem = subStr;
        arr.push(newElem);
        newI = i + subStr.length;
      }
      else {
        newElem = subStr.slice(0, indexSpace + 1);
        arr.push(newElem);
        newI = i + indexSpace;
      }
    }
    else {
      arr.push(subStr);
      newI = i + subStr.length;
    }
    i = newI;
  }
  return arr;
}
