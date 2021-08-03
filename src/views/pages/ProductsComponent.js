import React from "react";
import { Link } from "react-router-dom";

const ProductsComponent  = ({ products }) => {

// a function that assigns bootstrap styling classes based on 
// the status of the ticket
  const assignColorToTicketStatus = ticket => {
    if (ticket.status === "completed") {
      return "p-3 mb-2 bg-success text-white";
    } else if (ticket.status === "in_progress") {
      return "p-3 mb-2 bg-warning text-dark";
    } else if (ticket.status === "opened") {
      return "p-3 mb-2 bg-light text-dark";
    }
  };
  return (
    <div className="container">
      {products.length === 0 ? (
        "You currently have no products created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">productName</th>
              <th scope="col">Quantity</th>
              <th scope="col">price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map(ticket => (
              <tr key={ticket._id}>
                <td>{ticket._id}</td>
                <td>{ticket.productName}</td>
                <td>{ticket.quantity}</td>
                <td className={assignColorToTicketStatus(ticket)}>
                  {ticket.price}
                </td>
                <td>
                  <Link to={`/ticket/${ticket._id}`}>See comments</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsComponent ;