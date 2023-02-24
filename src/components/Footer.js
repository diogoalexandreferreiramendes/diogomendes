import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
        <div id="footer">
        <div id="final_footer">
        <ul>
          <li><Link to={'/'}>intro</Link></li>
          {/* <li><Link to={'/projects'}>projects</Link></li> */}
          <li><a href={"https://medium.com/@diogo_mendes"}>projects</a></li>
          {/* <li><Link to={'/thoughts&opinions'}>thoughts&opinions</Link></li> */}
          <li><a href={"https://medium.com/@diogo_mendes"}>thoughts&opinions</a></li>
          <li><Link to={'/contactsupport'}>contacto</Link></li>
        </ul>
        </div>
        <div>
        <ul>
          <li><a href={"https://www.linkedin.com/in/diogo-mendes-656715149/"}>linkedin</a></li>
          <li><a href={"https://github.com/diogoalexandreferreiramendes"}>github</a></li>
        </ul>
        </div>
         </div> 
    </div>
  )
}

export default Footer