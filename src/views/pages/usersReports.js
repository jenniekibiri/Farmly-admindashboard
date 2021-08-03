import React, { useEffect, useState } from "react";

import axios from 'axios'
import UsersComponent from "./TicketsComponent ";
import generatePDF from "reportGenerator";

const UsersReport = () => {
  
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (err) {
        console.log("error");
      }
    };
    getAllUsers();
  }, []);

const reportUsers = users
// tickets.filter(ticket => ticket.status === "completed");
  
  return (
    <div>
      <div className="container mb-4 mt-4 p-4"></div>
      <div className="container mb-4 mt-4 p-4">
        <div className="row">
        <button
              className="btn btn-primary"
              type='button'
              onClick={() => generatePDF(reportUsers)}
            >
              Generate monthly report
            </button>
          {reportUsers ? (
            <> </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => generatePDF(reportUsers)}
            >
              Generate monthly report
            </button>
          )}
        </div>
      </div>
      <UsersComponent users={users} />
    </div>
  );
};

export default UsersReport;