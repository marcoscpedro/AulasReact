import React from "react";
import './App.css'

import Card from "./components/layout/Card";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/input";
import Contador from "./components/contador/Contador";
import ContadorDesafio from './components/contadorDesafio/Contador'
// props é somente leitura
export default props =>
    <div className="App">
        <Card titulo="Primeiro Componente" color="#FA6900">
            <Primeiro />
        </Card>
        <Card titulo='Componente com Parametro' color="#851e3e">
            <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
        </Card>

        <Card titulo='Componente com Filhos'>
            <ComFilhos>
                <ul>
                    <li>Mehida</li>
                    <li>Misael</li>
                    <li>Mahali</li>
                    <li>Mahaseias</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo='Lista de produtos'>
            <Repeticao/>
        </Card>

        <Card titulo='Condicional versão 1'>
            <Condicional numero={11}/>
        </Card>

        <Card titulo="Condicional com If">
            <CondicionalComIf numero={11}/>
        </Card>

        <Card titulo="Comunicação direta">
            <Pai sobrenome="Carvalho"/>
        </Card>

        <Card titulo="Comunicação indireta">
            <Super/>
        </Card>

        <Card titulo="Input">
            <Input/>
        </Card>

        <Card titulo="Contador">
            <Contador />
        </Card>

        <Card titulo="Contador desafio">
            <ContadorDesafio></ContadorDesafio>
        </Card>
    </div>