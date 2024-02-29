import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  )
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
    </div>
  )
}

const user = {
  name: 'Krittin',
  imageUrl: 'https://picsum.photos/200',
  imageSize: 90
}

function AboutPage() {
  return (
    /* 
      JSX is stricter than HTML, every element has to be wrapped into a shared parent.
      Here, we use React.Fragment <> </> as the parent to avoid adding extra elements.
    */
    <>
      <h1>About</h1>
      <p>Hello there.<br/>How do you do?</p>
    </>
  )
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
      className='avatar'
      src={user.imageUrl}
      alt={'Photo' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize,
        borderRadius: '25%'
      }}></img>
      <h2>Welcome to my app</h2>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export {App, MyApp, AboutPage, Profile};
