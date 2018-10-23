import React from 'react';

import './response.css';

export default function Response(props) {
    return (
        <div className="response">
            <h2>
                {props.text}
            </h2>
        </div>
    );
};
