import dynamic from "next/dynamic";
import PropTypes from "prop-types";

const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
        import("../components/GithubProfileCard")
);

import { greetings, openSource } from "../portfolio";
import SEO from "../components/SEO";

const fallbackGithubProfile = {
        avatar_url: "https://avatars.githubusercontent.com/u/25545298?v=4",
        bio: greetings.description,
        location: "Uiwang, Gyeonggi-do",
};

export default function Home({ githubProfileData }) {
        return (
                <div>
                        <SEO
                                data={{
                                        title: "신동욱 | 안정성과 구조 개선을 설계하는 백엔드 개발자",
                                        description:
                                                "Java/Spring 기반 백엔드 개발과 서비스 운영 안정화 경험을 바탕으로, 대규모 트래픽 대응과 구조 개선에 집중해온 신동욱의 포트폴리오입니다.",
                                        image: fallbackGithubProfile.avatar_url,
                                        url: "https://boy331990.github.io/",
                                        keywords: [
                                                "신동욱",
                                                "백엔드 개발자",
                                                "Java",
                                                "Spring Boot",
                                                "서비스 운영",
                                                "구조 개선",
                                                "CI/CD",
                                                "AWS",
                                                "EKS",
                                                "포트폴리오",
                                        ],
                                }}
                        />
                        <Navigation />
                        <Greetings />
                        <Skills />
                        <Proficiency />
                        <Experience />
                        <Projects />
                        <Feedbacks />
                        <Education />
                        <GithubProfileCard prof={githubProfileData} />
                </div>
        );
}

Home.propTypes = {
        githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps() {
        try {
                const githubProfileData = await fetch(
                        `https://api.github.com/users/${openSource.githubUserName}`
                ).then((res) => res.json());

                return {
                        props: { githubProfileData },
                };
        } catch (error) {
                return {
                        props: { githubProfileData: fallbackGithubProfile },
                };
        }
}
