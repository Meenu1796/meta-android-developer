import Btn from './Btn';
import ModeToggler from './ModeToggler';
import './App.css';
import Promo from './Promo';
import Child from './Child';
import React, {useState} from 'react';
import Heading from './Heading';

function App() {

    // lab exercise
    function handleClick() { 
      let randomNum = Math.floor(Math.random() * 3) + 1;
      console.log(randomNum);
      let userInput = prompt('type a number'); 
      alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  //children and data
  const date = new Date();

  //Observing state
    const [word, setWord] = React.useState('Eat');
    function handleClick1() {
      setWord('Drink')
    }

  return (
    <div className="App">
      <Btn />

      {/* user events */}
      <ModeToggler />

      {/* lab exercise */}
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>

      {/* parent-child data flow */}
      <Promo />

      {/* children and data */}
      <Child message={date.toLocaleTimeString()} />

      {/* Observing state */}
      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick1}>Click here</button>
    </div>
  );
}

export default App;
