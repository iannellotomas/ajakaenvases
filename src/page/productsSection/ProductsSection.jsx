// ProductsSection.jsx
import React, { useState } from "react";
import { dataProducts } from "../../data/dataProducts";
import GhostTitle from "../../components/ghostTitle/GhostTitle";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import styles from "./ProductsSection.module.css";
import openArrow from "../../assets/openArrow.png";
import ProductDetail from "../../components/productDetail/ProductDetail";
import "../../main.css";

export default function ProductsSection() {
  const productLimit = 17;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetail, setShowProductDetail] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  const closeProductDetail = () => {
    setShowProductDetail(false);
  };

  return (
    <section id="productos" className={styles.products}>
      <GhostTitle content="Diseño que Impacta" />
      <SectionTitle content="Envases adaptados a tu marca" />
      <p className="primaryDesc">
      Descubre una gama única de envases que no solo protegen, sino que elevan la presencia de tu producto con diseño personalizado y calidad insuperable.
      </p>
      <div className={styles.productBox}>
        {dataProducts.slice(0, 30).map((product, index) => (
          <div
            className={`${styles.product} ${
              index % 5 === 2 ? styles.large : ""
            }`}
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            {product.images[0]}
            <div className={styles.tag}>
              <p>Ver más</p>
              <img src={openArrow} alt="Ícono de flecha" />
            </div>
          </div>
        ))}
      </div>
      <ProductDetail
        product={selectedProduct}
        onClose={closeProductDetail}
        show={showProductDetail}
      />
    </section>
  );
}