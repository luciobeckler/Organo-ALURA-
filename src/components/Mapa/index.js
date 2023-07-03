import Jogador from '../Jogador'
import './Mapa.css'

const Mapa = (props) => {
    return (
        (props.partida.length > 0) &&
        <section className='mapa' style={{ backgroundColor: props.corSecundaria }}>

            <h3 style={{ borderColor: props.corPrimaria }} > {props.nome}</h3>

            <div className='card'>
                {props.partida.map(props =>
                    <Jogador
                        key={props.nome}
                        corDeFundo={props.corPrimaria}
                        nome={props.nome}
                        funcao={props.funcao}
                        imagem={props.imagem}
                    />)}
            </div>
        </section >
    )


}

export default Mapa
