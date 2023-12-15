import styles from "./Benefits.module.css";
import { dataBenefits } from "../../data/dataBenefits";
import "../../main.css";

export default function Benefits() {
	// Add strong for words between **
  const formatTitle = (title) => {
		return title
			.split("*")
			.map((part, index) =>
				index % 2 === 0 ? (
					<span key={index}>{part}</span>
				) : (
					<strong key={index}>{part}</strong>
				)
			);
	};

	return (
		<section
			id="beneficios"
			className={styles.benefits}>
			{dataBenefits.map((benefit) => (
				<div
					className={styles.benefitsItem}
					key={benefit.id}>
					<span data-aos="zoom-in-up">{benefit.image}</span>
					<span>
						<h2>{formatTitle(benefit.title)}</h2>
						<p className="primaryDesc">{benefit.description}</p>
					</span>
				</div>
			))}
		</section>
	);
}
