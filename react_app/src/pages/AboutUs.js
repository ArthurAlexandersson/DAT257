import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import './AboutUs.css'; // Import a custom CSS file for additional styling

function AboutUs() {
    return (
        <Container className="about-us-container">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <h1 className={"text-center mb-5"}>About Us</h1>
                    <p>
                        Welcome to FireWatcher! We are a team of dedicated professionals who are passionate about providing accurate and timely information on wildfires around the world. Our mission is to help raise awareness and improve the response to these natural disasters.
                    </p>
                    <h2 className="mb-4 mt-5">The Team</h2>

                    <Row>
                        <Col sm={6} md={4} className="mb-4">
                            <Card className="member-card">
                                <Card.Body>
                                    <Card.Title>Almahal Jihad</Card.Title>
                                    <Card.Text>CEO &amp; Co-Founder</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} className="mb-4">
                            <Card className="member-card">
                                <Card.Body>
                                    <Card.Title>Karbin Oscar</Card.Title>
                                    <Card.Text>CTO &amp; Co-Founder</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} className="mb-4">
                            <Card className="member-card">
                                <Card.Body>
                                    <Card.Title>Alexandersson Arthur</Card.Title>
                                    <Card.Text>CTO &amp; Co-Founder</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} className="mb-4">
                            <Card className="member-card">
                                <Card.Body>
                                    <Card.Title>Börås Anton</Card.Title>
                                    <Card.Text>CTO &amp; Co-Founder</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} className="mb-4">
                            <Card className="member-card">
                                <Card.Body>
                                    <Card.Title>Hromic Dino</Card.Title>
                                    <Card.Text>CTO &amp; Co-Founder</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} className="mb-4">
                            <Card className="member-card">
                                <Card.Body>
                                    <Card.Title>Pettersson Benjamin</Card.Title>
                                    <Card.Text>Lead Developer</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} className="mb-4">
                            <Card className="member-card">
                                <Card.Body>
                                    <Card.Title>Gille Gustav</Card.Title>
                                    <Card.Text>Lead Developer</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} className="mb-4">
                            <Card className="member-card">
                                <Card.Body>
                                    <Card.Title>Norén Herman</Card.Title>
                                    <Card.Text>Lead Developer</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <h2 className="mb-4 mt-5">Contact Us</h2>
                    <p>
                        If you have any questions or suggestions, feel free to reach out to us at <a href="mailto:info@firewatcher.com">info@firewatcher.com</a>.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;