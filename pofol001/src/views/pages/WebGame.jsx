import { useState } from 'react';
import '../css/WebGame.css'

export const Webgame = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const squaresCopy = [...squares];
        if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    };

    const handleRestart = () => {
        // 게임 보드를 초기 상태로 재설정
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };
    const renderSquare = (i) => {
        return (
            <button className="square" onClick={() => handleClick(i)}>
                {squares[i]}
            </button>
        );
    };

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="tic-tac-toe">
            <button className="restart-button" onClick={handleRestart}>
                재시작
            </button>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            {/* 재시작 버튼 */}

        </div>
    );
};

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
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
