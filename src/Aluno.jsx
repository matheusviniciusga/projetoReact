function Aluno() {
    
    const [nome, setNome] = useState('');

    const handleInputChange = (event) => {
        setNome(event.target.value);
    };

    return (
        <div>
            <h3>Para iniciarmos, Qual o seu nome? </h3>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={handleInputChange}
            />
        </div>
    )

}

export default Aluno;