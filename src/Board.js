import Square from './Square.js';
import './style.css';

export default function Board({squares, xIsNext, onPlay, current}) { 

    function calculateWinner() {
        const lines = [
        [0,1,2], [3,4,5],[6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
        ]
        
        for(let line of lines) {
            if(squares[line[0]] && squares[line[0]] == squares[line[1]] && squares[line[1]] == squares[line[2]]) {
                let element;
                for(let num of line) {
                    element = document.getElementById(`S${num}`);
                    element.style.color = "yellow";
                }
                return squares[line[0]];
            }        
        }
        
        return null;
    }

    function handleClick(i){

        if (calculateWinner() || squares[i])
            return;
        let squareSet = squares.slice();
        if (xIsNext)
            squareSet[i] = "X";
        else
            squareSet[i] = "O";
        onPlay(squareSet);
    }

    let winner = calculateWinner();
    let status = "";
    if (winner) {
        status = `${winner} is the winner!`;
    }
    else if (current == 9)
        status = "Game over!";
    else if (xIsNext)
        status = "It's X's turn";
    else
        status = "It's O's turn";

    return (
        <>
            <div className="wrapper">
                <div className="status">{status}</div>
                <div className="line-square">
                    <Square id="S0" content={squares[0]} onSquareClick={() => {handleClick(0)}} />
                    <Square id="S1" content={squares[1]} onSquareClick={() => {handleClick(1)}} />
                    <Square id="S2" content={squares[2]} onSquareClick={() => {handleClick(2)}} />
                </div>
                <div className="line-square">
                    <Square id="S3" content={squares[3]} onSquareClick={() => {handleClick(3)}} />
                    <Square id="S4" content={squares[4]} onSquareClick={() => {handleClick(4)}} />
                    <Square id="S5" content={squares[5]} onSquareClick={() => {handleClick(5)}} />
                </div>
                <div className="line-square">
                    <Square id="S6" content={squares[6]} onSquareClick={() => {handleClick(6)}} />
                    <Square id="S7" content={squares[7]} onSquareClick={() => {handleClick(7)}} />
                    <Square id="S8" content={squares[8]} onSquareClick={() => {handleClick(8)}} />
                </div>
            </div>
        </>
    )
}