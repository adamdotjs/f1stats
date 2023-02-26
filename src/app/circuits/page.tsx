async function getCircuits() {
	const res = await fetch("http://ergast.com/api/f1/circuits.json?");

	if (!res.ok) {
		throw new Error("Something happened while fetching data. Please try again later.");
	}
	return res.json();
}

export default async function Circuits() {
	const { MRData: data } = await getCircuits();

	return (
		<div>
			<h1>Circuits</h1>
			{data.CircuitTable.Circuits.map((circuit) => (
				<p key={circuit.circuitId}>{circuit.circuitName}</p>
			))}
			<p>Results: {data.total}</p>
		</div>
	);
}
