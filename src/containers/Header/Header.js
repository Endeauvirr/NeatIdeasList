import React from 'react';

const Header = (props) => {    // stateless function component
    return (
        <header className="header--wrapper">
        <h1>{ props.title }</h1>
        {props.title && <h2>{ props.subtitle }</h2>}
        </header>
    )
}
  
Header.defaultProps = {
    title: 'Neat Ideas list'
}

export default Header;