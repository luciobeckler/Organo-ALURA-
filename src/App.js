import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/TIme';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado}></Formulario>
      <Time nome="Programação"></Time>
      <Time nome="FrontEnd"></Time>
      <Time nome="Data Science"></Time>

    </div>
  );
}

export default App;
