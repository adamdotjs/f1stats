type Params = {
	limit?: string;
	offset?: string;
};

async function getDrivers(params: Params) {
	const res = await fetch(
		`http://ergast.com/api/f1/drivers.json?limit=${params.limit}&offset=${params.offset}`
	);

	if (!res.ok) {
		throw new Error("Something happened while fetching data. Please try again later.");
	}
	return res.json();
}

export default async function Drivers({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const { MRData: data } = await getDrivers(searchParams);

	return (
		<div>
			<h1>Drivers</h1>
			{data.DriverTable.Drivers.map((driver) => (
				<p key={driver.driverId}>
					{driver.givenName} {driver.familyName}
				</p>
			))}
			<p>Results: {data.total}</p>
			<p>{JSON.stringify(searchParams)}</p>
		</div>
	);
}
