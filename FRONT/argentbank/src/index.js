import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Header} from "./components/Header/Header";
import {SignIn} from "./pages/SignIn/SignIn";
import {Footer} from "./components/Footer/Footer";
import {User} from "./pages/User/User";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.js";
import {Provider} from "react-redux";
import {EditForm} from "./components/EditForm/EditForm";
import {Protected} from "./components/Protected/Protected";


const Store = configureStore({
    reducer : rootReducer,
    devTools : true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <Provider store={Store}>
              <BrowserRouter >
                  <Header />
                      <Routes>
                          <Route path="/" element={<Home/>} />
                          <Route path="/sign-in" element={<SignIn />} />

                          <Route path="/profile"
                                 element={<Protected><User /></Protected>}
                          />
                          <Route path="/edit" element={<EditForm />} />
                      </Routes>
                  <Footer />
              </BrowserRouter>
          </Provider>
  </React.StrictMode>
);


