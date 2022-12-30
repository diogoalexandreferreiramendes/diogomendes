import './Home.css';
import './Home_Mobile.css';
import justmyself from '../images/justmyself.jpg';
import designdeinteriores from '../icons/design-de-interiores.png';
import webprogramming from '../icons/web-programming.png';
import { useNavigate } from "react-router-dom"

const Home = () => {

  let navigate = useNavigate();

  const changeToContact = () => {
    navigate("/contactsupport")
  }

  return(
    <div>
      <div className="navbarHome" id="navbarId">
        <ul className="ulnavbar">
          <li id="listStyle"><a href="https://medium.com/@diogo_mendes">pensamentos&opiniões</a></li>
          <li><a href="#formInput" >contacto</a></li>
        </ul>
      </div>
      <div className="colorBody">
        <div>
          <div className="introHome">
            <div>
              <img src={justmyself} id="myself" alt="myself" />
            </div>
            <div className="introHomeText">
              <p>Ola, sou o Diogo Mendes</p>
              <p>Desennho e contruo websites e aplicações</p>
            </div>
          </div>
          <div className="skills" id="skills">
            <h1 className="titles">skills</h1>
            <div className="skillsDiv">
              <ul>
                <h3>Designer:</h3>
                <img src={designdeinteriores} id="designIcon" alt="designIcon" />
              </ul>
              <ul>
                <h3>Developer:</h3>
                <img src={webprogramming} id="designIcon" alt="designIcon" />
              </ul>
            </div>
            <p id="ideiasOffMywork">Simple, Fundamental,<br/>
            Clean and Effiecent</p>
            <div className="skillsDiv">
              <ul>
                <p><b>Tipo de designs:</b></p>
                <p>UI, UX, Logos, Web, Mobile, Apps</p>
              </ul>
              <ul>
                <p><b>Programação</b></p>
                <p>HTML, Css, Bootstrap,<br/> 
                JS, React, React Native, Node,<br/></p>
              </ul>
            </div>
          </div>
          <div>
          </div>
          <div id="myself_me">
            <h1 className="titles">myself</h1>
            <div className="myself_text">
              <p className="textoAbout">
              Ola, o meu nome é Diogo Mendes, vivo numa pequeno cidade no norte de Portugal chamada Guimarães.
              Apesar de ser uma cidade pequena é muito bonita.
              Com 26 anos acho que já fiz varias coisas interessantes tais com: sou um faixa castanha de Jiu-Jitsu Brasileiro e por varias vezes campãeo nacional.
              Em todos o meu percurso até agora nunca tive um trabalho qualificado, trabalhei em cafés, bares, restaurantes, bombas de gasolina, quiosque e o meu primeiro trabalho foi apanhar fruta.
              Apesar de nunca ter tido um trabalho na area da tecnologia, sei que todos os trabalhos que tive até agora, fizeram com que eu aprendesse a lidar com pessoas.
              Agora sei falar com qualquer pessoa.
              Neste momento estou á procura de um emprego na area da tecnologia. Todas as habilidades, seja design ou programação. Algo que aprendi sozinho.
              Eu sei que não tenho uma licenciatura em informatica, mas eu sei como aprender algo novo.
              Posso não saber a resposta mas sei como descobrir a solução.

              </p>
              <p className="textoAbout">
              Com aquilo sei de programação e design consigo fazer varias coisas.
              Na area do design consigo, desenhar e criar projectos, tipo apps, websites, logos, capas de podcast, editar videos e fotos.
              Normalmente uso a plataforma adobe para fazer isto, photoshop, illustrator, premiere, xd e também Figma.
              Na programação consigo fazer frontend dos sites e aplicações. Por exemplo este site é todo feito com React. Mas para saber mais podem, ver os meus projectos.
              </p>
            </div>
          </div>
        </div>
        <div id="formInput">
          <h1 className="titles">contacto</h1>
          <div className="titleDiv">
            <form onClick={() => changeToContact()} action="action_page.php">
              <label htmlFor="fname">Nome:</label>
              <input type="text" id="fname" name="firstname" placeholder="primeiro nome"/>

              <label htmlFor="email">Email:</label>
              <input type="text" id="emailInput" name="emailInput" placeholder="email"/>

              <label htmlFor="emailText">Text:</label>
              <textarea type="text" id="textinEmail" name="emailInput" placeholder=""/>

              
             <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>
      <div id="footer">
        <ul>
          <li><a href="#navbarId">intro</a></li>
          <li><a href="#skills">habilidades</a></li>
          <li><a href="#myself_me">sobre mim</a></li>
          <li><a href="https://medium.com/@diogo_mendes">thought and opinions</a></li>
        </ul>
        <ul>
          <li><a href={"https://www.linkedin.com/in/diogo-mendes-656715149/"}>linkedin</a></li>
          <li><a href={"https://medium.com/@diogo_mendes"}>medium</a></li>
          <li><a href={"https://github.com/diogoalexandreferreiramendes"}>github</a></li>
        </ul>
      </div>  
    </div>
  )
}

export default Home;