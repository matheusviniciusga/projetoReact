import { useState } from "react";

function Aluno( {setNome} ) {
    
    const [nome, setNomeLocal] = useState('');

    const colocaNome = (event) => {
        const novoNome = event.target.value;
        setNomeLocal(novoNome);
        setNome(novoNome);
    };

    return (
        <div>
            <h3>Para iniciarmos, Qual o seu nome? </h3>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={colocaNome}
            />
        </div>
    )

}

export default Aluno;