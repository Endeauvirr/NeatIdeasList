'use strict';

const appRoot = document.querySelector('#app');

const appData = {
  title: 'Indecision App',
  subtitle: 'Where da hood at',
  options: []
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option !== '') {
    appData.options.push(option);
    event.target.elements.option.value = '';
    reactAppRender();
  }
}

const removeAllOptions = () => {
  appData.options = [];
  reactAppRender();
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * appData.options.length);
  const option = appData.options[randomNumber];
  alert(`You have chosen option named: ${option}`);
}

const reactAppRender = () => {
  const template = (
    <div key="template">
      <h1>{ appData.title }</h1>
      <p className="subtitle">{ (appData.subtitle) ? appData.subtitle : ''}. We have { appData.options.length } options</p>
      
      <hr />

      <button disabled={ appData.options.length === 0 }  onClick={ onMakeDecision }>What should I do?</button>

      <hr />
      
      <button onClick={ removeAllOptions }>Remove all options</button>
      
      <ol>
        { 
          appData.options.map((option, index) => <li key={ option + '_' + index }>{ option }</li>) 
        }
      </ol>
      <form onSubmit={ onFormSubmit }>
        <input type="text" name="option" />
        <button type="submit">Add option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot)
};

reactAppRender();