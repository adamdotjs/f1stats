import Link from "next/link";

async function getSeasons() {
	const res = await fetch(`http://ergast.com/api/f1/seasons.json?limit=999`);
	return res.json();
}

export default async function Seasons() {
	const { MRData } = await getSeasons();

	return (
		<div>
			<h1>View Season</h1>
			<ul className="columns-5">
				{MRData.SeasonTable.Seasons.map(({ season, url }) => (
					<li key={season}>
						<Link href={`/seasons/${season}`}>{season}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
