import React from 'react';
import ReactDom from 'react-dom';

const helloText = 'Hello';
const worldText = 'world!'

function getLabel() {
  return `${helloText} ${worldText}`;
}

const App = () => {
  return (
    <ul>
      <li>Строка: {/* Здесь может быть любой JS код, возвращающий значение */ getLabel()}!</li>
      <li>Число: {5} {0}!</li>
      <li>JSX: {<b>Hello world</b>}!</li>
      <li>null, undefined: {null}, {undefined}!</li>
      <li>Логический тип: {false} {true}!</li>
      <li>Массив: { ['Hello', 'world'] }!</li>
    </ul>
  );
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
