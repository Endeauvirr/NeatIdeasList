// ------------
// React Component way
// ------------

const appRoot = document.querySelector('#app');

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      }
    });
  }
  render() {
    return (
      <div key="app-visibility" className="app-visibility">
        <h1>Visibility Toggle App</h1>

        <button onClick={ this.toggleVisibility }>
          {(this.state.isVisible) ? 'Hide message' : 'Show message'}
        </button>

        <hr/>

        {
          (this.state.isVisible) && (
            <div className={ (this.state.isVisible) ? 'is-visible' : '' }>
              VueJS is cooler than React but i have to learn React :( ... maybe i will like it better in future :/ 
            </div>
          )
        }
    </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, appRoot);


// ------------
// JSX way
// ------------

// const appRoot = document.querySelector('#app');

// const store = {
//   isVisible: false
// }

// const toggleVisibility = () => {
//   store.isVisible = !store.isVisible;
//   reactAppRender();
// }

// const reactAppRender = () => {
//   const template = (
//     <div key="app-visibility" className="app-visibility">
//       <h1>Visibility Toggle App</h1>

//       <button onClick={toggleVisibility}>
//         {(store.isVisible) ? 'Hide message' : 'Show message'}
//       </button>

//       <hr/>

//       <div style={(store.isVisible) ? {display: 'block'} : {display: 'none'}}  className={ (store.isVisible) ? 'is-visible' : '' }>
//         VueJS is cooler than React but i have to learn React :( ... maybe i will like it better in future :/ 
//       </div>

//       {
//         (store.isVisible) && (
//           <div className={ (store.isVisible) ? 'is-visible' : '' }>
//             VueJS is cooler than React but i have to learn React :( ... maybe i will like it better in future :/ 
//           </div>
//         )
//       }

//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// reactAppRender();