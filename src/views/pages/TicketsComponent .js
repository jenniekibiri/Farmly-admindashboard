import React from "react";
import { Link } from "react-router-dom";

const UsersComponent = ({ users }) => {

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
      {users.length === 0 ? (
        "You currently have no users created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map(ticket => (
              <tr key={ticket._id}>
                <td>{ticket._id}</td>
                <td>{ticket.firstName}</td>
                <td>{ticket.lastName}</td>
                <td className={assignColorToTicketStatus(ticket)}>
                  {ticket.phone}
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

export default UsersComponent;