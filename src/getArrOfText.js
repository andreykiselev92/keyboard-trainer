import { eng } from "./texts/eng";
import { ru } from "./texts/ru";

export const getArrOfText = (engLang, str = "") => {
  const lengthOfSubArr = 76;
  let arr = [];

  str = getString(engLang, str);

  for (let i = 0; i < str.length; i++) {
    let subStr = str.slice(i, i + lengthOfSubArr);
    const indexSpace = subStr.lastIndexOf(" ");
    const indexEnter = subStr.indexOf("¶");
    let newI = i;

    if (indexEnter !== -1) {
      newI = i + indexEnter;

      const newElem = getStringWithEnter({ indexEnter, subStr });

      arr.push(newElem);
    } else if (indexSpace !== -1) {
      let newElem;

      const objWithNewString = getStringWithSpace({
        i,
        subStr,
        str,
        indexSpace
      });

      newElem = objWithNewString.newElem;
      newI = objWithNewString.newI;

      arr.push(newElem);
    } else {
      arr.push(subStr);
      newI = i + subStr.length;
    }

    i = newI;
  }

  return arr;
};

const getString = (engLang, str) => {
  if (engLang) {
    if (str === "") {
      str = eng;
    }
  } else {
    if (str === "") {
      str = ru;
    }
  }

  str = changeString(str);

  return str;
};

const changeString = str => {
  str = str.replace(/( )+/g, " ");
  str = str.replace(/\n+/g, "¶");
  str = str.replace(/–/g, "-");
  str = str.replace(/—/g, "-");

  return str;
};

const deleteFirstSpace = item => {
  // return item.replace(/^( )+/g, "");
  return item.trim();
};

const getStringWithEnter = ({ indexEnter, subStr }) => {
  let newElem = subStr.slice(0, indexEnter + 1);
  if (newElem.length > 1) {
    newElem = deleteFirstSpace(newElem);
  }
  return newElem;
};

const getStringWithSpace = ({ i, subStr, str, indexSpace }) => {
  let newElem, newI;
  if (subStr.length + i === str.length) {
    newElem = subStr;
    newElem = deleteFirstSpace(newElem);
    newI = i + subStr.length;
  } else {
    newElem = subStr.slice(0, indexSpace + 1);
    newElem = deleteFirstSpace(newElem);
    newI = i + indexSpace;
  }

  return { newElem, newI };
};
