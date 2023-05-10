import * as React from "react";
import {Container, Row, Col, Navbar} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import Logo2SVG from "../../svg/logo_2.svg";

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3em;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-bottom: 8px;
    text-align: center;
    font-size: smaller;
  }
  ul li a {
    color: white;
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
  .footer-content{
    display: flex;
    justify-content: space-between;
  }
  .footer-logo{
    font-size: 28px;
    
  }
  
`;

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <Container>
          <div className={'footer-content'}>
            <Row>

              {/* Column 4 */}
              <Col>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/DAT257/aboutus">About Us</Link>
                  </li>
                </ul>
              </Col>
            </Row>

            <div className={'footer-logo'}>
                <img
                    alt=""
                    src={Logo2SVG}
                    width="40px"
                    height="40px"
                    className="d-inline-block align-top"
                />{" "}
                FireWatcher
            </div>
          </div>
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
