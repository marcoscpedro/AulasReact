import React from "react";
import Sub from './Sub'
import { useState } from "react";
export default props => {

    const [num, setNum] = useState(0)
      
    const handleClick = (ValorGerado) => {
       setNum(ValorGerado)
    }

    return (
        <div>
            <h4>Valor: {num}</h4>
            <Sub handleClick={handleClick}></Sub>
        </div>
    )
}