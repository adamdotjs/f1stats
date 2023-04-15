async function getConstructor(params) {
	const res = await fetch(`http://ergast.com/api/f1/constructors/${params.constructor}/constructorStandings.json`);
	return res.json();
}

export default async function Constructor({ params }: { params: { slug: string } }) {
	const { MRData } = await getConstructor(params);
	const data = MRData.StandingsTable.StandingsLists;
	const { url, name, nationality } = data[0].ConstructorStandings[0].Constructor;
	return (
		<div>
			<h1>{name}</h1>
			<p>{nationality}</p>
			<table>
				<thead>
					<tr>
						<th>Season</th>
						<th>Round</th>
						<th>Position</th>
						<th>Points</th>
						<th>Wins</th>
					</tr>
				</thead>
				<tbody>
					{data.map((season) => (
						<tr key={season.season}>
							<td>{season.season}</td>
							<td>{season.round}</td>
							<td>{season.ConstructorStandings[0].position}</td>
							<td>{season.ConstructorStandings[0].points}</td>
							<td>{season.ConstructorStandings[0].wins}</td>
						</tr>
					))}
				</tbody>
			</table>
			<a href={url} target="_blank">
				View Wikipedia page
			</a>
		</div>
	);
}
