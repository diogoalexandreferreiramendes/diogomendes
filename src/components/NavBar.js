import React from 'react'
import './NavBar.css'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="navbarHome" id="navbarId">
        <ul className="ulnavbar">
          <li id="listStyle"><Link to={'/'}>intro</Link></li>
          {/* <li id="listStyle"><Link to={'/projects'}>projects</Link></li>
          <li id="listStyle"><Link to={'/thoughts&opinions'}>thoughts&opinions</Link></li> */}
          <li>
            <li id="listStyle">
                <a href="https://www.linkedin.com/in/diogo-mendes-656715149/" > <AiFillLinkedin size={30}/> </a>
                <a href="https://github.com/diogoalexandreferreiramendes" > <AiFillGithub size={30}/> </a>
            </li>
          </li>
        </ul>
    </div>
  )
}


export default NavBar