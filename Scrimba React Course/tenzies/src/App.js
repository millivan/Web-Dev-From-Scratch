import "./App.css";
import { Die } from "./components/Die";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [randomDieNumberArray, setRandomDieNumberArray] = useState(
    generateRandomDieNumberArray()
  );
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = randomDieNumberArray.every((die) => die.isHeld);
    const firstValue = randomDieNumberArray[0].value;
    const allSameValue = randomDieNumberArray.every(
      (die) => die.value === firstValue
    );

    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [randomDieNumberArray]);

  function generateNewDie() {
    const randomDieNumber = Math.floor(Math.random() * 6) + 1;
    const randomDieObject = {
      value: randomDieNumber,
      isHeld: false,
      id: nanoid(),
    };
    return randomDieObject;
  }
  function generateRandomDieNumberArray() {
    let generatedRandomDieNumberArray = [];
    for (let i = 0; i < 10; i++) {
      generatedRandomDieNumberArray.push(generateNewDie());
    }
    return generatedRandomDieNumberArray;
  }

  function rollDice() {
    if (!tenzies) {
      setRandomDieNumberArray((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setRandomDieNumberArray(generateRandomDieNumberArray());
    }
    // console.log(randomDieNumberArray);
  }

  function holdDice(id) {
    setRandomDieNumberArray((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const dice = randomDieNumberArray.map((randomDie) => (
    <Die
      value={randomDie.value}
      key={randomDie.id}
      isHeld={randomDie.isHeld}
      holdDice={() => holdDice(randomDie.id)}
    />
  ));

  return (
    <main className="background">
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid">{dice}</div>
      <button className="roll-button" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
