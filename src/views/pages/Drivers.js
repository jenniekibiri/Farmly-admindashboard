import React, { useContext, useEffect } from "react";
import deleteDriver from "context/actions/driver/deleteDriver";
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
import getDrivers from "context/actions/driver";
import { GlobalContext } from "context/provider"
const Drivers = () => {
  const { driverState, driverDispatch } = useContext(GlobalContext);
  const {
    user: { data },
  } = driverState;
  
  useEffect(() => {
    if (data.length === 0) {
      getDrivers(driverDispatch);
    }
  }, []);


const handleDelete =(id)=>(e)=>{
  e.preventDefault();
  deleteDriver(id)(driverDispatch)
  
}

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
      
        <Row className="mt-5">

          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Drivers Details </h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {
                    data.data&&data.data.map((user,i)=>(
<tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/bootstrap.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                           {user.firstName} {user.lastName}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td> {user.email}</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                    </td>
                    <td> {user.phone}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2"> {user.address}</span>
                     </div>
                    </td>
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
                          <DropdownItem
                            href="#pablo"
                            onClick={handleDelete(user._id)}
                          >
                           Delete
                          </DropdownItem>
                         </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>

                    ))
                    }
                
                </tbody>
              </Table>
              <CardFooter className="py-4">
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

export default Drivers;
