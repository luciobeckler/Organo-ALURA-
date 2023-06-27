import './CampoTexto.css'

export const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} holder={props.placeholder} /> {/* Passado o obrigatorio como parâmetro ao chamar campo texto e validando dentro do component */}
        </div>
    )
}
