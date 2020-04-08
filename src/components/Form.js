import React from "react";

export default class props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: {
        value: "",
        error: false
      }
    };
  }

  handleField = e => {
    if (e.target.value !== "") {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          value: e.target.value,
          error: false
        }
      });
    } else {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          error: true
        }
      });
    }
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.getGifs(this.state.searchStr.value);
        }}
      >
        <label>Enter your request here! </label>
        <input
          type="text"
          className={this.state.error ? "error" : ""}
          value={this.state.searchStr.value}
          onChange={this.handleField}
        />
        <input type="submit" value="Gif me!" />
      </form>
    );
  }
}
