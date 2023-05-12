import React, {useState} from 'react';

function FireDisabled() {
    return (
        <button onClick={() => {
            console.log('FIRE')
        }} disabled={false}>Fire</button>
    );
}

export default FireDisabled;