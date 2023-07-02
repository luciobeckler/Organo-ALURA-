import Colaborador from '../Colaborador'
import './Mapa.css'

const Mapa = (props) => {

    return (
        (props.colaboradores.length > 0) && <section className='mapa' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }} > {props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />)}
            </div>
        </section >
    )
}

export default Mapa