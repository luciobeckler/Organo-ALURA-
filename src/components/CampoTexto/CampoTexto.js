import './CampoTexto.css'

export const CampoTexto = (props) => {


    //Hook usado para previnir o problema de travamento ao definir um nome inicial
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
        //console.log(valor)
    }
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} holder={props.placeholder} /> {/* Passado o obrigatorio como parâmetro ao chamar campo texto e validando dentro do component */}
        </div>
    )
}
