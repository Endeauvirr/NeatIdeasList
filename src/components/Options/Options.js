import React from 'react';

import Option from '../Option/Option.js';

const Options = (props) => {
    return (
        <div className="options--wrapper">
        <button onClick={ props.handleDeleteOptions }>Remove all</button>

        { props.options.length === 0 && <p>Please add an option to get started! 💪</p> }

        {
            props.options.map((option, key) => (
            <Option 
                key={option + key} 
                option={option} 
                handleDeleteOption={ props.handleDeleteOption }
            />
            ))
        }
        </div>
    )
}

export default Options;