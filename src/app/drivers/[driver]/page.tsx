import Image from "next/image";
import { Suspense } from "react";

async function getDriver(params) {
	const res = await fetch(`http://ergast.com/api/f1/drivers/${params.driver}.json`);
	return res.json();
}

async function getDriverPhoto(first, last) {
	const res = await fetch(
		`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&titles=${first}_${last}&pithumbsize=400`
	);
	return res.json();
}

async function DriverImage({ firstName, lastName }) {
	const photo = await getDriverPhoto(firstName, lastName);
	const wikiPageId = Object.keys(photo?.query.pages)[0];
	const image = photo?.query.pages[wikiPageId].thumbnail?.source;
	return <img src={image} alt={`${firstName} ${lastName}`} />;
}

export default async function Driver({ params }: { params: { slug: string } }) {
	const data = await getDriver(params);
	const driver = data.MRData.DriverTable.Drivers[0];

	return (
		<div>
			<h1 className="text-5xl font-bold">
				{driver.givenName} {driver.familyName}
			</h1>
			<Suspense fallback={<div>Loading..</div>}>
				<DriverImage firstName={driver.givenName} lastName={driver.familyName} />
			</Suspense>
			<dl>
				<dt>Code</dt>
				<dd>{driver.code}</dd>
				<dt>Number</dt>
				<dd>{driver.permanentNumber}</dd>
				<dt>Birthday</dt>
				<dd>{driver.dateOfBirth}</dd>
				<dt>Nationality</dt>
				<dd>{driver.nationality}</dd>
			</dl>
		</div>
	);
}
