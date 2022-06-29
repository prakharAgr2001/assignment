import React from "react";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import About from "./components/About";


import Invoice from "./components/invoice/Invoice";
import InvoiceData from "./components/invoice/InvoiceData";
import Homepage from "./Homepage";

function App() {
  return (
    
    <div>
    
     
      <Router>
        
        

        <Routes>
          <Route exact path="/invoicedata" element={<InvoiceData />} />
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path="/invoice" element={<Invoice />} />
          
         
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
