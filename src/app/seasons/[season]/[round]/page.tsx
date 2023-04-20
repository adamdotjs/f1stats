import clsx from "clsx";
import { HiStar } from "react-icons/hi";

async function getRaceResults(params) {
	const res = await fetch(`http://ergast.com/api/f1/${params.season}/${params.round}/results.json`);
	return res.json();
}

export default async function RaceResults({ params }: { params: { slug: string } }) {
	const { MRData } = await getRaceResults(params);

	return (
		<div>
			<h1>
				Results for {params.season} {MRData.RaceTable.Races[0].raceName}
			</h1>
			<p>{MRData.RaceTable.Races[0].date}</p>
			<table>
				<thead>
					<tr>
						<th>Position</th>
						<th>Driver</th>
						<th>Number</th>
						<th>Constructor</th>
						<th>Grid</th>
						<th>Race Status</th>
						<th>Laps</th>
						<th>Total Time</th>
						<th>Fastest Lap</th>
					</tr>
				</thead>
				<tbody>
					{MRData.RaceTable.Races[0].Results.map((result) => (
						<tr key={result.position}>
							<td>{result.position}</td>
							<td>
								{result.Driver.givenName} {result.Driver.familyName}
							</td>
							<td>{result.number}</td>
							<td>{result.Constructor.name}</td>
							<td>{result.grid}</td>
							<td>{result.status}</td>
							<td>{result.laps}</td>
							<td>{result.Time?.time}</td>
							<td className="flex items-center gap-1">
								{result.FastestLap?.Time.time}
								{result.FastestLap?.rank === "1" && <HiStar />}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
