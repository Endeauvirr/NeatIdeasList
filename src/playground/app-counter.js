// ------------
// React Component way
// ------------

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    const jsonData = localStorage.getItem('appCounterState');
    const counter = JSON.parse(jsonData);

    if (counter !== null) {
      this.setState(() => ({ counter}) );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('appCounterState', JSON.stringify(this.state.counter));
  }
  increment() {
    this.setState((prevState) => {   // Uzywamy tej składni by aktualizować stan, poniewaz setState jest asynchroniczne. Musimy poczekać na realizację logiki Reacta. 
      //Dopiero wowczas mozemy korzystac ze zaktualizowanego poprawnie stanu.
        return {
          counter: prevState.counter + 1
        }
    });
  }
  decrement() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1
      }
  });
  }
  reset() {
    this.setState((prevState) => {
      return {
        counter: 0
      }
  });
  }
  render() {
    return (
      <div key="counter">
        <h1>Counter: { this.state.counter }</h1>
        <button id="my-id" className="button" onClick={ this.decrement }>-1</button>
        <button id="my-id-2" className="button" onClick={ this.reset }>reset counter</button>
        <button id="my-id-3" className="button" onClick={ this.increment }>+1</button>
      </div>
    )
  }
}

CounterApp.defaultProps = {
  counter: 0
}

ReactDOM.render(<CounterApp />, appRoot);


// ------------
// JSX way
// ------------


// const appRoot = document.querySelector('#app');

// const data = {
//   counter: 0
// };

// const increment = () => {
//   data.counter++;
//   renderCounterApp();
// }
// const decrement = () => {
//   data.counter--;
//   renderCounterApp();
// }
// const reset = () => {
//   data.counter = 0;
//   renderCounterApp();
// }


// const renderCounterApp = () => {
//   const template = (
//     <div key="counter">
//       <h1>Counter: { data.counter }</h1>
//       <button id="my-id" className="button" onClick={ decrement }>-1</button>
//       <button id="my-id-2" className="button" onClick={ reset }>reset counter</button>
//       <button id="my-id-3" className="button" onClick={ increment }>+1</button>
//     </div>
//   );
  
//   ReactDOM.render(template, appRoot);
// }

// renderCounterApp();