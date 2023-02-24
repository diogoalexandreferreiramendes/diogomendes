import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h2>DASHBOARD</h2>
        <p><Link to={'/addposts'}>Add project</Link></p>
        <br></br>
        <p><Link to={'/addto'}>Add thought</Link></p>
    </div>
  )
}

export default Dashboard