import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import { contact } from "../portfolio";

const GithubProfileCard = ({ prof }) => {
        return (
                <Card className="section-lg bg-gradient-info shadow-lg border-0">
                        <Container>
                                <div className="p-2">
                                        <Row>
                                                <Col className="order-lg-2" lg="4">
                                                        <img
                                                                src={prof.avatar_url}
                                                                style={{ width: "200px" }}
                                                                alt="신동욱 Github Profile"
                                                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                                                        />
                                                </Col>
                                                <Col lg="8" className="order-lg-1">
                                                        <h2 className="text-white">{contact.title}</h2>
                                                        <p className="lead text-white mt-3">
                                                                {contact.description}
                                                        </p>
                                                        <p className="text-white mt-3">
                                                                {prof.bio ||
                                                                        "서비스 운영과 구조 개선을 함께 고민하는 백엔드 개발자입니다."}
                                                        </p>
                                                        <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                                                                <i className="ni ni-pin-3 text-info mr-2" />
                                                                {prof.location || contact.location}
                                                        </div>
                                                        <SocialLinks />
                                                </Col>
                                        </Row>
                                </div>
                        </Container>
                </Card>
        );
};

export default GithubProfileCard;
