import React from 'react'

function InvoiceName(users) {
  return (
    <div>
    
    {users.length &&
          users.map((user) => {
            return (
              <div >
                <div >
                  <div  key={user.id}>
                     
                  <button className="btn btn-primary button2 ">{user.name}</button>
                  </div>
                  
                </div>
              </div>
            );
          })}
      
    </div>
  )
}

export default InvoiceName
