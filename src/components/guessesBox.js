import React from 'react';

import './guessesBox.css';

export default function GuessesBox(props) {
    let guesses = props.guesses.map((guess, index) => (
        <p key={index} className="guess" >
            {guess}
        </p>
    ));

    return (
        <div className="guesses">
            {props.guesses}
        </div>
    );
};

