import emoji from "react-easy-emoji";

export const greetings = {
        name: "신동욱",
        title: "운영 안정성과 구조 개선에 강한 백엔드 개발자",
        description:
                "8년 동안 Java/Spring 기반 서비스의 구축과 운영을 함께 경험했습니다. 대규모 트래픽 대응, 캐싱 전략, 외부 의존성 제거, CI/CD, AWS 기반 운영까지 직접 다루며 오래 버티는 시스템을 만드는 데 집중해왔습니다.",
        resumeLink: "",
};

export const openSource = {
        githubUserName: "boy331990",
};

export const contact = {
        title: "함께 이야기해볼까요?",
        description:
                "백엔드 안정화, 운영 자동화, 구조 개선이 필요한 서비스라면 편하게 연락 주세요. 구현뿐 아니라 운영 환경에서 오래 버티는 구조를 함께 고민하는 편입니다.",
        location: "Uiwang, Gyeonggi-do",
        email: "boy331990@naver.com",
};

export const socialLinks = {
        github: "https://github.com/boy331990",
        email: "mailto:boy331990@naver.com",
};

export const skillsSection = {
        title: "Core Strengths",
        subTitle: "기능 구현보다 오래 버티는 구조를 먼저 고민합니다.",
        mindmap: {
                core: "Stable Backend Engineering",
                nodes: [
                        {
                                title: "Stability",
                                items: ["대규모 트래픽 대응", "장애 감지 체계", "무중단 전환"],
                                position: "top-left",
                        },
                        {
                                title: "Backend",
                                items: ["Java", "Spring Boot", "REST API 설계"],
                                position: "top-right",
                        },
                        {
                                title: "Data",
                                items: ["Oracle", "MySQL", "PostgreSQL"],
                                position: "right",
                        },
                        {
                                title: "Delivery",
                                items: ["Jenkins", "Docker", "Kubernetes"],
                                position: "bottom-right",
                        },
                        {
                                title: "Cloud & IoT",
                                items: ["AWS", "EKS", "ActiveMQ"],
                                position: "bottom-left",
                        },
                        {
                                title: "Collaboration",
                                items: ["Swagger", "Git 전략", "운영 커뮤니케이션"],
                                position: "left",
                        },
                ],
        },
        skills: [
                emoji("⚡ Java/Spring 기반 백엔드 개발과 운영 안정화에 강합니다."),
                emoji("⚡ REST API 전환, 문서화, 공통 모듈화로 유지보수 가능한 구조를 만드는 데 집중합니다."),
                emoji("⚡ Jenkins, Docker, Kubernetes, AWS를 활용해 배포 자동화와 운영 효율 개선을 직접 수행했습니다."),
        ],
        softwareSkills: [
                {
                        skillName: "java",
                        fontAwesomeClassname: "logos:java",
                },
                {
                        skillName: "spring-boot",
                        fontAwesomeClassname: "logos:spring-icon",
                },
                {
                        skillName: "javascript",
                        fontAwesomeClassname: "logos:javascript",
                },
                {
                        skillName: "typescript",
                        fontAwesomeClassname: "logos:typescript-icon",
                },
                {
                        skillName: "react",
                        fontAwesomeClassname: "vscode-icons:file-type-reactjs",
                },
                {
                        skillName: "mysql",
                        fontAwesomeClassname: "logos:mysql",
                },
                {
                        skillName: "postgresql",
                        fontAwesomeClassname: "logos:postgresql",
                },
                {
                        skillName: "aws",
                        fontAwesomeClassname: "logos:aws",
                },
                {
                        skillName: "docker",
                        fontAwesomeClassname: "logos:docker-icon",
                },
                {
                        skillName: "kubernetes",
                        fontAwesomeClassname: "logos:kubernetes",
                },
                {
                        skillName: "jenkins",
                        fontAwesomeClassname: "logos:jenkins",
                },
                {
                        skillName: "git",
                        fontAwesomeClassname: "logos:git-icon",
                },
        ],
};

export const SkillBars = [
        {
                Stack: "Service Stability",
                progressPercentage: "92",
        },
        {
                Stack: "Backend Architecture",
                progressPercentage: "90",
        },
        {
                Stack: "Cloud & Delivery",
                progressPercentage: "84",
        },
        {
                Stack: "Frontend Collaboration",
                progressPercentage: "72",
        },
];

export const educationInfo = [
        {
                schoolName: "홍익대학교",
                subHeader: "전자전기공학과",
                duration: "2010.03 - 2014.02",
                desc: "하드웨어와 통신에 대한 기본 이해를 바탕으로, 이후 웹 서비스와 운영 환경을 시스템 관점에서 바라보는 습관을 만들었습니다.",
                descBullets: [
                        "정보처리기사 취득 (2017.05)",
                        "육군 정보통신 장교 중위 만기전역 (2014.03 - 2016.06)",
                        "구조와 흐름을 먼저 이해한 뒤 구현으로 내려가는 접근을 선호합니다.",
                ],
        },
];

export const experience = [
        {
                role: "백엔드 개발 · 운영",
                company: "한진정보통신",
                date: "2024.06 - 현재",
                desc: "항공 운항통제와 대고객 서비스 운영을 맡으며, 높은 트래픽과 복합 배치 환경에서 서비스 연속성을 지키는 업무를 담당하고 있습니다.",
                descBullets: [
                        "AWS EKS 기반 운항통제 시스템의 무중단 전환과 Blue/Green 배포 전략 설계",
                        "45개 배치 작업 장애 감지 메일링 체계 구축 및 정기 배포 운영",
                        "분당 35만 건 요청 환경에서 캐싱 구조와 내부 단축 URL 서비스로 안정성 개선",
                ],
        },
        {
                role: "백엔드 개발 · 풀스택 협업",
                company: "인포인",
                date: "2018.02 - 2024.05",
                desc: "금융, IoT, 교육, 유통 등 다양한 도메인의 웹 서비스를 구축하며 설계, 개발, 배포, 운영까지 전 구간을 경험했습니다.",
                descBullets: [
                        "Servlet 기반 레거시 구조를 REST API 중심으로 전환하고 Swagger 문서화 체계 수립",
                        "Jenkins, Docker, Kubernetes 기반 CI/CD 파이프라인 구축",
                        "IoT 실시간 상태 처리, 키오스크, 교육 시스템 등 다양한 프로젝트에서 공통 구조와 표준화 경험 축적",
                ],
        },
];

export const projects = [
        {
                name: "진에어 대고객 홈페이지 운영",
                desc: "분당 35만 건 요청이 발생하는 환경에서 운임 조회 서비스 안정성을 운영했습니다. 반복 조회 데이터는 WAS 메모리 캐싱으로 전환해 DB 부하를 줄였고, AWS Lambda + DynamoDB 기반 내부 단축 URL 서비스를 구축해 외부 의존성을 제거했습니다.",
        },
        {
                name: "진에어 운항통제 시스템 운영",
                desc: "Spring Boot API 서버, 인터페이스 서버, React 프론트엔드, 배치 프로세스가 함께 움직이는 복합 시스템을 AWS EKS에서 운영했습니다. 45개 배치 장애 감지 체계를 만들고 Blue/Green 전략으로 무중단 전환 기반을 마련했습니다.",
        },
        {
                name: "진에어 UI/UX 개편 REST API 전환",
                desc: "Servlet 기반 레거시 구조를 도메인 중심의 REST API 구조로 재편했습니다. 서비스 레이어 재구성과 Swagger 문서화를 통해 프론트엔드 협업 효율을 높였고, 대규모 화면 개편 과정에서도 기존 기능 영향도를 관리했습니다.",
        },
        {
                name: "ESL 관리 시스템 백엔드 구축",
                desc: "Azure AD 기반 SSO 연동과 관리 API를 개발하고, Jenkins · Docker · Kubernetes 기반 CI/CD 파이프라인을 구축했습니다. 이후 컨테이너 기반 운영 역량으로 이어진 프로젝트였습니다.",
        },
];

export const feedbacks = [
        {
                name: "350k/min 트래픽 대응",
                feedback:
                        "이벤트 피크 구간에서 반복 조회 데이터를 캐싱 구조로 전환해 DB 부하를 줄이고 응답 안정성을 확보했습니다.",
        },
        {
                name: "외부 의존성 제거",
                feedback:
                        "외부 단축 URL 서비스 장애가 사용자 경험에 영향을 주지 않도록 AWS Lambda + DynamoDB 기반 내부 서비스를 설계해 통제권을 확보했습니다.",
        },
        {
                name: "무중단 전환 설계",
                feedback:
                        "EKS 버전 EOS 대응 과정에서 Blue/Green 전략과 롤백 시나리오를 준비해 핵심 서비스 다운타임 없이 전환을 마쳤습니다.",
        },
        {
                name: "운영 가시성 확보",
                feedback:
                        "45개 배치 작업에 실시간 장애 감지 메일링을 도입해 문제 인지 시간을 줄이고 즉각 대응 체계를 만들었습니다.",
        },
];
