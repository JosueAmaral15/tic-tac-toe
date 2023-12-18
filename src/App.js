import './style.css';
import Board from './Board.js';
import {useState} from 'react';

export default function App () {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState((Math.random() > 0.5 ? true : false));
    const [whoFirst, setWhoFirst] = useState(xIsNext);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquare = history[currentMove];
    

    function handleplay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
        setCurrentMove(currentMove+1);
    }

    function jumpTo(currentM) {
        setHistory(history.slice(0,currentM+1));
        setXIsNext((whoFirst? currentM % 2 == 0 : currentM % 2 != 0));
        setCurrentMove(currentM);
        discolor();
    }

    function discolor() {
        let element;
        for(let i = 0; i < 9; i++) {
            element = document.getElementById(`S${i}`);
            element.style.color = "gainsboro";
        }
    }

    const items = history.map((element, index) => {
        let description;
        if (index != 0) {
            description = "Go to move #"+index;
        } else {
            description = "Go to game start";
        }
        return (
            <li key={index}>
                <button onClick={()=> {jumpTo(index)}}>{description}</button>
            </li>
        )
    })

    return (
        <div className="main">
            <div className="list-wrapper">
                <h1>Tic Tac Toe</h1>
                <Board squares={currentSquare} xIsNext={xIsNext} onPlay={handleplay} current={currentMove} />
                <p>Created by <a href="https://www.github.com/josueamaral15">Josué Amaral</a></p>
            </div>
            <ul className="list">{items}</ul>
        </div>  
    )
}