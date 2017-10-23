import React from 'react';

class AddOption extends React.Component {  // class is using babel plugin transform-class-properties to achieve this (removed constructor and such)
    state = {
        error: ''
    }
    constructor(props) {
        super(props);
    }
    handleSubmitForm = (event) => {
        event.preventDefault();
        let inputValue = event.target.elements.newOption.value.trim();

        const error = this.props.handleAddOption(inputValue);

        this.setState(() => ({ error }) )
        
        if (!error) {
            event.target.elements.newOption.value = '';
        }
    }
    render() {
        return (
        <div className="add-option--wrapper">
            {this.state.error && <p>{ this.state.error }</p> }
            <form onSubmit={ this.handleSubmitForm }>
            <input type="text" name="newOption"/>
            <button type="submit">Submit Ideas</button>
            </form>
        </div>
        )
    }
}

export default AddOption
  