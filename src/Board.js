import React, {useState} from 'react'
import Square from "./Square";

export default function Board()
{
    const [square, setSquare] = useState(Array(9).fill(null));
    const [toggle, setToggle] = useState(false)

    function HandleClick(i) {
        if (calculateWinner(square) || square[i]) {
            return;
        }
        const nextSquare = square.slice();
        if (toggle) {
            nextSquare[i] = "x";
        } else {
            nextSquare[i] = "0";
        }
        setSquare(nextSquare);
        setToggle(!toggle)

    }
    const winner = calculateWinner(square)
    let status;
    if(winner)
    {
        status = "winner is :"+ winner;
    }else
    {
        status = 'Next player: ' + (toggle ? 'X' : 'O');
    }
    return (
        <div className={'app'}>
            <h1>{status}</h1>
            <div className='board-row'>

                <Square value={square[0]} onSquareClick={() => HandleClick(0)}/>
                <Square value={square[1]} onSquareClick={() => HandleClick(1)}/>
                <Square value={square[2]} onSquareClick={() => HandleClick(2)}/>

            </div>
            <div className='board-row'>
                <Square value={square[3]} onSquareClick={() => HandleClick(3)}/>
                <Square value={square[4]} onSquareClick={() => HandleClick(4)}/>
                <Square value={square[5]} onSquareClick={() => HandleClick(5)}/>
            </div>
            <div className='board-row'>
                <Square value={square[6]} onSquareClick={() => HandleClick(6)}/>
                <Square value={square[7]} onSquareClick={() => HandleClick(7)}/>
                <Square value={square[8]} onSquareClick={() => HandleClick(8)}/>
            </div>

        </div>


    )
    function calculateWinner()
    {

        const lines= [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8]

        ];
        for(let i = 0;i<lines.length;i++)
        {
            const [a,b,c]= lines[i];
            if(square[a]&&square[a]===square[b]&& square[a]===square[c])
            {
                return square[a];
            }
        }
        return  null;
    }
}

