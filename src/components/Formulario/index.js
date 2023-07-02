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
            cargo,
            imagem,
            mapa
        })
        setNome('')
        setCargo('')
        setImagem('')
        setMapa('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [mapa, setMapa] = useState('')

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={cargo => setCargo(cargo)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={imagem => setImagem(imagem)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Mapa"
                    itens={props.mapas}
                    valor={mapa}
                    aoAlterado={mapa => setMapa(mapa)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario