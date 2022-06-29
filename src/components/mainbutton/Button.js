import React from 'react'
import { useNavigate } from "react-router-dom"
import './button.css'
 
function Button() {
    const navigate = useNavigate()
  return (
    <div>
     <button onClick={()=>{navigate('/invoicedata')}} className="GenrateInvoice"> Genrate Invoice
</button>
      
    </div>
  )
}

export default Button
