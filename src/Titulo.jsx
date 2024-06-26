import {useState} from "react"

function Titulo( {nome} ) {

    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    const [texto, setTexto] = useState("React é uma biblioteca JavaScript de código aberto usada principalmente para construir interfaces de usuário UIs e aplicativos de página única. Desenvolvida pelo Facebook, foi implantada pela primeira vez em 2011 para o recurso de Feed de Notícias e posteriormente foi disponibilizada como código aberto em 2013.")

    return (
        <div>
            <img width={180} height={150} src={urlImg} />
            <h1>Introdução ao React - Componente Título</h1>
            <p>{nome ? `${nome}, vamos para uma prática rápida com todos os conhecimentos necessários sobre o React e como ele pode otimizar o seu trabalho em front-end.` : "Estudante, vamos para uma prática rápida com todos os conhecimentos necessários sobre o React e como ele pode otimizar o seu trabalho em front-end."}</p>
            <p>{texto}</p>
            <button onClick={() => {setTexto("React permite que os desenvolvedores descrevam o estado desejado da UI e ele gerencia automaticamente as atualizações da UI quando os dados subjacentes mudam. Isso torna o código mais previsível e mais fácil de depurar.")}}>Outra Definição</button>
        </div>
    )
}

export default Titulo;