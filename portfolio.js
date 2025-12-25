import emoji from "react-easy-emoji";

export const greetings = {
	name: "Dongwook Shin",
	title: "안녕하세요. 신동욱입니다. 🖐",
	description:
		"풀스택 개발자를 꿈꾸고 있으며, Java / Spring / Spring Boot / Javascript / Reactjs / Mysql / MariaDB / Oracle과 같은 언어, 프레임워크 등을 다룰 수 있으며, 다양한 라이브러리를 경험했습니다."
};

export const openSource = {
	githubUserName: "boy331990",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/boy331990"
};

export const skillsSection = {
	title: "보유 기술",
	subTitle:
		"다방면에 활용 가능한 풀스택 개발자",
	mindmap: {
		core: "풀스택 개발",
		nodes: [
			{
				title: "Backend",
				items: ["Java", "Spring Boot", "REST API"],
				position: "top-left",
			},
			{
				title: "Frontend",
				items: ["React", "Next.js", "UX"],
				position: "top-right",
			},
			{
				title: "Data",
				items: ["MySQL", "Oracle", "SQL 튜닝"],
				position: "right",
			},
			{
				title: "DevOps",
				items: ["CI/CD", "Docker", "모니터링"],
				position: "bottom-right",
			},
			{
				title: "Cloud/IoT",
				items: ["AWS", "IoT 연동", "서버리스"],
				position: "bottom-left",
			},
			{
				title: "협업",
				items: ["Git", "코드리뷰", "문서화"],
				position: "left",
			},
		],
	},
	skills: [
		emoji(
			"⚡ Spring, Spring Boot, 전자정부 프레임워크 기반 웹 어플리케이션 개발에 특화"
		),
		emoji(
			"⚡ Backend뿐만 아니라 Frontend 프레임워크, 라이브러리를 통한 웹 어플리케이션 개발 가능"
		),
		emoji(
			"⚡ AWS 서비스 및 IoT 개발과 같은 차별화된 능력 및 경험 보유"
		),
	],

	softwareSkills: [
		{
			skillName: "java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "spring",
			fontAwesomeClassname: "logos:spring-icon",
		},
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Harvard University",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2017 - April 2019",
		desc: "Participated in the research of XXX and published 3 papers.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Harvard",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2017 - April 2019",
		desc: "Participated in the research of XXX and published 3 papers.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Stanford University",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "September 2013 - April 2017",
		desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
		descBullets: [
			"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Google",
		companylogo: "/img/icons/common/google.svg",
		date: "June 2018 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Front-End Developer",
		company: "Github",
		companylogo: "/img/icons/common/github.svg",
		date: "May 2017 – May 2018",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Software Engineer Intern",
		company: "Airbnb",
		companylogo: "/img/icons/common/airbnbLogo.png",
		date: "Jan 2015 – Sep 2015",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
