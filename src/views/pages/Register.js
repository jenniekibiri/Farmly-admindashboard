/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
 
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { GlobalContext } from "context/globalState";
import axios from "axios";
const Register = () => {
  const history = useHistory();
  const { register, newUser } = useContext(GlobalContext);
  const [state, setstate] = useState([]);
  const onChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: state.email,
      password: state.password,
      firstName: state.firstName,
      lastName: state.lastName,
      phone: state.phone,
      address: state.address,
      role: state.role,
    };
    register(user);
    axios
      .post(`http://localhost:5000/api/register`, {
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        address: state.address,
        role: state.role,
        //   Authorization: `Bearer ${token}`,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (newUser) {
      if (newUser.data) {
        history.push("/auth/login");
      }
    }
  }, [newUser]);
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Register</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Firstname"
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Lastname"
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    onChange={onChange}
                    autoComplete="new-email"
                    name="email"
                    value={state.email}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-phone" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="phone"
                    type="text"
                    name="phone"
                    value={state.phone}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-pin-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="address"
                    type="text"
                    name="address"
                    value={state.address}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="role"
                    type="text"
                    name="role"
                    value={state.role}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name="password"
                    value={state.password}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <Row className="my-4">
                <Col xs="7">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                  <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div>
                      
                  </div>
                </Col>
                <Col xs="5">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                  <Link to='/auth/login'>
                    <small > Have an account?</small>
                  </Link>
                      
                  </div>
                </Col>
              </Row>
            

              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={onSubmit}
                  type="submit"
                >
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
