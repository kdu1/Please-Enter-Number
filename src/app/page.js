'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { React, useState} from 'react';
/*
function processNumber({number}){
  //displays number
  //TODO: probably save the current strings of numbers in a database
  //due to how the whole thing needs to be saved pretty much
  //or just use a state
  alert(number);
}


//Perhaps add a "timing" variable, something to keep track of time
function NumberButton({input, children}){
  return(
    <button onClick={() => setInput(input+"1")}>
        {children}
    </button>
  );
}*/

export default function Home() {
  //game started state
  const [gameState, setGameState] = useState(0);
    //0 - before beginning 
    //1 - game started
    //numbers progress as you progress through the different sections
    //also need to represent when a task gets failed or branching paths
  //fail state
  //stage state
  //etc
  //I really need to do more planning

  const [input, setInput] = useState(""); //input string of numbers inputted by player so far
  const [startingNum, setStartingNum] = useState("5555555555"); //randomly generated phone number that player needs to dial to start game
  const [idNum, setIdNum] = useState(""); //randomly generated ID number
  //mother's maiden name
  //how many of these do we need...
  //how will we do subtitles/audio
  const [subtitle, setSubtitle] = useState(""); //very not sure how I will feed the entire script in but temp
  //TODO: conditionally replace the call button with a hangup button


  /**
   * Starts the game after right input is recieved
   */
  const handleCallButton = () => {
    //TODO: what case if they just enter random shit and the game never starts
    console.log(input);
    console.log(startingNum);
    if(input === startingNum){
      setSubtitle("Hello and Welcome");
    }
    //TODO: and then I'll eventually add fun little secrets lore LORE lore hahha no lore NO LORE
    else{
      setSubtitle("The number you have dialed is unavailable");
    }
  }

  //TODO: format startingnum
  return (
    <main className={styles.main}>
      <h1>Please Enter Number: {startingNum}</h1>
      <div>
        {input}
      </div>
      <div className={styles.description}>
        <div className={styles.topContainer}><button>Backspace</button></div>
        <div className={styles.grid}>
          <button onClick={() => setInput(input+"1")}>
              1
          </button>
          <button onClick={() => setInput(input+"2")}>
              2
          </button>
          <button onClick={() => setInput(input+"3")}>
              3
          </button>
          <button onClick={() => setInput(input+"4")}>
              4
          </button>
          <button onClick={() => setInput(input+"5")}>
              5
          </button>
          <button onClick={() => setInput(input+"6")}>
              6
          </button>
          <button onClick={() => setInput(input+"7")}>
              7
          </button>
          <button onClick={() => setInput(input+"8")}>
              8
          </button>
          <button onClick={() => setInput(input+"9")}>
              9
          </button>
          <button onClick={() => setInput(input+"*")}>
              *
          </button>
          <button onClick={() => setInput(input+"0")}>
              0
          </button>
          <button onClick={() => setInput(input+"#")}>
              #
          </button>
        </div>
        <div className={styles.bottomContainer}><button onClick={handleCallButton}>Call</button></div>
      </div>
      <div>{subtitle}</div>
    </main>
  );
}
