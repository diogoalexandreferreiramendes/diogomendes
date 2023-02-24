import './Projects.css';
import React from 'react'

const Projects = (props) => {
    return(
        <div className="projects_general_style">
            <div className="projects_div_style">
                <div>
                    <img src={props.image_url} width="250" height="200" className='style_image'/>
                </div>
                <div id="projects_text">
                    <div>
                        <h3><a style={{textDecoration:'none',  color:'black'}}> {props.title} </a></h3>
                        <p id="project_letter_text">{props.now || props.data_inicio.slice(0, -3) == props.data_fim.slice(0, -3) ? <></> : props.data_fim.slice(0, -3)} {props.data_inicio.slice(0, -3)}</p>
                    </div>
                    <p id="text_project"> 
                        {props.texto.substring(0, 1500)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects