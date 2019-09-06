import React from 'react';
import { render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App, { problem } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("contains foul button", () => {
  const myDoc = render(<App />)
  myDoc.getByText(/foul/i);
})

test("contains hit button", () => {
  const myDoc = render(<App/>);
  myDoc.getByText(/foul/i);
})

test("contains ball button", () => {
  const myDoc = render(<App/>);
  myDoc.queryAllByTitle(/ball/i);
})

test("contains strike button", () => {
  const myDoc= render(<App/>);
  myDoc.queryAllByTitle(/strike/i);
})

test("my math works", () => {
  expect(problem(10, 2, 4)).toBe(3);
  expect(problem(5, 4, 3)).toBe(3);
})