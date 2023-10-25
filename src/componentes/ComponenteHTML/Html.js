import React from "react";
import styles from "./html.module.css";

const Html = ({ ciudad }) => {
  return (
    <section
      className={styles.contenedorHtml}
      dangerouslySetInnerHTML={{ __html: ciudad?.acf?.html }}
    ></section>
  );
};

export default Html;
