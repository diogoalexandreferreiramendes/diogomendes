import React, { useEffect } from 'react'
import './To.css'
import imgTry from "../../images/img1.jpg"

const To = (props) => {

    useEffect(() => {
        console.log(props.timestamp.toDate().toLocaleString())
    },[])

    return(
        <div className='to_general_style'>
            <div>
                <img src={props.image_url} width="250" height="200" className='toImage'/>
                <h3 id="to_letters"><a href={"https://medium.com/@diogo_mendes"} style={{textDecoration:'none',  color:'black'}}>{props.title_project}</a></h3>
                <p className="to_data">{props.timestamp.toDate().toLocaleString()}</p>
                <p className="to_data_text">{props.texto_to.substring(0, 250)}...</p>
            </div>
        </div>
    )
}

export default To