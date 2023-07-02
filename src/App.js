import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Mapa from './components/Mapa';
import Rodape from './components/Rodape';

function App() {

  const mapas = [
    {
      nome: 'Lotus',
      corPrimaria: '#C05590',
      corSecundaria: '#E1AAB2'
    },
    {
      nome: 'Pearl',
      corPrimaria: '#38A1AC',
      corSecundaria: '#6FB2C8'
    },
    {
      nome: 'Fracture',
      corPrimaria: '#799461',
      corSecundaria: '#B5885F'
    },
    {
      nome: 'Breeze',
      corPrimaria: '#A4FFFC',
      corSecundaria: '#E9D2C1'
    },
    {
      nome: 'Icebox',
      corPrimaria: '#322F4B',
      corSecundaria: '#868FBE'
    },
    {
      nome: 'Bind',
      corPrimaria: '#7C4834',
      corSecundaria: '#D28A4D'
    },
    {
      nome: 'Haven',
      corPrimaria: '#3C4043',
      corSecundaria: '#C38870'
    },
    {
      nome: 'Split',
      corPrimaria: '#8CDCFA',
      corSecundaria: '#6C6C69'
    },
    {
      nome: 'Ascent',
      corPrimaria: '#8A86D3',
      corSecundaria: '#C46C78'
    }
  ]

  const agentes = [
    'Jett', 'Phoenix', 'Sova',
    'Brimstone', 'Chyper', 'Raze', 'Sova',
    'Reyna', 'Killjoy', 'Yoru', 'Omen', 'Chamber',
    'KAY/O', 'Viper', 'Skye', 'Astra', 'Breach', 'Fade',
    'Deadlock', 'Sage'
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner></Banner>

      {/* map recebe uma lista de objetos e retorna uma lista com os atributos nomes */}
      <Formulario key={mapas.nome} mapas={mapas.map(mapa => mapa.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado}></Formulario>

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