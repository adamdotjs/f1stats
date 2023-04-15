import Link from "next/link";

async function getConstructor(params) {
	const res = await fetch(`http://ergast.com/api/f1/constructors/${params.constructor}.json`);
	return res.json();
}

export default async function Constructor({ params }: { params: { slug: string } }) {
	const { MRData } = await getConstructor(params);
	const team = MRData.ConstructorTable.Constructors[0];

	return (
		<div>
			<h1>{team.name}</h1>
			<p>{team.nationality}</p>
			<a href={team.url}>View on Wikipedia</a>
		</div>
	);
}
