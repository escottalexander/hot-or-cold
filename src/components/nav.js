import React from 'react';

import './nav.css';

export default function Nav(props) {
    return (
        <nav className="nav">
            <button className="what">WHAT?</button>
            <button onClick={() => props.onRestart()} className="new-game">+ NEW GAME</button>
        </nav>
    );
};

