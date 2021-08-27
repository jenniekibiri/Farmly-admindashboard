import React, { useEffect, useState } from "react";

import axios from 'axios'

import SalesComponent from "./SalesComponent.js";
import generatePDF from "reportGenerator";

const SalesReport = () => {
  
  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}/api/order/list`);
        setOrders(response.data);
      } catch (err) {
        console.log("error");
      }
    };
    getAllUsers();
  }, []);

const reportUsers = orders
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
      <SalesComponent orders={orders} />
    </div>
  );
};

export default SalesReport;