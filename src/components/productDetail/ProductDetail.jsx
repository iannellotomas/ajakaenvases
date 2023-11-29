import React, { useState, useEffect } from "react";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({ product, onClose, show }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [loading, setLoading] = useState(true);

	const handleSecondaryPhotoClick = (index) => {
		setActiveIndex(index);
	};

	useEffect(() => {
		setActiveIndex(0);
		setLoading(true);

		if (show) {
			document.body.classList.add("modalOpen");
		} else {
			document.body.classList.remove("modalOpen");
		}

		const timerId = setTimeout(() => {
			console.log("loading", loading);
			setLoading(false);
		}, 300);

		return () => {
			clearTimeout(timerId);
		};
	}, [show]); // Add loading as a dependency

	if (!product) {
		return null;
	}

	return (
		<section className={`${styles.productDetail} ${show ? styles.show : ""}`}>
			<div className={styles.container}>
				<div className={styles.header}>
					<button
						onClick={onClose}
						title="Volver atrás"
						aria-label="Volver atrás">
						<ion-icon name="arrow-back-outline"></ion-icon>
					</button>
					<h2>{product.title}</h2>
				</div>
				<div className={styles.center}>
					{product.images.map((image, index) => (
						<div
							className={`${styles.mainPhoto} ${
								index === activeIndex ? styles.active : ""
							}`}
							key={index}>
							<div
								className={`${styles.skeleton} ${loading ? styles.active : ""}`}
							/>
							{image}
						</div>
					))}
				</div>
				<div className={styles.controls}>
					{product.images.length > 1 &&
						product.images.map((image, index) => (
							<React.Fragment key={index}>
								<div
									className={`${styles.secondaryPhoto} ${
										index === activeIndex ? styles.active : ""
									}`}
									onClick={() => handleSecondaryPhotoClick(index)}
									title={`${index !== activeIndex ? "Ver foto" : ""}`}
									aria-label="Ver foto">
									<div
										className={`${styles.skeleton} ${
											loading ? styles.active : ""
										}`}
									/>
									{image}
								</div>
								{index !== product.images.length - 1 && <span></span>}
							</React.Fragment>
						))}
				</div>
			</div>
		</section>
	);
}
