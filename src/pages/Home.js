import './Home.css';
import './Home_Mobile.css';
import justmyself from '../images/justmyself.jpg';
import designdeinteriores from '../icons/design-de-interiores.png';
import webprogramming from '../icons/web-programming.png';
import { useNavigate } from "react-router-dom"
import Contactsupport from './Contactsupport';
import Medium from '../components/Medium';

const Home = () => {

  let navigate = useNavigate();

  const changeToContact = () => {
    navigate("/contactsupport")
  }

  return(
    <div>
      <div className="navbarHome" id="navbarId">
        <ul className="ulnavbar">
          <li id="listStyle"><a href="#thoughtsandopinions">thought&opinions</a></li>
          <li><a href="#formInput" >contact</a></li>
        </ul>
      </div>
      <div className="colorBody">
        <div>
          <div className="introHome">
            <div>
              <img src={justmyself} id="myself" alt="myself" />
            </div>
            <div className="introHomeText">
              <p>Hi, Diogo Mendes</p>
              <p>I design & Build webistes and applications</p>
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
                <p><b>What i do with design:</b></p>
                <p>UI, UX, Logos, Web, Mobile, Apps</p>
              </ul>
              <ul>
                <p><b>...Programming</b></p>
                <p>HTML, Css, Bootstrap,<br/> 
                JS, React, React Native, Node,<br/> 
                Python, Django</p>
              </ul>
            </div>
          </div>
          <div>
          </div>
          <div id="myself_me">
            <h1 className="titles">myself</h1>
            <div className="myself_text">
              <p className="textoAbout">Hi, so my name is Diogo Mendes, I live in a small town, call Guimarães in the north of Portugal. 
              Small but a really young and beautiful Town. 
              At 25 I think I have done some interesting things, like: I am a brown belt at Brazilian jiu-jitsu, and I have won the national championship multiples times, and I am really proud of that. 
              In my journey until now, I have never had a qualified job like working in tech or financial companies. 
              All my job were: working coffee shop, pub, restaurant, gas station, kiosk, and my first job, which was picking up the fruit. 
              I am really happy that I got those jobs because they gave me so many skills on a personal level. 
              Now I know how to talk to people, I can have a small chat and get people interested in me, and much more. 
              Now at this age, I am looking for work in a tech job. All the skills that I have, from design to programming are all self-taught. 
              I know that I don’t have the skills as a computer engineer, but I know how to learn a skill and master it. 
              I could not know the answer to a question but I know how to find out. </p>
              <p className="textoAbout">
              My Design and Tech Skills can do a lot of stuff. 
              In Design, I have drawn and created a lot of projects, like apps, websites, logos, podcasts covers, edited videos, and photos. 
              Normally I used the adobe platform, photoshop, illustrator, premiere, xd. Now I am trying new tools like Sketch, Figma, or Canva.
              About my Tech Skills, I can do a frontend website, with Html and Css or I can use React. For example, this website is all done with React. But to see more, check out the projects below.
              </p>
            </div>
          </div>
          <div id="thoughtsandopinions">
            <h1 className="titles">thoughts & opinions</h1>
            <div className="posts">
              <ul className="ulPostsleft">
                <p><b>3 Things I wish I knew earlier in Life</b></p>
                <p>I know that this topic is probably a little bit cliché, because everyone has an opinion, and thinks her’s is the one that is correct. I am not a romantic person, that thinks, everything is gonna be all right and everybody is gonna be successful. My philosophy is more like…</p>
                <a href={"https://medium.com/@diogo_mendes/3-things-i-wish-i-knew-earlier-in-life-b3920478db43"}>
                  <button className="buttonBlog">read more</button>
                </a>  
              </ul>
              <ul className="ulPostsright">
                <p><b>Bitcoin in a GenZ</b></p>
                <p>As a GenZ I think that Bitcoin was one Tops Inventions of the 21 century, because of the freedom that gives people, literally anyone with an internet connection can buy and sell Bitcoin. You can also do transactions between two entities without the need of a third party, because of…
                </p>
                <a href={"https://medium.com/@diogo_mendes/bitcoin-in-a-genz-acdd83c43416?source=user_profile---------1-------------------------------"}>
                  <button className="buttonBlog">read more</button>
                </a>  
              </ul>
            </div>
            <div>
            </div>
            { /*<div className="posts">
              <ul className="ulPostsleft">
                <p><b>#002</b></p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <button onClick={() => alert("episode #004")} className="buttonBlog">read more</button>
              </ul>
              <ul className="ulPostsright">
                <p><b>#001</b></p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <button onClick={() => alert("episode #004")} className="buttonBlog">read more</button>
              </ul>
            </div> */}
            {/*<div id="morePostsButton">
              <button onClick={() => alert("hello from the other side")}>more posts</button>
            </div>*/}
            {/*<Medium /> */}
          </div>
        </div>
        <div id="formInput">
          <h1 className="titles">contact</h1>
          <div className="titleDiv">
            <form onClick={() => changeToContact()} action="action_page.php">
              <label htmlFor="fname">FirstName:</label>
              <input type="text" id="fname" name="firstname" placeholder="first name"/>
            
              <label htmlFor="lname">LastName:</label>
              <input type="text" id="lname" name="lastname" placeholder="last name"/>

              <label htmlFor="email">Email:</label>
              <input type="text" id="emailInput" name="emailInput" placeholder="email"/>

              <label htmlFor="emailText">Text:</label>
              <textarea type="text" id="textinEmail" name="emailInput" placeholder="your text"/>

              
             <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>
      <div id="footer">
        <ul>
          <li><a href="#navbarId">intro</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#myself_me">about me</a></li>
          <li><a href="#thoughtsandopinions">thought and opinions</a></li>
          <li><a href="#formInput">contact</a></li>
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