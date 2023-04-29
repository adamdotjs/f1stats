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
		<div className="sticky top-0 flex h-full flex-col bg-gray-50 p-4">
			<h1>F1Stats</h1>
			<nav className="mt-8">
				<ul>
					{ROUTES.map((route) => (
						<li key={route.path}>
							<Link href={route.path} className="block rounded-md px-4 py-2 hover:bg-gray-100">
								{route.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<span className="mt-auto text-sm">
				Data provided by the{" "}
				<a href="http://ergast.com/mrd/" target="_blank">
					Ergast API
				</a>
			</span>
		</div>
	);
};

export { Sidebar };
