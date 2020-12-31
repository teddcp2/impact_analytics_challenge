import React, { useContext } from "react";
import MycontextData from "../../context";

const CandidateDetails = ({ history, location, match }) => {
  let candidateId = match.params.id;
  console.log(candidateId);

  let data = useContext(MycontextData);
  console.log(data);

  return (
    <div class="ui centered card">
      <div class="image">
        <img src="" />
      </div>
      <div class="content">
        <a class="header">Elyse</a>
      </div>
    </div>
  );
};

export default CandidateDetails;
