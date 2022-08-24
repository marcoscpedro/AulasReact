import React, { useState } from "react";

export default props => {
    const [nome, setNome] = useState("Marcos")
    return (
        <div>
            <h1>{nome}</h1>
            <input type="text" onChange={e => setNome(e.target.value)} value={nome}/>
        </div>
    )
}