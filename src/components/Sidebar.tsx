import Link from "next/link";

const ROUTES = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/circuits",
		title: "Circuits",
	},
	{
		path: "/constructors",
		title: "Constructors",
	},
	{
		path: "/drivers",
		title: "Drivers",
	},
	{
		path: "/seasons",
		title: "Seasons",
	},
	{
		path: "/standings",
		title: "Standings",
	},
];

const Sidebar = () => {
	return (
		<div className="sticky top-0 bg-gray-900 p-4 text-white">
			<h1>F1Stats</h1>
			<nav>
				<ul>
					{ROUTES.map((route) => (
						<li key={route.path}>
							<Link href={route.path}>{route.title}</Link>
						</li>
					))}
				</ul>
			</nav>
			<span>
				Data provided by the{" "}
				<a href="http://ergast.com/mrd/" target="_blank">
					Ergast API
				</a>
			</span>
		</div>
	);
};

export { Sidebar };
