import Jogador from '../Jogador'
import './Mapa.css'

const Mapa = (props) => {
    console.log('chechei aqui')
    return (
        (props.colaboradores.length > 0) &&
        <section className='mapa' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }} > {props.nome}</h3>
            <div className='card'>
                {props.colaboradores.map(colaborador =>
                    <Jogador
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        nome={colaborador.nome}
                        funcao={colaborador.funcao}
                        imagem={colaborador.imagem}
                    />)}
            </div>
        </section >
    )


}

export default Mapa
