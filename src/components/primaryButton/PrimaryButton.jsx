import React from "react";
import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({
	content,
	onClick,
	showArrow = true,
	darkMode = false,
}) {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<button
			className={`${styles.primaryButton} ${darkMode ? styles.darkMode : ""}`}
			onClick={handleClick}>
			<span>{content}</span>
			{showArrow && <ion-icon name="arrow-forward-outline"></ion-icon>}
		</button>
	);
}
