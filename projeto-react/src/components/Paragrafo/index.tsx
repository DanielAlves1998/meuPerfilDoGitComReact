import { P } from './styles' //o as Titulo é pq já tem um titulo e o as faz com que o proximo nome se torne um apelido nesse caso TituloEstilo

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Props = {
    children: string; //a tag children permite que coloquemos caraquiteres que não sejam filhos la no aside no Sidebar, no asso ele permite um componente que aceita coisas dentro dele
    tipo?: 'Principal' | 'secundario';
    fontSize?: number
}

const Paragrafo = ({ children, tipo = 'Principal', fontSize }: Props) => (
    <P fontSize={fontSize} tipo={tipo}>{ children }</P>)


export default Paragrafo;