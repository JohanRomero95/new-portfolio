import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineMoodBad } from "react-icons/md";

const Button = () => {
	const [disponible, setDisponible] = useState(true);

	const handleCambio = () => {
		setDisponible(!disponible);
	};

	// probando
	return (
		<a
			href="https://www.linkedin.com/in/JohanRomero95"
			target="_blank"
			title="Disponibilidad para trabajar"
			alt="Nos muestra disponibilidad para trabajar"
			rel="noopener noreferrer"
			className={`xs:hidden shadow-md flex items-center font-medium px-3 py-2 rounded-lg text-white gap-2 hover:scale-[1.1] transition-transform duration-300 ${
				disponible ? "bg-green-800" : "bg-red-600"
			}`}>
			{disponible ? (
				<>
					<FaCheck /> Disponible para trabajar
				</>
			) : (
				<>
					<MdOutlineMoodBad />
					No disponible
				</>
			)}
		</a>
	);
};

export default Button;
