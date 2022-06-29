import React, { useState, useEffect } from "react";


import Invoice from "./Invoice";

import "./InvoiceData.css";

function InvoiceData() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSlectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchData = async () => {
    const response = await fetch(
      " https://rscdev.taxadda.com/api/invoice/list"
    );
    const data = await response.json();
    if (users != null) {
      setUsers(data.invoices);
    }
  };

  useEffect(() => {
    
    fetchData();
  }, []);
  function handleClick(user) {
    setSlectedUser(user);
  }

  return (
    <div classname="parent">
    {selectedUser&&<Invoice personDetail={selectedUser} />}
      <div className="child1">
        <input
          className="field"
          type=" text"
          placeholder="search invoice by name"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        {console.log(selectedUser)}
        
        {users.length &&
          users
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((user) => {
              return (
                <div>
                  <button
                    className="button23"
                    onClick={() => {
                      handleClick(user);
                    }}
                  >
                    {user.name}
                  </button>
                </div>
              );
            })}
      </div>
      
    </div>
  );
}

export default InvoiceData;
