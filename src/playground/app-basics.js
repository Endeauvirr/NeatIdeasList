const appRoot = document.querySelector('#app');

const data = {
  name: 'Michał',
  lastName: 'Gołębiowski',
  age: 25,
  location: 'Lublin',
  messages: ['mess1', 'mess2', 'mess3']
}

const makeName = () => `Będziemy zakurwiać fest`;
const getLocation = (location) => (location) ? <p>Location from function: {location}</p> : ''; // Jeśli wyrazenie JSX zwraca undefined lub pusty string - nic się nie wyswietli
const getMessages = (messages) => {
  if (messages.length > 0) {
    debugger;

    messages.forEach((message) => {
      debugger;
      return (<li>{message}</li>)
    });

  } else {
    return 'We dont have any messages';
  }
}
const headerViewTemplate = (
  <div key="headerView">
    <h1>This is JSX from app.js!!</h1>
    <p>Hello sir i am {data.name ? data.name : 'Anonymous'}</p>
    <ul>
      { getMessages(data.messages) }
    </ul>
  </div>
);

const bodyViewTemplate = (
  <div key="bodyView">
    <h1>{data.name} {data.lastName}</h1>
    <p>Będziemy zakurwiać w reakcie jak cholera... {makeName()}</p>
    <p>Jak tu kurde w tym JSX zamontować Emmeta... :/ </p>
    <p>Location: {data.location} / Age: {(data.age && data.age >= 20) && <span style={{color: 'red'}}>git</span>}</p> 
    { getLocation(data.location) }
  </div>
);
// w JSXie mozna w ten sposob wykorzystac operator AND -> && by warunkowac wyswietlanie danych jesli warunek jest spełniony

ReactDOM.render([headerViewTemplate, bodyViewTemplate], appRoot);