import React from "react";
import ProjectCard from "../../common/ProjectCard";
import nextDest from "../../assets/nextDest.jpg";
import chatApp from "../../assets/ChatApp.jpg"
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
          p={"Hotel Listing & Booking App"}
        />
        
        <ProjectCard
          link={"https://github.com/jayasai-gorre/ChatApp"} 
          src={chatApp}
          h3={"Chat App"}
          p={"Real-time Messaging Application"} 
        />
      </div>
    </section>
  );
};

export default Projects;

