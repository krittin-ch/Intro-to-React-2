import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';


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

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}


function Board({xIsNext, squares, onPlay}) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next play: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareCLick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareCLick={() => handleClick(1)}/> 
        <Square value={squares[2]} onSquareCLick={() => handleClick(2)}/> 
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareCLick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareCLick={() => handleClick(4)}/> 
        <Square value={squares[5]} onSquareCLick={() => handleClick(5)}/> 
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareCLick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareCLick={() => handleClick(7)}/> 
        <Square value={squares[8]} onSquareCLick={() => handleClick(8)}/> 
      </div>
    </>
  )
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove%2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = 'Go to move #' + move
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <buttin onClick={() => jumpTo(move)}>{description}</buttin>
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='gme-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i=0; i<lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}

export {App, AboutPage, Profile, ShoppingList, MyApp1, MyApp2, MyApp3, Game};
