import Avatar from "../../components/avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";

import { Descricao, Botaotema, SidebarContainer } from "./styles";

type Props ={
    trocaTema: () => void; // void significa vasio
}

const Sidebar = (Props: Props) => (
    //só está aceitando coisas dentro dele nesse caso uma string pq utilizei o children lá no titulo
    <aside>
        <SidebarContainer>

        <Avatar/>
        <Titulo fontSize={20}>Daniel Alves</Titulo> 
        <Paragrafo tipo="secundario" fontSize={16}>DanielAlves1998</Paragrafo>
        <Descricao tipo="Principal" fontSize={12}>Engenheiro Front-end</Descricao>
        <Botaotema onClick={Props.trocaTema}>Trocar tema</Botaotema>
        </SidebarContainer>
        </aside>
)

export default Sidebar;