import React, { useEffect, useState } from "react";

import axios from 'axios'
import ProductsComponent from "./ProductsComponent";
import generatePDF from "productReportGenerator";

const ProductsReport = () => {
  
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}/api/products`);
        setProducts(response.data);
      } catch (err) {
        console.log("error");
      }
    };
    getAllProducts();
  }, []);

const reportProducts = products
// tickets.filter(ticket => ticket.status === "completed");
  
  return (
    <div>
      <div className="container mb-4 mt-4 p-4"></div>
      <div className="container mb-4 mt-4 p-4">
        <div className="row">
        <button
              className="btn btn-primary"
              type='button'
              onClick={() => generatePDF(reportProducts)}
            >
              Generate monthly report
            </button>
          {reportProducts ? (
            <> </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => generatePDF(reportProducts)}
            >
              Generate monthly report
            </button>
          )}
        </div>
      </div>
      <ProductsComponent products={products} />
    </div>
  );
};

export default ProductsReport;