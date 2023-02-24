import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Single_Projects from '../components/projects/Single_Projects'
import './Projects.css'

 
const Projects = (props) => {
    return(
        <div>
            <NavBar />
                <div className="colorBody">
                    <h2>Projects</h2>
                    <Single_Projects />
                </div>
            <Footer/>
        </div>
    )
}

export default Projects