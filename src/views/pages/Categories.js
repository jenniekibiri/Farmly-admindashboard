import React, { useContext, useEffect } from "react";

// reactstrap components
import {
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
  FormGroup,
  Form,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import getCategories from "context/actions/category";
import { GlobalContext } from "context/provider";

const Categories = () => {
  const { categoryState, categoryDispatch } = useContext(GlobalContext);
  const {
    category: { data },
  } = categoryState;
  
  useEffect(() => {
    if (data.length === 0) {
      getCategories(categoryDispatch);
    }
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Categories </h3>
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                  </div>
                  <div className="col">
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Categoty Name"
                            aria-label="category"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-danger"
                            type="button"
                            id="button-addon2"
                          >
                            Add Category
                          </button>
                        </div>
                      </FormGroup>
                    </Form>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>

                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {
                    categoryState.category.data.data&& categoryState.category.data.data.map((category) => {
                    return (
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
                                {category.categoryName}{" "}
                              </span>
                            </Media>
                          </Media>
                        </th>
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
                                onClick={(e) => e.preventDefault()}
                              >
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    );
                  })}
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
        {/* Dark table */}
      </Container>
    </>
  );
};

export default Categories;
