import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 2em;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 2em;
    padding-bottom: 1em;
  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <Container>
          <Row>
            {/* Column 1 */}
            <Col>
              <h4>smthn smthn</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#feature">yee yee </a>
                </li>
                <li>
                  <a href="/test">yee yee </a>
                </li>
                <li>
                  <a href="/">yee yee </a>
                </li>
                <li>
                  <a href="/">yee yee </a>
                </li>
              </ul>
            </Col>
            {/* Column 2 */}
            <Col>
              <h4>smthn smthn</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">yee yee </a>
                </li>
                <li>
                  <a href="/">yee yee </a>
                </li>
                <li>
                  <a href="/">yee yee </a>
                </li>
                <li>
                  <a href="/">yee yee </a>
                </li>
              </ul>
            </Col>
            {/* Column 3 */}
            <Col>
              <h4>smthn smthn</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">yee yee </a>
                </li>
                <li>
                  <a href="/">yee yee </a>
                </li>
                <li>
                  <a href="/">yee yee </a>
                </li>
                <li>
                  <a href="/">yee yee </a>
                </li>
              </ul>
            </Col>
            {/* Column 4 */}
            <Col>
              <h4>About us</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/DAT257/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/DAT257/">Home / Map</Link>
                </li>
              </ul>
            </Col>
          </Row>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} FireWatcher - All Rights Reserved
            </p>
          </div>
        </Container>
      </div>
    </FooterContainer>
  );
}

export default Footer;
