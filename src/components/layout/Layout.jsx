import React, { Component } from "react";
import "./Layout.css";
import { Switch, Route } from "react-router-dom";

import NotesSection from "../notesSection/NotesSection";
import ItemsSection from "../itemsSection/ItemsSection";
import JokeSection from "../jokeSection/JokeSection";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <NotesSection />
          <Switch>
            <Route exact path="/" component={ItemsSection} />
            <Route path="/:noteId" component={ItemsSection} />
          </Switch>
        <JokeSection />
      </div>
    );
  }
}

export default Layout;
