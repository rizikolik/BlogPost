import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "./app/Navbar";
import { PostsList } from "../src/features/posts/postsList";
import { SinglePostPage } from "../src/features/posts/SinglePostPage";
import { AddPostForm } from "../src/features/posts/addPostForm";
import { EditPostPage } from "../src/features/posts/EditPostPage";

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
                <AddPostForm />
                <PostsList />
              </Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/posts/:postId/edit" component={EditPostPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
