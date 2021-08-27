import React, { useContext, useEffect } from "react";
import axios from "axios";
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

import { GlobalContext } from "context/globalState";

const Orders = () => {
  const { getOrders, orders, deleteOrder } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKENDAPI}/api/order/list`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        getOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(orders);
  //   const handleDelete = (orderId) => (e) => {
  //     e.preventDefault();

  //     axios
  //       .delete( `${process.env.REACT_APP_BACKENDAPI}/api/order/${orderId}`, {
  //         headers: {},
  //       })
  //       .then((response) => {
  //         //signout order
  //         return response;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });

  //     deleteBuyer(orderId);
  //   };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}

        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Order Details</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">NumOf items</th>
                    <th scope="col">Products</th>
                    <th scope="col">Order By</th>
                    <th scope="col">status</th>
                    <th scope="col">Address</th>

                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr>
                      <th scope="row">{order._id}</th>
                      <td>{order.numOfItems}</td>

                      <td> 
                      {order.product.map((product, i) => {
                          console.log(product.productName)
                        return <p> {product.productName}</p>
                      })}</td>

                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          {order.status}
                        </Badge>
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">{order.user.email}</span>
                        </div>
                      </td>

                      <td> {order.shippingAddress}</td>

                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Edit
                            </DropdownItem>
                            <DropdownItem>
                              {/* onClick={handleDelete(order._id)} */}
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Orders;
