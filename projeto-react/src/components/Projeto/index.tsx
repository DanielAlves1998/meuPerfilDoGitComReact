import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import { Card, LinkBotao } from "./styles"; // a qui é para que a impr]ortação no stylrs da pasta Projeto funcionar

const Projeto = () => {
    return (

    <Card>
        <Titulo fontSize={0}>Projeto Lista de tarefas</Titulo>
        <Paragrafo tipo="secundario">Lista de TArefas feita com VueJS</Paragrafo>
        <LinkBotao>Visualizar</LinkBotao>
        
    </Card>
    )
}

export default Projeto;