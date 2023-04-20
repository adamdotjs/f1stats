import { GiCarWheel } from "react-icons/gi";

export default function Loading() {
	return (
		<div aria-label="content loading..." className="h-full w-full">
			<GiCarWheel className="h-48 w-48 animate-spin" />
		</div>
	);
}
