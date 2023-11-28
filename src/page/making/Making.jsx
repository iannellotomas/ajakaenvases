import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Making.module.css";
import { dataMaking } from "../../data/dataMaking";
import makingImage from "../../assets/Making.png";
import "../../main.css";
import GhostTitle from "../../components/ghostTitle/ghostTitle";
import SectionTitle from "../../components/sectionTitle/sectionTitle";

export default function Making() {
	const [selectedMakingIndex, setSelectedMakingIndex] = useState(null); // Inicialmente, no hay ningún elemento seleccionado
	const [ref, inView] = useInView({
		triggerOnce: true,
		rootMargin: "0px 0px -100px 0px",
	}); // Ajusta el rootMargin según sea necesario
	const selectedItemDuration = 15; // Duración en segundos del ítem seleccionado

	const handleMakingItem = (index) => {
		setSelectedMakingIndex(index);
	};

	useEffect(() => {
		if (inView && selectedMakingIndex === null) {
			// Asigna el selectedMakingItem al primer elemento cuando entra en la sección
			setSelectedMakingIndex(1);
		}

		// Cambia automáticamente al siguiente ítem cada 20 segundos
		const intervalId = setInterval(() => {
			setSelectedMakingIndex((prevIndex) => {
				const nextIndex = (prevIndex % dataMaking.length) + 1;
				return nextIndex;
			});
		}, selectedItemDuration * 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [inView, selectedMakingIndex]);

	return (
		<section
			id="fabricacion"
			className={styles.making}
			ref={ref}>
			<GhostTitle content="De la Idea al Éxito" />
			<SectionTitle content="Diseño de packaging de primera clase" />
			<p className="primaryDesc">
				Construimos el producto desde tus propias necesidades, desarrollando no
				solo su estética y funcionalidad, sino también asegurando la mejor
				relación costo-beneficio posible.
			</p>
			<div className={styles.makingBox}>
				<div className={styles.makingLeft}>
					{dataMaking.map((making) => (
						<div
							className={`${styles.makingItem} ${
								selectedMakingIndex === making.id
									? styles.selectedMakingItem
									: ""
							}`}
							key={making.id}
							onClick={() => handleMakingItem(making.id)}>
							<span>
								<h4>0{making.id}</h4>
								<h3>{making.title}</h3>
                <ion-icon name="chevron-down-outline"></ion-icon>
							</span>
							<p>{making.description}</p>
						</div>
					))}
				</div>
				<div className={styles.makingRight}>
					<img
						src={makingImage}
						alt="Procesos de fabricación en Ajaka Envases"
					/>
				</div>
			</div>
		</section>
	);
}
