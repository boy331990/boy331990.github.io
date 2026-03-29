import React from "react";

import {
        Card,
        CardBody,
        CardTitle,
        CardSubtitle,
        CardText,
        CardHeader,
        Col,
} from "reactstrap";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
        const initials = data.company
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

        return (
                <Col lg="6">
                        <Fade left duration={1000} distance="40px">
                                <Card
                                        style={{ flex: 1 }}
                                        className="shadow-lg--hover shadow border-0 text-center rounded mb-4"
                                >
                                        <CardHeader className="bg-info">
                                                <h5 className="text-white mb-0">{data.company}</h5>
                                        </CardHeader>
                                        <CardBody className="py-5">
                                                <div
                                                        className="bg-gradient-info rounded-circle mb-3 img-center img-fluid shadow-lg d-flex align-items-center justify-content-center text-white"
                                                        style={{ width: "100px", height: "100px", fontSize: "2rem" }}
                                                >
                                                        {initials}
                                                </div>
                                                <CardTitle tag="h5">{data.role}</CardTitle>
                                                <CardSubtitle>{data.date}</CardSubtitle>
                                                <CardText tag="div" className="description my-3 text-left">
                                                        {data.desc}
                                                        <ul>
                                                                {data.descBullets
                                                                        ? data.descBullets.map((desc) => {
                                                                                  return <li key={desc}>{desc}</li>;
                                                                          })
                                                                        : null}
                                                        </ul>
                                                </CardText>
                                        </CardBody>
                                </Card>
                        </Fade>
                </Col>
        );
};

export default ExperienceCard;
