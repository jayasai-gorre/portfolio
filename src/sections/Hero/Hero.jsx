import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Jaya Sai Gorre"
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>Jaya Sai <br /> Gorre</h1>
        <h2>Mern Stack Developer</h2>
        <span>
            <a href="https://twitter.com" target="_blank">
                <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/jayasai-gorre" target="_blank">
                <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com/in/jayasai-gorre" target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
        </span>

        <p className={styles.description} >With a passion for developing modern Mern Webistes and React apps.</p>

        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
