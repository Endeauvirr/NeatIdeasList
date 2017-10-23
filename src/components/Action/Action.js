import React from 'react';

const Action = (props) => (  // stateless function component . They are faster, easier to test and works perfectly fine for components that only get props and dont use state
    <div className="action--wrapper">
        <button 
            onClick={ props.handlePickOption }
            disabled={ !props.hasOptions }
        >
            What should I do?
        </button>
    </div>
)


export default Action;