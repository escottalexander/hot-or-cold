import React from 'react';

import './modal.css';

export default function Modal(props) {
    return (
        <div className="modal">
            <h1>
                What do I do?
        </h1>
            <p>
                This is a Hot or Cold Number Guessing Game. The game goes like this:
    1. I pick a random secret number between 1 to 100 and keep it hidden.
    2. You need to guess until you can find the hidden secret number.
    3. You will get feedback on how close ("hot") or far ("cold") your guess is.
    So, Are you ready?
            </p>
            <button className="close-modal">
                Got It!
</button>
        </div>
    );
};

