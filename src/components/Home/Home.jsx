import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import ubication from "../../../public/images/santiago.webp";
import face from "../../../public/images/me.webp";
import Avatar from "/public/images/memoji.webp";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import Technologies from "../Technologies/Technologies";
import Header from "../Header/Header";
import FreeWork from "../Button/FreeWork";
import ProjectsComponent from "../Projects/Projects";
import "animate.css";

const Home = () => {
	return (
		<div className="font-outfit w-full bg-moonlit select-none text-midnight flex flex-col items-center subpixel-antialiased dark:bg-dusky dark:text-noon scroll-smooth gap-5 lg:gap-10">
			<div className="w-full flex items-center justify-center mt-16 lg:mt-[3rem] fixed z-20 "></div>
			<div className="bg-moonlit dark:bg-dusky w-full flex min-h-screen flex-col items-center justify-between mx-80 my-4 ">
				<Nav />
				<main className="w-full flex flex-col gap-10 items-center max-w-5xl px-5 xl:max-w-7xl pt-[4.5rem] st-current dark:bg-dusky">
					<section className="w-full grid auto-rows-[192px] grid-cols-6 gap-4">
						{/* BLOQUE IMAGEN */}
						<div className="shadow-md row-span-2 col-span-6 rounded-3xl bg-blue-200 relative flex flex-col overflow-hidden gap-10 justify-end p-6 dark:bg-raisin-black xl:col-span-4 lg:items-end sm:flex-row  lg:p-10">
							<img
								className="absolute h-full object-contain right-[4.2rem] top-28 scale-x-[1.55]  scale-150 overflow-hidden"
								src={face}
								title="Imagen usuario"
								alt="Imagen usuario"
							/>
							<div className="absolute bg-gradient-to-t from-dusky-alt  to-transparent top-0 left-0 bottom-0 right-0 z-[2]"></div>
							<div className="w-full flex flex-col z-[2] absolute left-0 bottom-0 leading-4 p-5 text-moonlit">
								<h1
									className="text-3xl font-bold leading-7"
									title="Portfolio de desarrollador front-end Johan Romero"
									alt="Nombre programador front-end">
									Johan Romero <span className="xxs:hidden">Mendez</span>
								</h1>
								<h1
									className="text-lg font-semibold leading-9"
									title="Cargo del desarrollador "
									alt="Especialidad desarrollador front-end">
									Front-end Developer
								</h1>
								<div className="flex flex-wrap items-center gap-3 mt-1  lg:gap-4">
									<a
										href="https://github.com/JohanRomero95"
										title="Ir a GitHub"
										alt="Boton para acceder a GitHub"
										target="_blank"
										className="shadow-md flex items-center font-medium bg-moonlit px-3 py-2 rounded-lg text-dusky gap-2 hover:scale-[1.1] transition-transform duration-300">
										<FaGithub />
										<p className="xxs:hidden"> GitHub</p>
									</a>
									<a
										href="https://www.linkedin.com/in/johanromero95"
										title="Ir a Linkedin"
										alt="Boton para acceder a Linkedin"
										target="_blank"
										className="shadow-md flex items-center font-medium bg-moonlit px-3 py-2 rounded-lg text-dusky gap-2 hover:scale-[1.1] transition-transform duration-300">
										<FaLinkedinIn />
										<p className="xxs:hidden">LinkedIn</p>
									</a>
									<a
										href="mailto:johanarm95@gmail.com"
										title="Ir a Email"
										alt="Boton para acceder a Email"
										className="shadow-md flex items-center font-medium bg-moonlit px-3 py-2 rounded-lg text-dusky gap-2 hover:scale-[1.1] transition-transform duration-300">
										<MdOutgoingMail />
										<p className="xxs:hidden">Email</p>
										{/* JohanARM95@gmail.com */}
									</a>
									<FreeWork />
								</div>
							</div>
						</div>

						{/* BLOQUE SOBRE MI */}
						<div className="shadow-md row-span-1 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden  border-transparent gap-2 p-6 dark:bg-raisin-black xl:col-span-2 lg:p-10">
							<p
								className="text-2xl font-semibold pt-1"
								title="Titulo sobre mi"
								alt="Informacion sobre el desarrollador">
								Sobre mi
							</p>
							<h2
								className="text-md opacity-70 font-normal"
								title="Descripcion del desarrollador"
								alt="Descripcion del desarrollador">
								Desarrollador web con experiencia en diseño, desarrollo y mantenimiento en
								aplicaciones front-end
							</h2>
						</div>

						{/* BLOQUE TIEMPO EXPERIENCIA */}
						<div className="shadow-md row-span-1 col-span-3 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 items-center justify-center dark:bg-raisin-black xl:col-span-1">
							<p
								className="text-7xl z-[1] font-bold flex items-center gap-1"
								title="Tiempo de experiencia"
								alt="Tiempo de experiencia">
								<span>+</span>
								<span>8</span>
							</p>
							<div className="opacity-10 absolute text-[6rem] top-[6.1rem] -right-[5px] sm:scale-150 sm:top-[4.7rem] sm:right-4">
								{/* md:left-[19.4rem] md:scale-x-125 md:scale-y-125 md:top-5 */}
								<GiProgression />
							</div>
							<p className="text-sm font-semibold max-w-fit opacity-70 text-center">
								Meses de experiencia
							</p>
						</div>

						{/* BLOQUE UBICACION MAPA */}
						<div className="shadow-md row-span-1 col-span-3 rounded-3xl bg-white dark:bg-raisin-black overflow-hidden border-2 border-transparent xl:col-span-1 flex items-center justify-center relative">
							<img
								src={ubication}
								className="absolute w-full object-center scale-[1.3] z-[1] xs:scale-[1.9] right-2"
								// sm:-top-64
								title="Ubicacion donde radica el Desarrollador"
								alt="El desarrollador esta ubicado en Santiago, Chile"
							/>
							<img
								src={Avatar}
								className="absolute z-[2] w-14"
								title="Memoji Desarrollador"
								alt="Memoji del desarrollador"
							/>
							<div className="w-24 h-24 bg-[#98d0ff] absolute z-[1] rounded-full bg-opacity-40 border-2 border-white animate__animated animate__pulse animate__infinite infinite animate__fast"></div>
							<div className="w-full h-7 backdrop-blur-sm absolute left-0 bottom-0 z-[2] flex items-center justify-center text-left text-opacity-70">
								<span
									className="text-xs font-medium dark:text-dusky"
									title="Ubicacion donde radica el Desarrollador"
									alt="El desarrollador esta ubicado en Santiago, Chile">
									Santiago, CL
								</span>
								<span
									className="text-[10px] font-medium px-1 dark:text-dusky"
									title="Ubicacion donde radica el Desarrollador"
									alt="El desarrollador esta ubicado en Santiago, Chile">
									CHILE
								</span>
							</div>
						</div>
					</section>
					{/* <Header title="Experiencias" description="" /> */}
					<Header title="Proyectos" description="Algunos proyectos en los que he trabajado." />
					<ProjectsComponent />
					<Header
						title="Tecnologias"
						description="Estas son algunas de las tecnologías con las que he trabajado:"
					/>
					<Technologies />
					<Footer />
				</main>
			</div>
		</div>
	);
};

export default Home;
