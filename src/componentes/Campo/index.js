import './campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className={`campo campo-${type}`}> {/* Classes em CSS reutilizável */}
        <label>{label}</label>
        <input
            type={type}
            value={valor}
            onChange={evento => aoAlterado(evento.target.value)}
            required={obrigatorio}
            placeholder={placeholder}
        />
    </div>)
}

export default Campo