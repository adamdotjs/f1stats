import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full bg-gray-300">
			<body className="grid h-full grid-cols-[auto_1fr]">
				<div className="relative h-full w-max">
					<Sidebar />
				</div>
				<main className="p-4">{children}</main>
			</body>
		</html>
	);
}
