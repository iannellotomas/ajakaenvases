import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import logoImagotipo from "../../assets/LogoImagotipo.png";

export default function Header() {
	const [isNavScrolled, setNavScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setNavScrolled(true);
		} else {
			setNavScrolled(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			window.scrollTo({
				top: section.offsetTop,
				behavior: "smooth",
			});
		}
		setIsOpen(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={`${styles.nav} ${isNavScrolled ? styles.scrolled : ""}`}>
			<div className={styles.logo}>
				<Link
					to="#"
					onClick={scrollToTop}>
					<img
						src={logoImagotipo}
						alt="Logo de Ajaka Envases"
					/>
				</Link>
			</div>
			<div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
				<Link
					to="#"
					className={styles.link}
					onClick={() => scrollToSection("asesoria")}>
					Asesoría
				</Link>
				<span></span>
				<Link
					to="#"
					className={styles.link}
					onClick={() => scrollToSection("beneficios")}>
					Beneficios
				</Link>
				<span></span>
				<Link
					to="#"
					className={styles.link}
					onClick={() => scrollToSection("productos")}>
					Productos
				</Link>
				<span></span>
				<Link
					to="#"
					className={styles.link}
					onClick={() => scrollToSection("fabricacion")}>
					Fabricación
				</Link>
			</div>
			<div className={styles.navRight}>
				<Link
					to="#"
					className={styles.contactButton}
					onClick={() => scrollToSection("contacto")}>
					<ion-icon name="chatbox-ellipses-outline"></ion-icon>
					<span>Contáctanos</span>
				</Link>
				<button
					className={`${styles.buttonMenu} ${
						isOpen ? styles.buttonMenuClose : ""
					}`}
					onClick={handleMenu}
					title={isOpen ? "Ocultar menú" : "Desplegar menú"}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
			<div
				className={`${styles.backgroundMenu} ${
					isOpen ? styles.active : ""
				}`}></div>
		</nav>
	);
}
