import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>

          <button className="button" onClick={this.fetchAdvice}>
            <span> Give me a Advice </span>
          </button>

          <button
            className="button btn-secondary"
            onClick={() => {
              navigator.clipboard.writeText(advice);
              alert("Copied to Clipboard!");
            }}
          >
            <span>Copy to Clipboard</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
