import { useState } from "react";
import styles from "./Contact.module.css";
import "../../main.css";
import GhostTitle from "../../components/ghostTitle/GhostTitle";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";

export default function Contact({ showMessage }) {
	const ajakaLocation = "https://maps.app.goo.gl/x8CvcLjwNCucpRcG6";
	const ajakaPhone = "+54 11 4647-0077";
	const ajakaEmail = "contacto@ajakaenvases.com.ar";

	const [formValues, setFormValues] = useState({
		username: "",
		phoneNumber: "",
		email: "",
		message: "",
	});

	const handleFormSubmitted = (e) => {
		e.preventDefault();
		// Aquí deberías enviar el formulario, y si es exitoso, mostrar el mensaje
		showMessage("paper-plane-outline", "Recibimos tu mensaje", 5);

		// Después de enviar el formulario con éxito, restablecer los valores del formulario
		setFormValues({
			username: "",
			phoneNumber: "",
			email: "",
			message: "",
		});
	};

	const handleEmailButton = () => {
		navigator.clipboard.writeText(ajakaEmail);
		showMessage("link-outline", "Email copiado", 5);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	return (
		<section
			id="contacto"
			className={styles.contact}>
			<GhostTitle content="Queremos escucharte" />
			<SectionTitle content="Contáctanos para saber más" />
			<p className="primaryDesc">
				Estamos listos para escuchar tus ideas y trabajar con vos para crear
				soluciones de envases personalizadas que se adapten perfectamente a tus
				productos y objetivos.
			</p>
			<div className={styles.contactBox}>
				<div className={styles.contactOptions}>
					<span>
						<a
							href={ajakaLocation}
							target="_blank"
							className={styles.contactItem}
							title="Ver ubicación en Google Maps">
							<ion-icon name="location"></ion-icon>
							<p>Charcas 2348, Lomas del Mirador</p>
						</a>
						<a
							href={`tel:${ajakaPhone.replace(/[ -]/g, "")}`}
							className={styles.contactItem}
							title="Llamar por teléfono">
							<ion-icon name="call"></ion-icon>
							<p>{ajakaPhone}</p>
						</a>
					</span>
					<a
						href={`mailto:${ajakaEmail}`}
						className={styles.contactItem}
						onClick={handleEmailButton}
						title="Copiar email">
						<ion-icon name="mail"></ion-icon>
						<p>{ajakaEmail}</p>
					</a>
				</div>
				<form
					onSubmit={handleFormSubmitted}
					className={styles.contactForm}>
					<span>
						<input
							name="username"
							className={styles.textField}
							type="text"
							placeholder="Nombre completo*"
							maxLength="50"
							autoComplete="username"
							value={formValues.username}
							onChange={handleInputChange}
							required
						/>
						<input
							name="phoneNumber"
							className={styles.textField}
							type="tel"
							inputMode="tel"
							placeholder="Teléfono"
							maxLength="50"
							autoComplete="on"
							value={formValues.phoneNumber}
							onChange={handleInputChange}
						/>
					</span>
					<input
						name="email"
						className={styles.textField}
						type="email"
						inputMode="email"
						placeholder="Escribe tu email*"
						maxLength="50"
						autoComplete="on"
						value={formValues.email}
						onChange={handleInputChange}
						required
					/>
					<textarea
						name="message"
						className={styles.textField}
						cols="30"
						rows="10"
						placeholder="Déjanos tu mensaje*"
						maxLength="1000"
						autoComplete="on"
						value={formValues.message}
						onChange={handleInputChange}
						required></textarea>
					<PrimaryButton
						content="Enviar"
						showArrow={false}
					/>
				</form>
			</div>
		</section>
	);
}
