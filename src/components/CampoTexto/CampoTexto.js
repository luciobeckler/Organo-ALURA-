import './CampoTexto.css'

export const CampoTexto = (props) => {

    let valor = 'Lúcio Beckler'
    const aoDigitado = (event) => {
        valor = event.target.value
        console.log(valor)
    }
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} holder={props.placeholder} /> {/* Passado o obrigatorio como parâmetro ao chamar campo texto e validando dentro do component */}
        </div>
    )
}
