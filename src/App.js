import React, { Component } from "react";
import API from "./services/dateAPI";
import DateButton from "./components/DateButton";
import DateDisplay from "./components/DateDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: "",
    };
  }

  handleButtonClick = async () => {
    let response = await API.getAPIResponse();
    this.setState({ apiResponse: response.data.date });
  };

  render() {
    let date = this.state.apiResponse.split("-");
    let [month = "", day = "", year = ""] = date;
    return (
      <div>
        <center>
          <h1>Date API</h1>
        </center>
        <center>
          <DateButton handle={this.handleButtonClick}></DateButton>
        </center>
        <DateDisplay day={day} month={month} year={year}></DateDisplay>
      </div>
    );
  }
}

export default App;
