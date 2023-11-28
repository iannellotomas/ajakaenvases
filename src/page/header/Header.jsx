import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logoImagotipo from "../../assets/LogoImagotipo.png";

export default function Header() {
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isHeaderScrolled ? styles.headerScrolled : ""
      }`}
    >
      <a href="#" className={styles.logo}>
        <img src={logoImagotipo} alt="Logo de Ajaka Envases" />
      </a>
      <div className={styles.links}>
        <a href="#asesoria">Asesoría</a>
        <span></span>
        <a href="#beneficios">Beneficios</a>
        <span></span>
        <a href="#">Productos</a>
        <span></span>
        <a href="#fabricacion">Fabricación</a>
      </div>
      <a href="#contacto" className={styles.contactButton}>
        <ion-icon name="chatbubbles-outline"></ion-icon>
        <span>Contáctanos</span>
      </a>
    </header>
  );
}
