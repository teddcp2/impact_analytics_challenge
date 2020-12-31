import React from "react";

let MycontextData = React.createContext({
  candidates: null,
  selectedList: null,
  rejectedlist: null,
  selectCandidate: () => {},
  rejectCandidate: () => {}
});

export default MycontextData;
