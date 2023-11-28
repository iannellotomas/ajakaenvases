import styles from "./Advisory.module.css";
import ajakaLogo from "../../assets/Logo.png";

export default function Advisory() {
	return (
		<section id="asesoria" className={styles.advisory}>
      <div className={styles.advisoryTop}>
        <img src={ajakaLogo} alt="Logo de Ajaka Envases"/>
        <h2>Enfocados en tu producto</h2>
        <h3>creamos calidad que impacta</h3>
      </div>
      <div className={styles.advisoryBottom}>
        <div className={styles.advisoryItem}>
          <h4>Experiencia</h4>
          <p>Habiendo recorrido más de 30 años en la industria, somos líder de confianza en diseño y producción de
            envases.</p>
        </div>
        <div className={styles.advisoryItem}>
          <h4>Personalización</h4>
          <p>Adaptarnos a tu marca es nuestra pasión, asegurándonos de que cada packaging comunique tu esencia de manera
            excepcional.</p>
        </div>
        <div className={styles.advisoryItem}>
          <h4>Confianza</h4>
          <p>Mantenemos estrictos controles de calidad, respaldando cada pedido con atención posventa para garantizar tu
            satisfacción.</p>
        </div>
      </div>
    </section>
    
	);
}
