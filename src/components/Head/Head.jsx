import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Head.module.css";
export const Head = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,This is Tejomai</h1>
        <p className={styles.description}>
          I am a full-stack developer.I have done projects using react and
          nodeJs.Reach out to know more!!
        </p>
        <a href="mailto:gtejomai@gmail.com" className={styles.contactbtn}>
          Mail me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="my image"
        className={styles.headImg}
      />
      <div className={styles.topblur}></div>
      <div className={styles.bottomblur}></div>
    </section>
  );
};

export default Head;
