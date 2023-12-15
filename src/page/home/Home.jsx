import styles from "./Home.module.css";
import headerImage from "../../assets/headerImage.png";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import "../../main.css";

export default function Home({ showMessage }) {
	const ajakaEmail = "contacto@ajakaenvases.com.ar";

	const handleEmailButton = () => {
		navigator.clipboard.writeText(ajakaEmail);
		showMessage("link-outline", "Email copiado", 5);
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			window.scrollTo({
				top: section.offsetTop,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className={styles.section}>
			<div className={styles.sectionTop}>
				<img
					src={headerImage}
					alt="Proceso de fabricación en Ajaka"
				/>
			</div>
			<div className={styles.sectionBottom}>
				<div className={styles.description}>
					<h1>
						La esencia de tu producto <br /> <span>reflejada</span> en cada
						envase
					</h1>
					<p className="primaryDesc">
						Con una sólida trayectoria, hemos construido nuestra experiencia a lo
						largo de 40 años, guiando cada uno de nuestros pasos desde el inicio
						de nuestra empresa.
					</p>
				</div>
				<div className={styles.cta}>
					<PrimaryButton
						content="Jerarquizá tu marca"
						onClick={() => scrollToSection("productos")}
						darkMode={true}
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
		</section>
	);
}
