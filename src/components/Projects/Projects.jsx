import React from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "swiper/css";
import { Projects } from "../../utils/Projects";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectsComponent = () => {
	return (
		<Swiper
			className="breakpoint w-full min-h-[545px] -mb-8 grid auto-rows-[500px] grid-cols-8 gap-4 "
			loop={true}
			centeredSlides={false}
			grabCursor={true}
			breakpoints={{
				0: {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				468: {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				1024: {
					spaceBetween: 15,
					slidesPerView: 3,
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 4,
				},
			}}>
			{Projects.map((project) => (
				<SwiperSlide
					key={project.id}
					className=" shadow-xl hover:shadow-gray-400 dark:hover:shadow-gray-900 row-span-1 col-span-8 lg:row-span-2 lg:col-span-2 bg-white dark:bg-raisin-black rounded-3xl overflow-hidden relative flex flex-col py-14 items-center justify-between">
					<div className="flex flex-col items-center ">
						<img
							loading="lazy"
							src={project.company_logo}
							alt={project.name}
							title={project.name}
							className={`w-48 h-10 z-[1]  ${
								project.name === "Huddle"
									? "invert hue-rotate-180 w-[11rem] mb-3 h-[28px]"
									: ""
							} ${
								project.name === "trendElite"
									? "invert hue-rotate-[165deg] w-[14rem] -mt-[5px] mb-[3px] ml-6 h-[42px]"
									: ""
							}
              ${project.name === "Pokedex" ? "  mb-2 scale-125 -mt-2" : ""}`}
						/>
						<h1
							className="text-center text-moonlit leading-5 mt-2 z-[1]"
							alt={project.name}
							title={project.type}>
							{project.type}
						</h1>
					</div>
					<div className="flex gap-2 lg:gap-5 ">
						{project.url_site ? (
							<a
								href={project.url_site}
								target="_blank"
								title={`Ir a ${project.name}`}
								alt={`Ir a ${project.name}`}
								className="shadow-md  flex items-center justify-center gap-2 px-4 py-2 bg-[#0568fe] text-white rounded-xl text-sm z-[1] hover:scale-[1.1] transition-all">
								Visualizar
								<span>
									<FaExternalLinkAlt className="opacity-70" />
								</span>
							</a>
						) : (
							""
						)}
						{project.url_code ? (
							<a
								href={project.url_code}
								target="_blank"
								title={`Ir al código de ${project.name}`}
								alt={`Ir al código de ${project.name}`}
								className="shadow-md flex items-center justify-center gap-2 px-4 py-2 bg-[#0568fe] text-white rounded-xl text-sm z-[1] hover:scale-[1.1] transition-all">
								Código
								<span>
									<FaCode className="text-lg opacity-70" />
								</span>
							</a>
						) : (
							""
						)}
					</div>
					<img
						loading="lazy"
						src={project.background_url}
						alt={project.name}
						title={project.name}
						className={`hover:scale-110 absolute w-full h-full object-cover left-0 top-0 z-[0] transition-all duration-300 false dark:opacity-80 `}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProjectsComponent;
