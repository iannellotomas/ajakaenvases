import benefit1 from "../assets/Benefits1.png";
import benefit2 from "../assets/Benefits2.png";
import benefit3 from "../assets/Benefits3.png";
import benefit4 from "../assets/Benefits4.png";

export const dataBenefits = [
	{
		id: 1,
		title: "Creatividad a la *medida*",
		description:
			"Nuestro equipo se sumerge en la esencia de tu producto para crear diseños de envases personalizados y únicos. Cada diseño refleja tu marca y maximiza el impacto visual en el mercado.",
		image: (
			<img
				src={benefit1}
				alt="Creatividad a la medida"
			/>
		),
	},
	{
		id: 2,
		title: "Calidad que se *siente*",
		description:
			"Desde la selección de materiales hasta los procesos de fabricación, garantizamos envases que cumplen con los más altos estándares. Tu producto merece envases que lo protejan con elegancia.",
		image: (
			<img
				src={benefit2}
				alt="Calidad que se siente"
			/>
		),
	},
	{
		id: 3,
		title: "Cuidado al *detalle*",
		description:
			"Nuestro control de calidad minucioso asegura que cada envase cumpla con precisión y excelencia. Cada detalle importa, y trabajamos para que tus productos lleguen a manos de tus clientes en su mejor presentación.",
		image: (
			<img
				src={benefit3}
				alt="Cuidado al detalle"
			/>
		),
	},
	{
		id: 4,
		title: "Tu socio *estratégico*",
		description:
			"Nuestro equipo de expertos te guía a través de decisiones clave en el diseño, producción y presentación de tus envases. Aprovecha nuestra experiencia para lograr un impacto máximo en el mercado.",
		image: (
			<img
				src={benefit4}
				alt="Tu socio estratégico"
			/>
		),
	},
];
