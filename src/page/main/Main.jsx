import React, { useState } from "react";
import Header from "../header/Header";
import Advisory from "../advisory/Advisory";
import Benefits from "../benefits/Benefits";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Making from "../making/Making";
import styles from "./Main.module.css";

export default function App() {
	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [messageContent, setMessageContent] = useState({
		icon: "",
		content: "",
		duration: 0,
	});

	const showMessage = (icon, content, duration) => {
		setMessageContent({
			icon,
			content,
			duration,
		});

		setIsMessageVisible(true);

		// Oculta el mensaje después de la duración especificada
		setTimeout(() => {
			setIsMessageVisible(false);
		}, duration * 1000);
	};

	return (
		<>
			<Header />
			<Home showMessage={showMessage} />
			<Advisory />
			<Benefits />
			<Making />
			<Contact showMessage={showMessage} />
			{/* Message */}
			<div
				className={`${styles.message} ${
					isMessageVisible ? styles.visible : ""
				}`}>
				<ion-icon name={messageContent.icon}></ion-icon>
				<p>{messageContent.content}</p>
			</div>
		</>
	);
}
