import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="shadow-md w-full bg-white dark:bg-raisin-black h-40 flex flex-col items-start justify-center max-w-5xl px-5 xl:max-w-7xl text-base mx-auto rounded-3xl">
			<div className=" w-full h-full  rounded-3xl flex items-center justify-between px-10">
				<div className="flex flex-col items-start opacity-70 max-w-[50%] lg:max-w-fit">
					<p>
						© 2024 Johan Romero.{" "}
						<span className="xs:hidden">Todos los derechos reservados</span>
					</p>
					<h3
						className="items-center gap-2 hidden lg:flex"
						alt="Tecnologías con las que se trabajo la pagina"
						title="Tecnologías usadas">
						Hecho con React & Tailwind
					</h3>
				</div>
				<div className="flex flex-col-reverse gap-3 items-end">
					<p
						className="opacity-70 hidden lg:flex"
						title="Ultima actualización"
						alt="Ultima actualización">
						Ultima actualización: 08 marzo de 2024
					</p>
					<div className="flex items-center gap-2 text-xl ">
						<a
							className="flex items-center font-medium hover:scale-[1.2] transition-transform duration-300 hover:text-red-600"
							href="mailto:johanarm95@gmail.com"
							title="Ir a Email"
							alt="Enviar Email">
							<MdAlternateEmail />
						</a>
						<a
							className="flex items-center font-medium hover:scale-[1.2] transition-transform duration-300 hover:text-blue-500"
							target="_blank"
							href="https://www.linkedin.com/in/JohanRomero95"
							title="Ir a LinkedIn"
							alt="Ir a LinkedIn">
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
