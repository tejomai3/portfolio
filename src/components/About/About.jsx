import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
        src={getImageUrl("about/aboutImage.png")} 
        alt="unavailable"
        className={styles.aboutImage} />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} 
          alt="unavailable" />
          <div className={styles.aboutItemText}>
            <h3>Frontend developer</h3>
            <p>I'm a frontend developer.I have developed a livestock website for acicand also wored on several other projects. </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="unavailable" />
          <div className={styles.aboutItemText} >
            <h3>Backend Developer</h3>
            <p>I have experience in developing fast and optimized Back-end systems and API's </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="unavailable" />
          <div className={styles.aboutItemText}>
            <h3>Data structures and algorithms</h3>
            <p>problem solving and logical thinking</p>
          </div>
        </li>
      </ul>
      </div>
    </section>
    
  )
}

export default About
