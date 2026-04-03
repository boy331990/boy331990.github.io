import { Icon } from "@iconify/react";
import React, { Fragment, useMemo, useState } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
	const [activeNodeId, setActiveNodeId] = useState("core");

	const networkData = useMemo(() => {
		if (!skillsSection.mindmap) {
			return { nodes: [], edges: [], activeSkillsByNode: {} };
		}

		const categoryRadius = 30;
		const childRadius = 12;
		const center = { x: 50, y: 50 };
		const nodes = [
			{
				id: "core",
				label: skillsSection.mindmap.core,
				type: "core",
				x: center.x,
				y: center.y,
			},
		];
		const edges = [];
		const activeSkillsByNode = { core: [] };

		skillsSection.mindmap.nodes.forEach((category, categoryIndex) => {
			const angle = (2 * Math.PI * categoryIndex) / skillsSection.mindmap.nodes.length - Math.PI / 2;
			const categoryX = center.x + Math.cos(angle) * categoryRadius;
			const categoryY = center.y + Math.sin(angle) * categoryRadius;
			const categoryId = category.id;

			nodes.push({
				id: categoryId,
				label: category.title,
				type: "category",
				x: categoryX,
				y: categoryY,
			});
			edges.push({ from: "core", to: categoryId });
			activeSkillsByNode[categoryId] = category.relatedSkills || [];

			const spread = Math.max(0.4, Math.min(1.2, category.items.length / 3));
			category.items.forEach((item, itemIndex) => {
				const offset = category.items.length === 1 ? 0 : (itemIndex / (category.items.length - 1) - 0.5) * spread;
				const itemAngle = angle + offset;
				const leafId = `${categoryId}-${item}`;

				nodes.push({
					id: leafId,
					label: item,
					type: "leaf",
					x: categoryX + Math.cos(itemAngle) * childRadius,
					y: categoryY + Math.sin(itemAngle) * childRadius,
					parentId: categoryId,
				});
				edges.push({ from: categoryId, to: leafId });
				activeSkillsByNode[leafId] = category.relatedSkills || [];
			});
		});

		return { nodes, edges, activeSkillsByNode };
	}, []);

	const activeSkills = new Set(networkData.activeSkillsByNode[activeNodeId] || []);
	const connectedNodes = useMemo(() => {
		const connected = new Set([activeNodeId]);
		networkData.edges.forEach((edge) => {
			if (edge.from === activeNodeId) {
				connected.add(edge.to);
			}
			if (edge.to === activeNodeId) {
				connected.add(edge.from);
			}
		});
		return connected;
	}, [activeNodeId, networkData.edges]);

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
					<div className="skills-network">
						<svg className="skills-network__svg" viewBox="0 0 100 100" role="img">
							<title>Skills network graph</title>
							{networkData.edges.map((edge) => {
								const from = networkData.nodes.find((node) => node.id === edge.from);
								const to = networkData.nodes.find((node) => node.id === edge.to);
								const isEdgeActive = edge.from === activeNodeId || edge.to === activeNodeId;
								if (!from || !to) {
									return null;
								}
								return (
									<line
										key={`${edge.from}-${edge.to}`}
										x1={from.x}
										y1={from.y}
										x2={to.x}
										y2={to.y}
										className={`skills-network__edge ${
											isEdgeActive ? "skills-network__edge--active" : ""
										}`}
									/>
								);
							})}
							{networkData.nodes.map((node) => {
								const isActive = node.id === activeNodeId;
								const isConnected = connectedNodes.has(node.id);
								return (
									<g
										key={node.id}
										className={`skills-network__node ${
											isConnected ? "skills-network__node--connected" : ""
										} ${isActive ? "skills-network__node--active" : ""}`}
										onClick={() => setActiveNodeId(node.id)}
										onKeyDown={(event) => {
											if (event.key === "Enter" || event.key === " ") {
												setActiveNodeId(node.id);
											}
										}}
										role="button"
										tabIndex={0}
										transform={`translate(${node.x} ${node.y})`}
									>
										<circle
											r={node.type === "core" ? 7 : node.type === "category" ? 3 : 1.8}
										/>
										<text dy={node.type === "core" ? "-9" : "-3.5"}>{node.label}</text>
									</g>
								);
							})}
						</svg>
					</div>
				)}
				{activeNodeId !== "core" && (
					<p className="skills-mindmap__hint mt-4">
						선택한 노드와 연결된 기술 아이콘이 함께 활성화됩니다.
					</p>
				)}
			</Container>
		</Fade>
	);
};

export default Skills;
