import React from 'react';
import {getImageUrl} from "../../utils";
import styles from "./Foot.module.css"
export const Foot = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>

        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("Foot/emailIcon.png")} alt="email image" />
                <a href="mailto:gtejomai@gmail.com">gtejomai@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("Foot/linkedinIcon.png")} alt="linkdin image" />
                <a href="https://www.linkedin.com/in/tejomai-gouru-0630b7217/">linkdin.com/tejomai</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("Foot/githubIcon.png")} alt="github image" />
                <a href="https://www.github.com/tejomai3">github.com/tejomai</a>
            </li>
        </ul>

    </footer>
  );
};

export default Foot
