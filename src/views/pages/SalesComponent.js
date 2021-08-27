import React from "react";


const SalesComponent = ({ orders }) => {

  return (
    <div className="container">
      {orders.length === 0 ? (
        "You currently have no orders created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">numOfItems</th>
              <th scope="col">Products</th>
              <th scope="col">Ordered By</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.numOfItems}</td>
                <td>
                        {order.product.map((product, i) => {
                       
                          return <p key={i}> {product.productName}</p>;
                        })}
                      </td>
                <td >
                  {order.user.email}
                </td>
                <td>
                {order.status}
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SalesComponent;