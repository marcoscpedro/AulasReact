import React from "react";
import Filho from "./Filho";
export default props =>
    <div>
        <Filho {...props}>Marcos</Filho>
        <Filho sobrenome={props.sobrenome}>Mahelder</Filho>
        <Filho sobrenome="Melo">Mahezer</Filho>
        
    </div>