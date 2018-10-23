import React from 'react';

import './form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guessNum: this.props.guessNum
        }
    }
    onSubmit(event) {
        event.preventDefault();

        if (this.props.makeAGuess) {
            const value = this.input.value;
            this.props.makeAGuess(value)
        }
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={e => this.onSubmit(e)}>
                    <input
                        min="0"
                        max="100"
                        type="number"
                        ref={input => (this.input = input)}
                        placeholder="Enter Your Guess"
                        required
                    >


                    </input>
                    <button type="submit" className="guess">Guess</button>
                </form>
                <h2>Guess #{this.props.guessNum}</h2>
            </div>
        );
    };
}


