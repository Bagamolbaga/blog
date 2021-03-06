import React, { useState } from "react";
import { Context } from "./components/context.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header.jsx";
import HeaderNavMenu from "./components/HeaderNavMenu.jsx";
import Main from "./components/Main.jsx";
import PostOpened from "./components/PostOpened.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      img: "fsfsf",
      tittle: "Text first tittle",
      text: "Post first text",
      category: "Photography",
      author: "Baga Lolka",
      dateCreate: "21:49 17.11.20",
      likes: 10,
      views: 189,
    },
    {
      id: 2,
      img: "fsfsf",
      tittle: "Text second tittle",
      text: "Post second text",
      category: "Art",
      author: "Lolka",
      dateCreate: "15:17 20.12.20",
      likes: 21,
      views: 98,
    },
    {
      id: 3,
      img: "fsfsf",
      tittle: "Text three tittle",
      text: "Post three text",
      category: "Fasion",
      author: "Baga",
      dateCreate: "10:31 15.10.20",
      likes: 17,
      views: 90,
    },
  ]);

  return (
    <Router>
      <Context.Provider value={{ posts }}>
        <React.Fragment>
          <Header />
          <HeaderNavMenu />

          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/post/:postId">
              <PostOpened />
            </Route>
          </Switch>

          <Footer />
        </React.Fragment>
      </Context.Provider>
    </Router>
  );
}

export default App;
