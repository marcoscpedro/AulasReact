import React from "react";
import Input from "./Input";
export default props => {
    return (
        <div>
            <h4>Contador</h4>
            <div>
                <label>Passo:</label>
                <Input value={props.passo} handleChange={props.funcao} />
            </div>
            

            <h5>Valor: {props.valor}</h5>
        </div>
    )
}