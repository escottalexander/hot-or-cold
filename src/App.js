import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Form from './components/form';
import GuessesBox from './components/guessesBox';
import Response from './components/response';
import Modal from './components/modal';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: Math.floor(Math.random() * 100),
      guesses: [],
      mostRecentGuess: null,
      text: "Make Your Guess!"
    }
  }

  restartGame() {
    this.setState({
      number: Math.floor(Math.random() * 100),
      guesses: [],
      mostRecentGuess: null,
      text: "Make Your Guess!"
    })
  }

  makeAGuess(guess) {
    let joined = this.state.guesses.concat(guess);
    let text;
    guess = Number(guess);
    if (guess === this.state.number) {
      text = "You Guessed It! Great Job!";
    } else if (guess + 3 >= this.state.number && guess - 3 <= this.state.number) {
      text = "On Fire!";
    } else if (guess + 10 >= this.state.number && guess - 10 <= this.state.number) {
      text = "Hot";
    } else {
      text = "Cold";
    }
    this.setState({
      mostRecentGuess: guess,
      guesses: joined,
      text
    })
  }

  adjustGuess(num) {
    this.setState(
      {
        mostRecentGuess: num
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Nav
          onRestart={() => this.restartGame()}
        />
        <header className="header">
          <h1>HOT or COLD</h1>
        </header>
        <Response text={this.state.text} />
        <Form makeAGuess={guess => this.makeAGuess(guess)} guessNum={this.state.guesses.length} inputValue={this.state.mostRecentGuess} inputChange={num => this.adjustGuess(num)} />
        <GuessesBox guesses={this.state.guesses} />
      </div>
    );
  }
}

export default App;
