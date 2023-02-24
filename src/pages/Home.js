import './Home.css';
import './Home_Mobile.css';
import justmyself from '../images/justmyself.jpg';
import designdeinteriores from '../icons/design-de-interiores.png';
import webprogramming from '../icons/web-programming.png';
import { useNavigate } from "react-router-dom"
import NavBar from '../components/NavBar';
import Projects from '../components/projects/Projects';
import To from '../components/to/To';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
  const [data, setData] = useState()
  const [datato, setDatato] = useState()

  let navigate = useNavigate();

  const changeToContact = () => {
    navigate("/contactsupport")
  }

  useEffect(() => {
    const userData = async () => {
      const queryUser = await getDocs(collection(db, "projects"))

      const projectList = queryUser.docs.map((doc) => ({ 
          id: doc.id,
          texto: doc.data().texto_project, 
          title_project: doc.data().title_project, 
          timestamp: doc.data().timestamp,
          image_url: doc.data().image_url,
          data_inicio: doc.data().data_inicio,
          data_fim: doc.data().data_fim,
          now: doc.data().now
        })
      )
      setData(projectList)
    }
    const userTo = async () => {
      const user_To = await getDocs(collection(db, "to"))

      const to_post = user_To.docs.map((doc) => ({
        id: doc.id,
        texto: doc.data().texto_to,
        title_to: doc.data().title_to,
        image_url: doc.data().image_url,
        timestamp: doc.data().timestamp
      }))
      setDatato(to_post)
    }
    userData()
    userTo()
  },[])

  return(
    <div>
      <NavBar />
      <div className="colorBody">
        <div>
          <div className="introHome">
            <div>
              <img src={justmyself} id="myself" alt="myself" />
            </div>
            <div className="introHomeText">
              <p>Hi, i'm Diogo Mendes!</p>
              <p> I design and build websites and apps  </p>
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
                <h3>Programmer:</h3>
                <img src={webprogramming} id="designIcon" alt="designIcon" />
              </ul>
            </div>
            <p id="ideiasOffMywork">easy, simple and<br/>
            painless</p>
            <div className="skillsDiv">
              <ul>
                <p><b>Designs:</b></p>
                <p>UI, UX, Logos, Web, Apps</p>
              </ul>
              <ul>
                <p><b>Coding</b></p>
                <p>Js, React,<br/> 
                React Native, Node,<br/></p>
              </ul>
            </div>
          </div>
          <div>
          </div>
          <div id="myself_me">
            <h1 className="titles">myself</h1>
            <div className="myself_text">
              <p className="textoAbout">

              Hey, I'm Diogo! I'm a 26-year-old based in Lisbon. I'm also a self-taught designer and developer with a passion for creating beautiful and functional digital experiences. From coding to design, I've taught myself everything I know, and I take pride in my ability to learn and adapt to new challenges. When I'm not training or coding, I love exploring the city and finding new inspiration for my work. I'm excited to showcase my skills and projects on my personal website, and I hope to inspire others to follow their passions and learn new skills on their own.

              </p>
            </div>
          </div>
        </div>
        <div id="formInput">
          <h1 className="titles">projects</h1>
            {data?.sort((a,b) => a.timestamp < b.timestamp ? 1: -1)
                  .map((projects) => (
                <Projects 
                  id={projects.id}
                  title={projects.title_project} 
                  texto={projects.texto}
                  timestamp={projects.timestamp}
                  image_url={projects.image_url}
                  data_inicio={projects.data_inicio}
                  data_fim={projects.data_fim}
                  now={projects.now}
                />
              ))}
        </div>
        <div id="formInput">
          <h1 className="titles">thoughts/opinions</h1>
            <div className='div_to'>
          {datato?.sort((a,b) => a.timestamp < b.timestamp ? 1: -1)
                  .slice(0,4)
                  .map((projects) => (
                    <To 
                      id={projects.id}
                      title_project={projects.title_to} 
                      texto_to={projects.texto}
                      timestamp={projects.timestamp}
                      image_url={projects.image_url}
                    />
                ))}
          </div>
        </div>
      </div>
      <Footer/> 
    </div>
  )
}

export default Home;