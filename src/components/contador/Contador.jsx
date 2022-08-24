import React, { useState } from "react";

export default class Contador extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            passo: props.passo || 1,
            valor: props.valor || 0
        }
    }
  
    /*
    state= {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }
     */

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    incPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render(){
        return (
            <div>
                <h2>Contador</h2>
                <div className="Contador">
                    <label >Passo: </label>
                    <input type="number" id="contadorInput" value={this.state.passo} onChange={e => this.incPasso(e)} />
                </div>
                



                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>

            </div>
        )
    }
}

// export default props => {
//     const [num, setNum] = useState(0)
//     return (
//         <div>
//             <h1>{num}</h1>
//             <button type="press" onClick={() => setNum(num+1)}>Adicionar</button>
//             <button type="press" onClick={() => setNum(num-1)}>subtrair</button>
//         </div>
//     )
// }