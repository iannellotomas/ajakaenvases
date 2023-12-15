import React, { useState, useEffect } from "react";
import styles from "./ProductDetail.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { dataProducts } from "../../data/dataProducts";
import ajakaLogo from "../../assets/LogoImagotipo.png";

export default function ProductDetail({ onClose, show }) {
	const { productName } = useParams();
	const navigate = useNavigate();
	const [activeIndex, setActiveIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState(null);
	const handleSecondaryPhotoClick = (index) => {
		setActiveIndex(index);
	};

	useEffect(() => {
		const foundProduct = dataProducts.find(
			(product) => encodeURIComponent(product.url) === productName
		);

		setProduct(foundProduct);
		setActiveIndex(0);
		setLoading(true);

		const timerId = setTimeout(() => {
			setLoading(false);
		}, 300);

		return () => {
			clearTimeout(timerId);
		};
	}, [productName]);

	useEffect(() => {
		if (show) {
			document.body.classList.add("modalOpen");
		} else {
			document.body.classList.remove("modalOpen");
		}

		const timerId = setTimeout(() => {
			setLoading(false);
		}, 300);

		return () => {
			clearTimeout(timerId);
		};
	}, [show, productName]);

	if (!product) {
		return null;
	}

	const handleGoBack = () => {
		if (onClose) {
			onClose();
		} else {
			// Si onClose no está definido, navega a la ruta principal
			navigate(-1);
		}
	};

	return (
		<section className={`${styles.productDetail} ${show ? styles.show : ""}`}>
			<div className={styles.container}>
				<div className={styles.header}>
					<Link
						to="/"
						className={styles.logo}>
						<img
							src={ajakaLogo}
							alt="Logo de Ajaka Envases"
						/>
					</Link>
					<button
						onClick={handleGoBack}
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
