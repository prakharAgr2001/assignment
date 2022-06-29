import React from "react";

import './Invoice.css'
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";


function Invoice({personDetail}) {
  return (
	<div>
	
	 <Navbar/>
	 {alert(personDetail.status!=="due" ?"status due   scroll up to see invoice":" status done scroll up to see invoice")}
	 
    <div className="invoiceBody">
      <div >
        <h1 className="title">Invoice</h1>
        <div className="adress">
          <p><em>Name</em> : {personDetail.name}</p>
          <p><em>Status</em> : {personDetail.status}</p>
          <p><em>Bill Id</em>: { personDetail._id}</p>
        </div>
      </div>
      <div className="recipent">
        
        <p>Bill Number : {personDetail.billNo}</p>
      </div>
      <div className="table">
      <table class="meta">
				<tr>
					<th><span >created Date</span></th>
					<td><span >{personDetail.createdAt}</span></td>
				</tr>
				<tr>
					<th><span >Date Due</span></th>
					<td><span >{personDetail.billDate}</span></td>
				</tr>
				<tr>
					<th><span >Amount Paid</span></th>
					<td><span id="prefix" >Rs</span><span>{personDetail.grossAmount}</span></td>
				</tr>
			</table>
      </div>
      <table class="inventory">
				<thead>
					<tr>
						<th><span >Item</span></th>
						<th><span >Rate</span></th>
						<th><span >GST Amount</span></th>
						<th><span >Quantity</span></th>
						<th><span >Price</span></th>
					</tr>
				</thead>
				<tbody>
					<tr>
                         
						<td><span >{personDetail.lineItem[0]? personDetail.lineItem[0].productName :"No data"}</span></td>
						<td><span >{personDetail.lineItem[0]? personDetail.lineItem[0].price :"No Data"}</span></td>
						<td><span data-prefix></span><span >{personDetail.lineItem[0]? personDetail.lineItem[0].gstRate :"No data"}</span></td>
						<td><span >{personDetail.lineItem[0]? personDetail.lineItem[0].quantity :"No Data"}</span></td>
						<td><span data-prefix>Rs</span><span>{personDetail.lineItem[0]? personDetail.lineItem[0].quantity*personDetail.lineItem[0].price +personDetail.lineItem[0].gstRate :"No Data"}</span></td>
					</tr>
				</tbody>
			</table>
			
			<table class="balance">
				<tr>
					<th><span >Total</span></th>
					<td><span data-prefix>Rs</span><span>{personDetail.lineItem[0]? personDetail.lineItem[0].quantity*personDetail.lineItem[0].price + personDetail.lineItem[0].gstRate :"No Data"}</span></td>
				</tr>
				<tr>
					<th><span >Amount Paid</span></th>
					<td><span data-prefix>Rs</span><span >{personDetail.grossAmount}</span></td>
				</tr>
				<tr>
					<th><span >Balance Due</span></th>
					<td><span data-prefix>Rs</span>{personDetail.lineItem[0]? personDetail.lineItem[0].quantity*personDetail.lineItem[0].price + personDetail.lineItem[0].gstRate - personDetail.grossAmount :"No Data"}<span></span></td>
				</tr>
			</table>
            <div className="Notes">
            <h1><span  >Additional Notes</span></h1>
			<div >
				<p>{personDetail.notes}</p>
			</div>
            </div>
    </div>
	<Footer/>
	</div>
  );
}

export default Invoice;
