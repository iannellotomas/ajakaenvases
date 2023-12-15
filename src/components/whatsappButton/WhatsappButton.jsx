import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
	const ajakaWhatsapp = "+541112345678";

	return (
		<a
			href={"https://api.whatsapp.com/send?phone=" + ajakaWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
			className={styles.whatsappButton}
      title="¡Hablemos por WhatsApp!">
			<ion-icon name="logo-whatsapp"></ion-icon>
		</a>
	);
}
