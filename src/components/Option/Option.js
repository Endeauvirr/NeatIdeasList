import React from 'react';

const Option = (props) => {
    return (
        <div className="option--wrapper">
        <p>{ props.option } <button onClick={ (e) => { props.handleDeleteOption(props.option) } }>remove</button></p>
        </div>
    )
}

export default Option;