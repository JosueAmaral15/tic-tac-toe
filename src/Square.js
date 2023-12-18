import './style.css';

export default function Square({id, content, onSquareClick}) {
    return (
        <button id={id} className="square" onClick={onSquareClick}>{content}</button>
    );
}