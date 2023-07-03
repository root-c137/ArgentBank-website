import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Header} from "./components/Header/Header";
import {SignIn} from "./pages/SignIn/SignIn";
import {Footer} from "./components/Footer/Footer";
import {User} from "./pages/User/User";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <BrowserRouter >
              <Header />
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/sign-in" element={<SignIn />} />
                      <Route path="/user" element={<User />} />
                  </Routes>
              <Footer />
          </BrowserRouter>
  </React.StrictMode>
);


