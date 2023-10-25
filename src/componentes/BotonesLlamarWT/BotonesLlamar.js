import React from "react";
import styles from "./botonesLlamar.module.css";

const BotonesLlamar = ({ ciudad }) => {
  return (
    <div className={styles.contenedorBotones}>
      <a
        className={styles.botonLlamar}
        href={`tel:${ciudad?.acf?.telefono}`}
        title={`Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`}
      >
        LLAMA GRATIS
      </a>
      <a
        title={`Escribir WhatsApp a Quickgold ${ciudad?.acf?.ciudad_landing}`}
        className={styles.botonWhatsapp}
        target="_blank"
        href={`https://wa.me/+34${ciudad?.acf?.mobile?.replace(/\s+/g, "")}`}
      >
        WHATSAPP
      </a>
    </div>
  );
};

export default BotonesLlamar;
