import Aluno from  "./Aluno";
// 37:03
function Titulo( {nome} ) {

    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"

    return (
        <div>
            <img width={180} height={150} src={urlImg} />
            <h1>Introdução ao React - Componente Título</h1>
            <p>{nome ? nome : "Estudante"}, vamos para uma prática rápida com todos os conhecimentos necessários sobre o React e como ele pode otimizar o seu trabalho em front-end.</p>
        </div>
    )
}

export default Titulo;