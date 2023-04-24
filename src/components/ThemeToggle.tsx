"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [theme, setTheme] = useState(() => {
		if (typeof window === "undefined") {
			return undefined;
		}
		if (window.localStorage.getItem("theme")) {
			return window.localStorage.getItem("theme");
		}
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		}
		return "light";
	});

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	});

	const toggleTheme = () => {
		const t = theme === "dark" ? "light" : "dark";
		setTheme(t);
		window.localStorage.setItem("theme", t);
	};

	return <button onClick={toggleTheme}>{theme === "light" ? "dark" : "light"}</button>;
};

export { ThemeToggle };
