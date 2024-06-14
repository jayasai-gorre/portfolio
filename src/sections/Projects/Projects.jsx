import React from "react";
import ProjectCard from "../../common/ProjectCard";
import nextDest from "../../assets/nextDest.jpg";
import chatApp from "../../assets/ChatApp.jpg"
import news360 from "../../assets/news360.jpg"
import styles from './ProjectsStyles.module.css'

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link={"https://github.com/jayasai-gorre/NextDestination"}
          src={nextDest}
          h3={"Next Destination"}
          p={"Hotel Listing & Automatic Map Integration"}
        />
        
        <ProjectCard
          link={"https://github.com/jayasai-gorre/Mern-Chat-App"} 
          src={chatApp}
          h3={"Chat App"}
          p={"Real-time Messaging Application"} 
        />

        <ProjectCard
          link={"https://github.com/jayasai-gorre/News-Website"} 
          src={news360}
          h3={"News-Wesite"}
          p={"Real-time News Fetcher"} 
        />
      </div>
    </section>
  );
};

export default Projects;

