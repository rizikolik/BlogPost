import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "./app/Navbar";
import { PostsList } from "../src/features/posts/postsList";
import { AddPostForm } from "../src/features/posts/addPostForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <AddPostForm />>
                <PostsList />
              </Fragment>
            )}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
