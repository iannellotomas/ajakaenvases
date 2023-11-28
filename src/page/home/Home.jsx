import styles from "./Home.module.css";
import headerImage1 from "../../assets/Header1.png";
import headerImage2 from "../../assets/Header2.png";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import "../../main.css";

export default function Home({ showMessage }) {
	const ajakaEmail = "contacto@ajakaenvases.com.ar";
	
	const handleEmailButton = () => {
		navigator.clipboard.writeText(ajakaEmail);
		showMessage("link-outline", "Email copiado", 5);
	};

	return (
		<section className={styles.section}>
			<div className={styles.sectionLeft}>
				<div className={styles.description}>
					<h1>
						La esencia de tu <br /> producto <span>reflejada</span> <br /> en
						cada envase
					</h1>
					<p className="primaryDesc">
						Nuestra empresa fue fundada en 1980, y por ello contamos con una
						amplia trayectoria que nos respalda en cada paso que damos.
					</p>
				</div>
				<div className={styles.cta}>
					<PrimaryButton
						content="Jerarquizá tu marca"
						href="#asesoria"
					/>
					<span>
						<a
							href={`mailto:${ajakaEmail}`}
							title="Enviar email a Ajaka Envases"
							onClick={handleEmailButton}>
							<ion-icon name="mail-outline"></ion-icon>
						</a>
						<a
							href="tel:+5401146470477"
							title="Llamar a Ajaka Envases">
							<ion-icon name="call-outline"></ion-icon>
						</a>
					</span>
				</div>
			</div>
			<div className={styles.sectionRight}>
				<img
					src={headerImage1}
					alt="Proceso de fabricación en Ajaka"
				/>
				<img
					src={headerImage2}
					alt="Proceso de fabricación en Ajaka"
				/>
			</div>
		</section>
	);
}
