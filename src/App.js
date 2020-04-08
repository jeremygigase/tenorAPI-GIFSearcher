import React from "react";
import "./styles.css";

import axios from "axios";

import Form from "./components/Form";
import Results from "./components/Results";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: {
        loading: false,
        error: false,
        data: [],
        searchTerm: ""
      }
    };
  }

  getGifs = search => {
    const url =
      "https://api.tenor.com/v1/search?q=" + search + "&key=HFJYUTD3P4IN";
    //console.log(url);
    this.setState({
      gifs: {
        ...this.state.gifs,
        loading: true
      }
    });
    axios
      .get(url)
      .then(results => {
        console.log(results.data);
        this.setState({
          gifs: {
            ...this.state.gifs,
            data: [...results.data.results],
            loading: false,
            searchTerm: search
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="App">
        <h1>GIF Searcher</h1>
        <h2>Are you ready to get giffed?</h2>
        <Form getGifs={this.getGifs} />
        {this.state.gifs.data.length !== 0 && (
          <Results
            gifs={this.state.gifs.data}
            search={this.state.gifs.searchTerm}
          />
        )}
      </div>
    );
  }
}
