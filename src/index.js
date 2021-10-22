import React from 'react';
import ReactDOM from 'react-dom';
import App from './ToDoList/App.jsx';
import "./main.css";

const mountNode = document.getElementById('app');
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, mountNode);
