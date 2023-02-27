import styles from "./loading.module.css";

export default function Loading() {
	return <div aria-label="content loading..." className={styles.loadingSkeleton}></div>;
}
