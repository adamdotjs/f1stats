import Link from "next/link";

async function getSeason(params) {
	const res = await fetch(`http://ergast.com/api/f1/${params.season}/results.json?limit=999`);
	return res.json();
}

export default async function Season({ params }: { params: { slug: string } }) {
	const { MRData } = await getSeason(params);

	return (
		<div>
			<h1>Season data for {MRData.RaceTable.season}</h1>
			<table>
				<thead>
					<tr>
						<th>Round</th>
						<th>Date</th>
						<th>Race Name</th>
						<th>Circuit</th>
						<th>Winner</th>
						<th>Full Results</th>
					</tr>
				</thead>
				<tbody>
					{MRData.RaceTable.Races.map((race) => (
						<tr key={race.raceName}>
							<td>{race.round}</td>
							<td>{race.date}</td>
							<td>{race.raceName}</td>
							<td>
								<a href={race.Circuit.url} target="_blank">
									{race.Circuit.circuitName}
								</a>
							</td>
							<td>
								{race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}
							</td>
							<td>
								<Link href={`/seasons/${MRData.RaceTable.season}/${race.round}`}>View results</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
