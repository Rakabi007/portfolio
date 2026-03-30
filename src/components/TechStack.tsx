import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";

const row1 = [
  { name: "Python", icon: "/images/python.svg" },
  { name: "FastAPI", icon: "/images/fastapi.svg" },
  { name: "AWS EC2", icon: "/images/aws.svg" },
  { name: "Docker", icon: "/images/docker.svg" },
  { name: "PostgreSQL", icon: "/images/postgresql.svg" },
  { name: "Python", icon: "/images/python.svg" },
  { name: "FastAPI", icon: "/images/fastapi.svg" },
  { name: "AWS EC2", icon: "/images/aws.svg" },
];

const row2 = [
  { name: "LLM", icon: "/images/openai.svg" },
  { name: "Vector DB", icon: "/images/chromadb.svg" },
  { name: "RAG", icon: "/images/langchain.svg" },
  { name: "Neo4j", icon: "/images/neo4j.svg" },
  { name: "Text-to-SQL", icon: "/images/postgresql.svg" },
  { name: "LLM", icon: "/images/openai.svg" },
  { name: "Vector DB", icon: "/images/chromadb.svg" },
  { name: "RAG", icon: "/images/langchain.svg" },
];

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document.getElementById("work")?.getBoundingClientRect().top || 0;
      setIsActive(scrollY > threshold - 500);
    };

    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => clearInterval(interval), 1000);
      });
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="techstack-modern" id="techstack">
      <div className="techstack-header">
        <h2>My Tech Stack</h2>
        <p>A specialized toolkit for building scalable AI products and high-performance backends.</p>
      </div>

      <div className={`techstack-marquees ${isActive ? "active" : ""}`}>
        <Marquee gradient={false} speed={40} pauseOnHover={true} direction="left">
          {row1.map((tech, i) => (
            <div className="tech-pill" key={i}>
              <img src={tech.icon} alt={tech.name} className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </Marquee>

        <Marquee gradient={false} speed={30} pauseOnHover={true} direction="right">
          {row2.map((tech, i) => (
            <div className="tech-pill" key={i}>
              <img src={tech.icon} alt={tech.name} className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
