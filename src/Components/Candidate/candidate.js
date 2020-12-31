import React from "react";
import "./candidate.css";
import { withRouter } from "react-router-dom";

const Candidate = ({ id, img, name, history }) => {
  const handleClick = () => history.push(`/candidate/${id}`);

  return (
    <div className="ui card" onClick={handleClick}>
      <a className="image">
        <img src={img} alt={name} height="100px" />
      </a>
      <div className="content">
        <a className="header" onClick={handleClick}>
          {name}
        </a>
      </div>
    </div>
  );
};

export default withRouter(Candidate);
