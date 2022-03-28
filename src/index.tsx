import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Calculator } from './Calculator';
import { NumberValidator } from './services/NumberValidator';
import { OperationsValidator } from './services/OperationsValidator';
import { SpecialsValidator } from './services/SpecialsValidator';

ReactDOM.render(
  <React.StrictMode>
    <Calculator numberValidator={new NumberValidator} operationsValidator={new OperationsValidator} specialsValidator={new SpecialsValidator} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
