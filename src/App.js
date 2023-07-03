import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Mapa from './components/Mapa';
import Rodape from './components/Rodape';

function App() {

    const mapas = [
        {
            id: 1,
            nome: 'Lotus',
            corPrimaria: '#C05590',
            corSecundaria: '#E1AAB2'
        },
        {
            id: 2,
            nome: 'Pearl',
            corPrimaria: '#38A1AC',
            corSecundaria: '#6FB2C8'
        },
        {
            id: 3,
            nome: 'Fracture',
            corPrimaria: '#799461',
            corSecundaria: '#B5885F'
        },
        {
            id: 4,
            nome: 'Breeze',
            corPrimaria: '#A4FFFC',
            corSecundaria: '#E9D2C1'
        },
        {
            id: 5,
            nome: 'Icebox',
            corPrimaria: '#322F4B',
            corSecundaria: '#868FBE'
        },
        {
            id: 6,
            nome: 'Bind',
            corPrimaria: '#7C4834',
            corSecundaria: '#D28A4D'
        },
        {
            id: 7,
            nome: 'Haven',
            corPrimaria: '#3C4043',
            corSecundaria: '#C38870'
        },
        {
            id: 8,
            nome: 'Split',
            corPrimaria: '#8CDCFA',
            corSecundaria: '#6C6C69'
        },
        {
            id: 9,
            nome: 'Ascent',
            corPrimaria: '#8A86D3',
            corSecundaria: '#C46C78'
        }
    ];

    const agentes = [
        {
            nome: 'Jett',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png',
            funcao: 'Duelista'
        },
        {
            nome: 'Phoenix',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png',
            funcao: 'Duelista'
        },
        {
            nome: 'Sova',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png',
            funcao: 'Iniciador'
        },
        {
            nome: 'Brimstone',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png',
            funcao: 'Controlador'
        },
        {
            nome: 'Chyper',
            imagem: 'https://static.wikia.nocookie.net/valorant-lore/images/e/e5/Cypher_-_Full_body.png/revision/latest?cb=20210123180615',
            funcao: 'Sentinela'
        },
        {
            nome: 'Raze',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png',
            funcao: 'Duelista'
        },
        {
            nome: 'Reyna',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png',
            funcao: 'Duelista'
        },
        {
            nome: 'Killjoy',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png',
            funcao: 'Sentinela'
        },
        {
            nome: 'Yoru',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png',
            funcao: 'Duelista'
        },
        {
            nome: 'Omen',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png',
            funcao: 'Controlador'
        },
        {
            nome: 'Chamber',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6f1392b30784e029/618d9da0d380f814d61f001c/WebUpdate_Chamber_KeyArt.png',
            funcao: 'Sentinela'
        },
        {
            nome: 'KAY/O',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png',
            funcao: 'Iniciador'
        },
        {
            nome: 'Viper',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png',
            funcao: 'Controlador'
        },
        {
            nome: 'Skye',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png',
            funcao: 'Iniciador'
        },
        {
            nome: 'Astra',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png',
            funcao: 'Controlador'
        },
        {
            nome: 'Breach',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt100d13bfa8286a3d/5eb7cdc11ea0c32e33b95fa2/V_AGENTS_587x900_Breach.png',
            funcao: 'Iniciador'
        },
        {
            nome: 'Fade',
            imagem: 'https://static.wikia.nocookie.net/valorant/images/e/e8/Fade_Artwork_Full.png/revision/latest?cb=20220810202738',
            funcao: 'Iniciador'
        },
        {
            nome: 'Sage',
            imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png',
            funcao: 'Sentinela'
        }
    ];
    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }
    return (
        <div className="App">
            <Banner></Banner>

            {/* map recebe uma lista de objetos e retorna uma lista com os atributos nomes */}
            <Formulario
                key={mapas.id}
                mapas={mapas.map(mapa => mapa.nome)}
                agentes={agentes.map(agente => [agente.nome])}
                aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
            ></Formulario>

            {mapas.map(mapa => (

                <Mapa
                    key={mapa.nome}
                    nome={mapa.nome}
                    corPrimaria={mapa.corPrimaria}
                    corSecundaria={mapa.corSecundaria}
                    colaboradores={colaboradores.filter(colaborador => colaborador.mapa === mapa.nome)}>
                </Mapa>
            ))
            }
            <Rodape></Rodape>

        </div >
    );
}

export default App;
