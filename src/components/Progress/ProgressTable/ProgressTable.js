import React from "react";
import "./ProgressTable.css";

export default function ProgressTable(props) {
  const bodyTable = props.arr.map((elem, index) => {
    const date = new Date(elem.date);
    return (
      <tr key={+date}>
        <td>
          <span>{date.toLocaleDateString()}</span>
          <span>{date.toLocaleTimeString()}</span>
        </td>
        <td>
          {elem.achievement}
          <span
            className="delete"
            onClick={() => {
              props.deleteHandler(index, props.lang);
            }}
          >
            &times;
          </span>
        </td>
      </tr>
    );
  });

  const table = (
    <table className="progressTable">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Достижение</th>
        </tr>
      </thead>
      <tbody>{bodyTable}</tbody>
    </table>
  );

  return table;
}
