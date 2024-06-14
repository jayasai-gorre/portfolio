import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="HTML"/>
           <SkillList src={checkMarkIcon} skill="CSS"/>
           <SkillList src={checkMarkIcon} skill="JavaScript"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="MongoDB"/>
           <SkillList src={checkMarkIcon} skill="Express"/>
           <SkillList src={checkMarkIcon} skill="React"/>
           <SkillList src={checkMarkIcon} skill="Redux"/>
           <SkillList src={checkMarkIcon} skill="Node"/>
           <SkillList src={checkMarkIcon} skill="MySQL"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="TailWind CSS"/>
           <SkillList src={checkMarkIcon} skill="BootStrap"/>
           <SkillList src={checkMarkIcon} skill="Daisy UI"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="Git"/>
           <SkillList src={checkMarkIcon} skill="GitHub"/>
        </div>      
    </section>
  )
}

export default Skills