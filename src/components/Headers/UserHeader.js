
import React from "react";
import { isAuthenticated } from "auth/auth";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import capitalize from "helpers";

const UserHeader = () => {

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/profile-cover.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h5 className="display-2 text-white">Hello {capitalize(isAuthenticated().user.firstName)}</h5>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can view your personal information and or update the information.
              </p>
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
