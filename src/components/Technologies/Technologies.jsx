import { DevTools } from "../../utils/Technologies.js";

const Technologies = () => {
	return (
		<section className=" w-full sm:w-full h-40 min-w-5 xl:max-w-7xl text-base">
			<div className="shadow-md w-full h-full relative inline-flex flex-nowrap bg-white dark:bg-raisin-black rounded-3xl items-center justify-between px-10 overflow-hidden">
				<div className="absolute left-0 w-28 h-full bg-gradient-to-r from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]"></div>
				<div className="absolute right-0 w-28 h-full bg-gradient-to-l from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]"></div>
				<div className="w-full  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
					<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
						{DevTools.map((tecnologias) => {
							return (
								<li key={tecnologias.id} className="mx-8">
									<img
										loading="lazy"
										className={`cursor-pointer w-[4.5em] h-14 grayscale object-fill hover:grayscale-0 `}
										src={tecnologias.icon}
										alt={tecnologias.name}
										title={tecnologias.name}
									/>
								</li>
							);
						})}
					</ul>
					<ul
						className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
						aria-hidden="true">
						{DevTools.map((tecnologias) => {
							return (
								<li key={tecnologias.id} className="mx-8">
									<img
										loading="lazy"
										className={`cursor-pointer w-[4.5em]  h-14 grayscale object-fill hover:grayscale-0`}
										src={tecnologias.icon}
										alt={tecnologias.name}
										title={tecnologias.name}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
