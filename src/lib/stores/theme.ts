import { writable } from 'svelte/store';

const createThemeStore = () => {
	const { subscribe, set } = writable('light');

	return {
		subscribe,
		set,
		toggle: () => {
			if (typeof document !== 'undefined') {
				const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
				if (newTheme === 'dark') {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
				set(newTheme);
				localStorage.setItem('theme', newTheme);
			}
		},
		init: () => {
			if (typeof window !== 'undefined' && typeof document !== 'undefined') {
				const storedTheme = localStorage.getItem('theme');
				const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
				const initialTheme = storedTheme ?? systemTheme;
				set(initialTheme);
				if (initialTheme === 'dark') {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
		}
	};
};

export const theme = createThemeStore();
