import React, { useContext, useEffect }  from "react";
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
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import getProducts from "context/actions/product";
import { GlobalContext } from "context/provider";
import product from "context/actions/product";
const ProductTables = () => {
  const { productState, productDispatch } = useContext(GlobalContext);
  const {
    product: { data },
  } = productState;
  console.log(data.data)
  useEffect(() => {
    if (data.length === 0) {
      getProducts(productDispatch);
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
                <h3 className="mb-0">Products </h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                   
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
              { 
            data.data && data.data.map((data,i)=>(
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
                      {data.productName}
                    </span>
                  </Media>
                </Media>
              </th>
              <td> {data.description.substring(0, 50)}...</td>
             
              <td>
              {data.price} KSH
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{data.quantity} KG</span>
                  
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
                      onClick={(e) => e.preventDefault()}
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
        {/* Dark table */}
        
      </Container>
    </>
  );
};

export default ProductTables;
