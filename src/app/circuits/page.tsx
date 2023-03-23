import Link from "next/link";

async function getCircuits() {
	const res = await fetch("http://ergast.com/api/f1/circuits.json?");

	if (!res.ok) {
		throw new Error("Something happened while fetching data. Please try again later.");
	}
	return res.json();
}

export const metadata = {
	title: "Formula One Circuit Listing",
};

export default async function Circuits() {
	const { MRData: data } = await getCircuits();

	return (
		<div>
			<h1>Circuits</h1>
			<ul>
				{data.CircuitTable.Circuits.map((circuit) => (
					<li key={circuit.circuitId}>
						<Link href={`/circuits/${circuit.circuitId}`}>{circuit.circuitName}</Link>
					</li>
				))}
			</ul>
			<p>Results: {data.total}</p>
		</div>
	);
}
