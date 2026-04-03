import { Icon } from "@iconify/react";
import React, { Fragment, useMemo, useState } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
	const [activeNodeId, setActiveNodeId] = useState(
		skillsSection.mindmap?.coreId || "all"
	);
	const mindmapLinePositions = {
		"top-left": { x: 22, y: 20 },
		"top-right": { x: 78, y: 20 },
		right: { x: 90, y: 50 },
		"bottom-right": { x: 78, y: 80 },
		"bottom-left": { x: 22, y: 80 },
		left: { x: 10, y: 50 },
	};
	const activeNode = useMemo(() => {
		if (!skillsSection.mindmap || activeNodeId === skillsSection.mindmap.coreId) {
			return null;
		}
		return skillsSection.mindmap.nodes.find((node) => node.id === activeNodeId) || null;
	}, [activeNodeId]);

	const activeSkills = new Set(activeNode?.relatedSkills || []);

	return (
		<Fade bottom duration={1000} distance="40px">
			<Container className="text-center my-5 section section-lg">
				<h1 className="h1">{skillsSection.title}</h1>
				<p className="lead">{skillsSection.subTitle}</p>
				<Row>
					<Col lg="6">
						<DisplayLottie animationPath="/lottie/webdev.json" />
					</Col>
					<Col lg="6">
						<div className="d-flex justify-content-center flex-wrap mb-5">
							{skillsSection.softwareSkills.map((skill) => {
								const isActive =
									activeSkills.size === 0 ||
									activeSkills.has(skill.skillName);
								return (
									<Fragment key={skill.skillName}>
										<div
											className={`icon icon-lg icon-shape shadow rounded-circle mb-5 ${
												isActive ? "skill-icon--active" : "skill-icon--inactive"
											}`}
											id={skill.skillName}
										>
											<Icon
												icon={
													skill.fontAwesomeClassname
												}
												data-inline="false"
											></Icon>
										</div>
										<UncontrolledTooltip
											delay={0}
											placement="bottom"
											target={skill.skillName}
										>
											{skill.skillName}
										</UncontrolledTooltip>
									</Fragment>
								);
							})}
						</div>
						<div>
							{skillsSection.skills.map((skill) => {
								return <p key={skill}>{skill}</p>;
							})}
						</div>
					</Col>
				</Row>
				{skillsSection.mindmap && (
					<div className="skills-mindmap">
						<svg
							className="skills-mindmap__lines"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							{skillsSection.mindmap.nodes.map((node) => {
								const isActiveNode = node.id === activeNodeId;
								const linePosition =
									mindmapLinePositions[node.position] ||
									mindmapLinePositions["top-left"];
								return (
									<line
										key={`line-${node.title}`}
										className={isActiveNode ? "skills-mindmap__line--active" : ""}
										x1="50"
										y1="50"
										x2={linePosition.x}
										y2={linePosition.y}
									/>
								);
							})}
						</svg>
						<div
							className={`skills-mindmap__core ${
								activeNodeId === skillsSection.mindmap.coreId
									? "skills-mindmap__core--active"
									: ""
							}`}
							onClick={() => setActiveNodeId(skillsSection.mindmap.coreId)}
							role="button"
							tabIndex={0}
							onKeyDown={(event) => {
								if (event.key === "Enter" || event.key === " ") {
									setActiveNodeId(skillsSection.mindmap.coreId);
								}
							}}
						>
							<span>{skillsSection.mindmap.core}</span>
						</div>
						{skillsSection.mindmap.nodes.map((node) => (
							<div
								key={node.title}
								className={`skills-mindmap__node skills-mindmap__node--${node.position} ${
									activeNodeId === node.id ? "skills-mindmap__node--active" : ""
								}`}
								onClick={() => setActiveNodeId(node.id)}
								role="button"
								tabIndex={0}
								onKeyDown={(event) => {
									if (event.key === "Enter" || event.key === " ") {
										setActiveNodeId(node.id);
									}
								}}
							>
								<h3>{node.title}</h3>
								<ul>
									{node.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				)}
				{activeNode && (
					<p className="skills-mindmap__hint mt-4">
						<strong>{activeNode.title}</strong> 선택됨: 관련 기술 아이콘이 함께
						활성화됩니다.
					</p>
				)}
			</Container>
		</Fade>
	);
};

export default Skills;
