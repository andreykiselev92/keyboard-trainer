import React from "react";
import "./Progress.css";
import ProgressTable from "./ProgressTable/ProgressTable";

const Progress = (props) => {
  return (
    <div className="progress">
      <h1>Достижения:</h1>
      <div className="progressWrapper">
        <div className="progressItem">
          <h3>Английская раскладка (qwerty)</h3>
          {props.progress.eng ? (
            props.progress.eng.length > 0 ? (
              <ProgressTable
                arr={props.progress.eng}
                lang="eng"
                deleteHandler={props.deleteHandler}
              />
            ) : (
                "Пока нет достижений"
              )
          ) : (
              "Пока нет достижений"
            )}
        </div>
        <div className="progressItem">
          <h3>Русская раскладка (йцукен)</h3>
          {props.progress.ru ? (
            props.progress.ru.length > 0 ? (
              <ProgressTable
                arr={props.progress.ru}
                lang="ru"
                deleteHandler={props.deleteHandler}
              />
            ) : (
                "Пока нет достижений"
              )
          ) : (
              "Пока нет достижений"
            )}
        </div>
      </div>
    </div>
  );
}

export default Progress;
