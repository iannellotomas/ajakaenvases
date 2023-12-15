import React, { useState } from "react";
import Nav from "../nav/Nav";
import Advisory from "../advisory/Advisory";
import Benefits from "../benefits/Benefits";
import ProductsSection from "../productsSection/ProductsSection";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Making from "../making/Making";
import WhatsappButton from "../../components/whatsappButton/WhatsappButton";
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
			<Nav />
			<Home showMessage={showMessage} />
			<Advisory />
			<Benefits />
			<ProductsSection />
			<Making />
			<Contact showMessage={showMessage} />
			<WhatsappButton />
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
