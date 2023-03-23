async function getCircuit(params) {
	const res = await fetch(`http://ergast.com/api/f1/circuits/${params.circuit}.json`);
	return res.json();
}

async function getCircuitPhoto(name: string) {
	const formattedName = name.replace(" ", "_");
	const res = await fetch(
		`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&titles=${formattedName}&pithumbsize=400`
	);
	return res.json();
}

export default async function Circuit({ params }: { params: { slug: string } }) {
	const { MRData: data } = await getCircuit(params);

	return (
		<div>
			{data.CircuitTable.Circuits.map((circuit) => {
				return (
					<div key={circuit.circuitId}>
						<h2>{circuit.circuitName}</h2>
						<a href={circuit.url} target="_blank">
							Wikipedia Link
						</a>
						<dl>
							<dt>Latitude</dt>
							<dd>{circuit.Location.lat}</dd>
							<dt>Longitude</dt>
							<dd>{circuit.Location.long}</dd>
							<dt>Locality</dt>
							<dd>{circuit.Location.locality}</dd>
							<dt>Country</dt>
							<dd>{circuit.Location.country}</dd>
						</dl>
					</div>
				);
			})}
		</div>
	);
}
