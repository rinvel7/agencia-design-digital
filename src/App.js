import { useState } from "react";
import Rodade from "./componentes/Rodape";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Topo from "./componentes/Topo";
import './App.css'


export default function App() {
  const [temaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!temaEscuro)
  }

  return (
      <main>
        <Topo alterarTema={alterarTema} temaEscuro={temaEscuro} />
        <SecaoBanner temaEscuro={temaEscuro} />
        <SecaoExperienciaTrabalho temaEscuro={temaEscuro} />
        <Rodade temaEscuro={temaEscuro}/>
      </main>   
  );
}

