import Link from "next/link";

async function getConstructors() {
	const res = await fetch(`http://ergast.com/api/f1/constructors.json`);
	return res.json();
}

export default async function Constructors() {
	const { MRData: data } = await getConstructors();

	return (
		<div>
			<h1>Constructors</h1>
			<ul>
				{data.ConstructorTable.Constructors.map((constructor) => (
					<li key={constructor.constructorId}>
						<Link href={`/circuits/${constructor.constructorId}`}>{constructor.name}</Link>
					</li>
				))}
			</ul>
			<p>Results: {data.total}</p>
		</div>
	);
}
