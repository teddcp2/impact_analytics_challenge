import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Container from "./Components/container/container";
import CandidateDetails from "./Components/candidateDetails/candidateDetails";
import SelectedCandidates from "./Components/selectedCandidates/selectedCandidates";
import RejectedCandidates from "./Components/rejectedCandidates/rejectedCandidates";
import "./styles.css";

export default function App() {
  return (
    <div className="ui">
      <div className="header">
        <Link to="/">
          <h2 className="ui center aligned header">JobPortal</h2>
        </Link>
      </div>

      <Switch>
        <Route path="/" component={Container} exact />
        <Route path="/candidate/:id" component={CandidateDetails} exact />
        <Route path="/rejected" component={RejectedCandidates} exact />
        <Route path="/shortListed" component={SelectedCandidates} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
