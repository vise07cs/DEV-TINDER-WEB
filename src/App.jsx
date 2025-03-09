import { useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
// import "./index.css"
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Feed from "./components/Feed";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";



function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body></Body>}>
            <Route path="/" element={<Feed></Feed>}></Route>

              <Route path="/profile" element={<Profile></Profile>}></Route>

              <Route path="/login" element={<Login></Login>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

// no updates on 07-03-25
