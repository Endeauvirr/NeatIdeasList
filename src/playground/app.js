const appRoot = document.getElementById('app');

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      options: props.options
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  componentWillMount() {
    console.log('component will be mounted');
  }
  componentDidMount(prevState) {
    const localStorageData = localStorage.getItem('indecisionAppStateOptions');

    if (localStorageData !== null) {
      this.setState((prevState) => ({
        options: JSON.parse(localStorageData)
      }) )
    }

    console.log('component did mount');
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('component will be updated');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('indecisionAppStateOptions', JSON.stringify(this.state.options))
      console.log('component did update');
    }
  }
  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }) );
  }
  handleDeleteOption(optionText) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionText)
    }) );
  }
  handlePickOption() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex]

    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Come on! Throw some ideas in :)';
    }
    if (this.state.options.includes(option)) {
      return 'We have already such stuff. Think out another idea to submit';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])    // Nie modyfikujemy bezpośrendio stanu. Uzywamy technik które nie wpływają bezpośrednio na obiekt stanu, tylko tworzą coś nowego na bazie dostarczonego stanu wyjściowego
    }) );
  }
  render() {
    const subtitle = "Sad peon ;("

    return (
      <div className="indecision-app--wrapper">
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={ this.state.options.length > 0 } 
          handlePickOption={ this.handlePickOption }
        />
        <Options 
          options={ this.state.options } 
          handleDeleteOptions={ this.handleDeleteOptions }
          handleDeleteOption={ this.handleDeleteOption } 
        />
        <AddOption
          handleAddOption={ this.handleAddOption }
         />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="header--wrapper">
//         <h1>{ this.props.title }</h1>
//         <h2>{ this.props.subtitle }</h2>
//       </header>
//     )
//   }
// }

const Header = (props) => {    // stateless function component
  return (
    <header className="header--wrapper">
      <h1>{ props.title }</h1>
      {props.title && <h2>{ props.subtitle }</h2>}
    </header>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

// class Action extends React.Component {
//   render() {
//     return (
//       <div className="action--wrapper">
//         <button 
//           onClick={ this.props.handlePickOption }
//           disabled={ !this.props.hasOptions }
//         >
//           What should I do?
//         </button>
//       </div>
//     )
//   }
// }

const Action = (props) => {  // stateless function component . They are faster, easier to test and works perfectly fine for components that only get props and dont use state
  return (
    <div className="action--wrapper">
      <button 
        onClick={ props.handlePickOption }
        disabled={ !props.hasOptions }
      >
        What should I do?
      </button>
    </div>
  )
}


// class Options extends React.Component {
//   render() {
//     return (
//       <div className="options--wrapper">
//         <button onClick={ this.props.handleDeleteOptions }>Remove all</button>

//         {
//           this.props.options.map((option, key) => { 
//             return <Option key={option + key} option={option} />
//           })
//         }
//       </div>
//     )
//   }
// }

const Options = (props) => {
  return (
    <div className="options--wrapper">
      <button onClick={ props.handleDeleteOptions }>Remove all</button>

      { props.options.length === 0 && <p>Please add an option to get started!</p> }

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

// class Option extends React.Component {
//   render() {
//     return (
//       <p>{ this.props.option }</p>
//     )
//   }
// }

const Option = (props) => {
  return (
    <div className="option--wrapper">
      <p>{ props.option } <button onClick={ (e) => { props.handleDeleteOption(props.option) } }>remove</button></p>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    }

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  handleSubmitForm(event) {
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
          <button type="submit">Submit Idea</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, appRoot);