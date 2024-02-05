const Header = ({ title, description }) => {
	return (
		<header>
			<h2 className="text-3xl font-semibold justify-center flex" title={title} alt={title}>
				{title}
			</h2>
			<h3
				className="pt-2 pb-1 tracking-wide xs:text-center"
				title={description}
				alt={description}>
				{description}
			</h3>
		</header>
	);
};

export default Header;
