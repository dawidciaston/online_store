import React from "react";
import styles from "./styles.module.css";

const SocialImage = ({id, image, alt}) => (
    <img className={styles.socialImage} id={id} src={image} alt={alt}/>
);

export { SocialImage };
