import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                placeholder={props.placeholder}
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio} value={props.valor}>
                <option value={""}></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })} {/* Para cada item retorna uma option */}
            </select>
        </div>
    )
}

export default ListaSuspensa
