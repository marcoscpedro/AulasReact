import React, { useState } from "react";
import Display from "./Display";
import Botao from "./Botao";
export default props => {
    const [valor, setValor] = useState(0)
    const [passo, setPasso] = useState(1)

    const inc = () => {
        setValor(valor+passo)
    }

    const dec = () => {
        setValor(valor-passo)
    }

    const handleChange = (e) => {
        setPasso(+e.target.value)
    }
    return (
        <div>
            <Display passo={passo} valor={valor} funcao={handleChange} />
            <Botao operacao={inc} texto="+"/>
            <Botao operacao={dec} texto="-" />
        </div>
        
    )
}