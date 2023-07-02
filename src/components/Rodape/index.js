import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <img src='/imagens/imagens/fb.png' alt=' Facebook logo' />
                    </li>
                    <li>
                        <img src='./imagens/imagens/tw.png' alt=' Twitter logo' />
                    </li>
                    <li>
                        <img src='./imagens/imagens/ig.png' alt=' Instagram logo' />
                    </li>
                </ul>
            </section>

            <section>
                <img src='/imagens/imagens/logo.png' alt='Organo logo' />
            </section>
            <section>
                <img src='https://cdn.icon-icons.com/icons2/3660/PNG/512/valorant_logo_play_riot_games_icon_228477.png' alt='Valorant logo' width={200} />
            </section>

            <section>
                <h3>Desenvolvido por Lúcio Beckler em parceria com Alura!</h3>
            </section>
        </footer>
    )
}

export default Rodape