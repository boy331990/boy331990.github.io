import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
        return (
                <div className="btn-wrapper text-lg">
                        {socialLinks.github ? (
                                <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="github"
                                        href={socialLinks.github}
                                        rel="noopener"
                                        aria-label="Github"
                                        target="_blank"
                                >
                                        <span className="btn-inner--icon">
                                                <i className="fa fa-github" />
                                        </span>
                                </Button>
                        ) : null}
                        {socialLinks.email ? (
                                <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="danger"
                                        rel="noopener"
                                        aria-label="Email"
                                        href={socialLinks.email}
                                >
                                        <span className="btn-inner--icon">
                                                <i className="fa fa-envelope" />
                                        </span>
                                </Button>
                        ) : null}
                </div>
        );
};

export default SocialLinks;
