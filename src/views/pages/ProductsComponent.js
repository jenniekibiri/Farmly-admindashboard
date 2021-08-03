import React from "react";


const ProductsComponent  = ({ products }) => {
console.log(products)
// a function that assigns bootstrap styling classes based on 
// the status of the ticket

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
                <td >
                  {ticket.price}
                </td>
                <td>
                  
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