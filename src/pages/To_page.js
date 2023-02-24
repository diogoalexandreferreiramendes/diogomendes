import React from 'react'
import NavBar from '../components/NavBar'
import Single_Projects from '../components/projects/Single_Projects'

const To_page = () => {
  return (
    <div>
      <NavBar/>
      <div className="colorBody">
        <h2>Thought&Opinions</h2>
        <Single_Projects/>
        <Single_Projects/>
        <Single_Projects/>
      </div>
    </div>
  )
}

export default To_page
