import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="header">
    
<img className="logo" src="https://taxadda.com/wp-content/uploads/TaxAdda-HD.png" alt=' no'></img>
<ul>
  <li><Link  className ="a" to="/home">Genrate Invoice</Link></li>
  <li><Link   className ="a" to="/about">About</Link></li>
 
  
  
</ul>
      
    </div>
  )
}

export default Navbar
