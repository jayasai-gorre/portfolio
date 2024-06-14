import styles from "../sections/Projects/ProjectsStyles.module.css";

const ProjectCard = ({ link, src, h3, p}) => {
  return (
    <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3} Logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
    </a>
  );
};

export default ProjectCard;
