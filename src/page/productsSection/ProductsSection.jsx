import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dataProducts } from "../../data/dataProducts";
import GhostTitle from "../../components/ghostTitle/GhostTitle";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import styles from "./ProductsSection.module.css";
import openArrow from "../../assets/openArrow.png";
import ProductDetail from "../../components/productDetail/ProductDetail";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import "../../main.css";

export default function ProductsSection() {
	const initialProductsLimit = 13;
	const navigate = useNavigate();
	const [showProductDetail, setShowProductDetail] = useState(false);
	const [productsLimit, setProductsLimit] = useState(initialProductsLimit);

	const handleProductClick = (product) => {
		setShowProductDetail(true);
		navigate(`/producto/${encodeURIComponent(product.url)}`);
	};

	const handleProductsLimit = () => {
		setProductsLimit((prevLimit) =>
			prevLimit === initialProductsLimit
				? dataProducts.length
				: initialProductsLimit
		);
	};

	const closeProductDetail = () => {
		setShowProductDetail(false);
	};

	return (
		<section
			id="productos"
			className={styles.products}>
			<GhostTitle content="Diseño que Impacta" />
			<SectionTitle content="Envases adaptados a tu marca" />
			<p className="primaryDesc">
				Descubre una gama única de envases que no solo protegen, sino que elevan
				la presencia de tu producto con diseño personalizado y calidad
				insuperable.
			</p>
			<div className={styles.productBox}>
				{dataProducts.slice(0, productsLimit).map((product, index) => (
					<div
						className={`${styles.product} ${
							index % 5 === 2 ? styles.large : ""
						}`}
						key={product.id}
						onClick={() => handleProductClick(product)}
						title={product.title}>
						{product.images[0]}
						<div className={styles.tag}>
							<p>Ver más</p>
							<img
								src={openArrow}
								alt="Ícono de flecha"
							/>
						</div>
					</div>
				))}
			</div>
			<div className={styles.seeMore}>
				<h3>Explorá nuestro catálogo completo de soluciones de envasado</h3>
				<PrimaryButton
					content={
						productsLimit !== dataProducts.length ? (
							<>Ver todos los productos</>
						) : (
							<>Ver menos productos</>
						)
					}
					onClick={handleProductsLimit}
					showArrow={false}
					darkMode={true}
				/>
			</div>
			<ProductDetail
				onClose={closeProductDetail}
				show={showProductDetail}
			/>
		</section>
	);
}
