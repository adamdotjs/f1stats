import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>F1Stats</h1>
		</main>
	);
}
