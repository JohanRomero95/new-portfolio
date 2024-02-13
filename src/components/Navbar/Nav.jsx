import { useEffect, useState } from "react";
import { MdTranslate, MdDarkMode } from "react-icons/md";
import { VscCloudDownload } from "react-icons/vsc";
import { IoSunny } from "react-icons/io5";
import "animate.css";

const Header = () => {
	const [theme, setTheme] = useState(() => {
		if (window.matchMedia("prefers-color-scheme: dark").matches) {
			return "dark";
		}
		return "light";
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleSystemThemeChange = (event) => {
			setTheme(event.matches ? "dark" : "light");
		};

		darkModeMediaQuery.addListener(handleSystemThemeChange);
		setTheme(darkModeMediaQuery.matches ? "dark" : "light");

		return () => {
			darkModeMediaQuery.removeListener(handleSystemThemeChange);
		};
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<header className="w-full overflow-x-hidden h-[5rem] flex justify-center dark:bg-dusky bg-opacity-70 dark:bg-opacity-70 fixed top-0 left-0 z-10 backdrop-blur-lg subpixel-antialiased">
			<nav className="w-full h-full flex items-center justify-between py-1 px- max-w-5xl xl:max-w-7xl px-5">
				<div className="w-7 h-7 bg-dusky flex items-center justify-center dark:bg-moonlit p-4">
					<button
						onClick={scrollToTop}
						title="Logotipo del desarrollador"
						alt="Logo del desarrollador y botón subir a top pagina"
						className="text-moonlit text-md font-semibold dark:text-dusky">
						JR
					</button>
				</div>
				<div className="flex items-center gap-4 ">
					<button className="text-xl" title="Cambiar idioma" alt="Cambiar idioma">
						<MdTranslate />
					</button>
					<button
						className={`text-2xl transition-all ${
							theme === "dark"
								? "animate__animated animate__rotateIn"
								: "animate__animated animate__slideInDown"
						}`}
						onClick={handleChangeTheme}
						title="Botón para cambiar modo"
						alt="Modo oscuro o claro">
						{theme === "dark" ? <IoSunny className="text-orange-400" /> : <MdDarkMode />}
					</button>

					<a
						href="https://drive.google.com/file/d/1k2C7ZTtb-EbeJRsKjL4dLYIT9-yoc8R5/view?usp=drive_link"
						target="_blank"
						title="CV del Desarrollador"
						alt="Botón para descargar o visualizar CV del Desarrollador"
						className="shadow-md w-auto h-7 px-4 font-medium flex items-center gap-2 bg-dusky text-moonlit rounded-3xl dark:text-dusky dark:bg-moonlit lg:h-10 lg:px-6 cursor-pointer hover:scale-[1.1] transition-all duration-300">
						<VscCloudDownload className="text-xl " />
						<span className="xxs:hidden">Download</span> CV
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
