import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchMascotas from "./components/SearchMascotas/SearchMascotas";
import Login from "./components/Login/Login";
import Navbar from "./components/NavBar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<Login/>} />
            <Route path="/" element={<App/>}>
                <Route path="/mascota" element={<SearchMascotas/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
