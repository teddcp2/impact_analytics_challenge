import React from "react";
import Candidate from "../Candidate/candidate";
import "./collection.css";

const CollectionOfCandidates = ({ candidates }) => {
  let content = candidates.map((candidate) => (
    <Candidate
      key={candidate.id}
      id={candidate.id}
      img={candidate.Image}
      name={candidate.name}
    />
  ));

  return <div class="ui four stackable cards">{content}</div>;
};

export default CollectionOfCandidates;
