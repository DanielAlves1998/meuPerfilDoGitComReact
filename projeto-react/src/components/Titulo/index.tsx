import { Titulo as TituloEstilo } from './styles' //o as Titulo é pq já tem um titulo e o as faz com que o proximo nome se torne um apelido nesse caso TituloEstilo

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Props = {
    children: string; //a tag children permite que coloquemos caraquiteres que não sejam filhos la no aside no Sidebar, no asso ele permite um componente que aceita coisas dentro dele
    fontSize: number;
}

const Titulo = (Props: Props) => <TituloEstilo fontSize={Props.fontSize}>{ Props.children }</TituloEstilo>

export default Titulo;