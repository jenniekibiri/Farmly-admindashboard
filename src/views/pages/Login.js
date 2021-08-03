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
  FormText,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { GlobalContext } from "context/globalState";
import axios from "axios";
const Login = () => {
  const history = useHistory();
  const { login, user, error } = useContext(GlobalContext);

  const [state, setstate] = useState([]);
  const onChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/login`, {
        email: state.email,
        password: state.password,
      })
      .then((response) => {
        if (response.data.message) {
          setstate((prevState) => ({
            ...prevState,
            message: response.data.message,
          }));

          const newUser = {
            email: state.email,
            password: state.password,
          };

          login(newUser);
        } else {
          localStorage.setItem("user", JSON.stringify(response.data));
          history.push("/admin/index");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              {
                <FormText className="text-red">
                  {state.message && state.message}
                </FormText>
              }
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
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
                    required="required"
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
                    required
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  onClick={onSubmit}
                  type="submit"
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <Link to="/auth/register">
              <small>Create new account</small>
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
