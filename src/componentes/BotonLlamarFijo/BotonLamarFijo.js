import React from "react";
import styles from "./botonLamarFijo.module.css";

const BotonLamarFijo = ({ciudad}) => {
  return (
    <div className={styles.botonLlamar}>
      <a  title={`Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`} href="tel:900373629">
        LLAMAR GRATIS
      </a>
    </div>
  );
};

export default BotonLamarFijo;
