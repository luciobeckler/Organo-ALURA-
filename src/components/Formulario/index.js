import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import React, { useState } from 'react';

import './Formulario.css'
const Formulario = (props) => {


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,  //é igual a nome:nome e etc
            agente,
            mapa
        })
        setNome('')
        setAgente('')
        setMapa('')
    }

    const [nome, setNome] = useState('')
    const [mapa, setMapa] = useState('')
    const [agente, setAgente] = useState('')

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Jogador"
                    placeholder="Digite seu nick"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Agente"
                    placeholder="Escolha seu agente"
                    itens={props.agentes}
                    valor={agente}
                    aoAlterado={agente => setAgente(agente)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Mapa"
                    itens={props.mapas}
                    placeholder="Escolha o mapa"
                    valor={mapa}
                    aoAlterado={mapa => setMapa(mapa)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario
