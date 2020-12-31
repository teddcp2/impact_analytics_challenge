import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import API from "../../apiConfig/api";
import CollectionOfCandidates from "../Collection/collectionWrapper";
import LoaderCards from "../LoaderCards/loaderCards";
import SearchContainer from "../searchContainer/searchContainer";
import MycontextData from "../../context";
import "./container.css";

class App extends Component {
  state = {
    candidates: [],
    selectedCandidates: [],
    rejectedCandidates: [],
    status: null,
    searchedText: null
  };

  addCandidatetoShortList = (id) => {
    this.setState((prevState) => ({
      selectedCandidates: [...prevState.selectedCandidates, id]
    }));
  };

  addCandidatetoReject = (id) => {
    this.setState((prevState) => ({
      rejectedCandidates: [...prevState.rejectedCandidates, id]
    }));
  };

  setSearchText = (value) => {
    // console.log(value);
    this.setState({ searchedText: value });
  };

  searchCandidates = () => {
    let newCandidates = this.state.candidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(this.state.searchedText)
    );
    return newCandidates;
  };

  getResults = async () => {
    let response = await API.get("/he-public-data/users49b8675.json");
    // console.log(response);

    if (response.status === 200) {
      this.setState({ candidates: response.data, status: 200 });
    } else {
      this.setState({ status: 400 });
    }
  };
  componentDidMount() {
    this.getResults();
  }

  getContentsToRender() {
    let contents = "";

    if (this.state.status === 400) {
      contents = (
        <p className="ui center aligned">
          Some Error Ocurred.. Try again After some time
        </p>
      );
    } else if (this.state.candidates.length && this.state.status === 200) {
      if (!this.state.searchedText)
        contents = (
          <CollectionOfCandidates candidates={this.state.candidates} />
        );
      else {
        let candidatesAfterSearch = this.searchCandidates();
        contents = (
          <CollectionOfCandidates candidates={candidatesAfterSearch} />
        );
      }
    } else if (!this.state.status && !this.state.candidates.length) {
      contents = <LoaderCards />;
    }

    return contents;
  }

  render() {
    return (
      <div className="ui ">
        <MycontextData.Provider
          value={{
            candidates: this.state.candidates,
            selectedList: this.state.selectedCandidates,
            rejectedlist: this.state.rejectedCandidates,
            selectCandidate: this.addCandidatetoShortList,
            rejectCandidate: this.addCandidatetoReject
          }}
        >
          <div className="ui stackable grid">
            <div className="twelve wide column">
              <div className="ui horizontal divider">
                <SearchContainer setSearchedText={this.setSearchText} />
              </div>
            </div>
            <div className=" four wide column buttonalign">
              <Link to="/shortListed">
                <button className="ui right floated stacked button">
                  Shortlisted
                </button>
              </Link>
              <Link to="/rejected">
                <button className="ui right floated stacked button">
                  Rejected
                </button>
              </Link>
            </div>
          </div>
          {this.getContentsToRender()}
        </MycontextData.Provider>
      </div>
    );
  }
}

export default App;
