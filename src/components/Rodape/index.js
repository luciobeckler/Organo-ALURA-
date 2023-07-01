import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <img src='/imagens/imagens/fb.png' />
                    </li>
                    <li>
                        <img src='./imagens/imagens/tw.png' />
                    </li>
                    <li>
                        <img src='./imagens/imagens/ig.png' />
                    </li>
                </ul>
            </section>

            <section>
                <img src='/imagens/imagens/logo.png' />
            </section>

            <section>
                <h3>Desenvolvido por Lúcio Beckler em parceria com Alura!</h3>
            </section>
        </footer>
    )
}

export default Rodape