import React from "react";


const UsersComponent = ({ users }) => {

  return (
    <div className="container">
      {users.length === 0 ? (
        "You currently have no users created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Phone</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td >
                  {user.phone}
                </td>
                <td>
                {user.role}
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