import React from 'react';
import ReactDOM from 'react-dom/client';
//import NotificationList from './chapter04/NotificationList';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//import CommentList from './chapter03/CommentList';
//import Clock from './chapter02/Clock';
//import Library from './chapter01/Library';

//setInterval(() => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
//}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
