import React from "react";
import "./Progress.css";
import ProgressTable from "./ProgressRu/ProgressTable";

export default function Progress(props) {
  return (
    <div className="Progress">
      <h1>Достижения:</h1>
      <div className="ProgressWrapper">
        <div className="ProgressItem">
          <h3>Английская раскладка (qwerty)</h3>
          {props.progress.eng ? (
            props.progress.eng.length > 0 ? (
              <ProgressTable
                arr={props.progress.eng}
                lang="eng"
                deleteHandler={props.deleteHandler}
              />
            ) : "Пока нет достижений"
          ) : "Пока нет достижений"}
        </div>
        <div className="ProgressItem">
          <h3>Русская раскладка (йцукен)</h3>
          {props.progress.ru ? (
            props.progress.ru.length > 0 ? (
              <ProgressTable
                arr={props.progress.ru}
                lang="ru"
                deleteHandler={props.deleteHandler}
              />
            ) : "Пока нет достижений"
          ) : "Пока нет достижений"}
        </div>
      </div>
    </div>
  );
}
