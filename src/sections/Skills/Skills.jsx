import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

const Skills = () => { 
   const { theme } = useTheme();
   const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

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
           <SkillList src={checkMarkIcon} skill="Docker"/>
           <SkillList src={checkMarkIcon} skill="Kubernetes"/>
        </div>      
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="Windows"/>
           <SkillList src={checkMarkIcon} skill="Linux"/>
           <SkillList src={checkMarkIcon} skill="MacOs"/>
        </div>      
    </section>
  )
}

export default Skills