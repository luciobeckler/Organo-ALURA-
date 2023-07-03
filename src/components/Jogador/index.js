import './Jogador.css'

const Jogador = ({ nome, imagem, funcao, corDeFundo }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>


            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{funcao}</h5>
            </div>
        </div >
    )
}

export default Jogador
