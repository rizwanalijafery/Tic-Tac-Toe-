import React, {useState} from 'react';
export default function Square({value,onSquareClick})
{

    return(

            <div className={'square'}>
                <button onClick={onSquareClick} >{value}</button>
           </div>

    )
}

