import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


// Creating and nesting components 
function MyButton1() {
  return (
    <button>
      I'm a button
    </button>
  )
}

function MyApp1() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton1/>
    </div>
  )
}

// Writing markup with JSX and Adding styles 
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

// Displaying data 
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

// Conditional rendering 
const products = [
  {title: 'Cabbage', isFruit: false, id:1},
  {title: 'Garlic', isFruit: false, id:2},
  {title: 'Apple', isFruit: true, id:3}
]

function ShoppingList() {
  const listItems = products.map(product => 
    <li
    key={product.id}
    style={{color: product.isFruit ? 'magenta' : 'darkgreen'
    }}>
      {product.title}
    </li>
    )

    return (
      <>
        <h1>Welcome to my app</h1>
        <ul>{listItems}</ul>
      </>
    )
}

// Responding to events 
function MyButton2() {
  function handleClick() {
    alert('You clicked me!')
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}

// Updating the screen 
function MyButton3() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1)
  }

  return (
    <button
    onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}

function MyApp2() {
  return (
    <div>
    <h1>Welcome to my app</h1>
      <h1>Counters that update seperately</h1>
      <MyButton2/>
      <MyButton3/>
      <MyButton3/>
    </div>
  )
}

// Sharing data between components 
function MyButton4({count, onClick}) {
  return (
    <button
    onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

function MyApp3() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count+1)
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton4 count={count} onClick={handleClick}/>
      <MyButton4 count={count} onClick={handleClick}/>
      <h1>Welcome to my app</h1>
    </div>
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

export {App, AboutPage, Profile, ShoppingList, MyApp1, MyApp2, MyApp3};
