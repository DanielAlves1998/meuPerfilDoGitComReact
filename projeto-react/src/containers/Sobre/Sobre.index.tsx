import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
        
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="Principal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus aspernatur veniam pariatur fugit,
            tempore rerum quis incidunt ea quo vero id beatae ipsa commodi nulla officia deserunt quaerat! Tempora.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sint cupiditate nobis inventore, voluptatibus
            expedita, fugiat autem sit quibusdam nisi repellendus ex ratione ad explicabo maiores asperiores veritatis nihil! Odio.
        </Paragrafo>
        

    <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=DanielAlves98&show_icons=true&theme=dracula&include_all_commits=true&count_pGithubSecaoate=true"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DanielAlves98&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>

    </section>
)

export default Sobre;