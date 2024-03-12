import React, { useState } from "react";
import Titulo from "./Titulo";
import Aluno from "./Aluno";

function App() {

  const [nome, setNome] = useState('');

  return (
    <div>
      <Aluno setNome={setNome} />
      <Titulo nome={nome} />
    </div>
  )
}

export default App
