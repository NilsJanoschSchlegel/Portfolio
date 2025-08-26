<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ThemeSwitcher from '$lib/components/ui/ThemeSwitcher.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

		const navLinks = document.querySelectorAll('header nav a');
		navLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				const targetId = link.getAttribute('href');
				if (targetId) {
					gsap.to(window, { duration: 1, scrollTo: targetId, ease: 'power2.inOut' });
				}
			});
		});

		const header = document.querySelector('header');
		if (!header) return;

		const showAnim = gsap
			.from(header, {
				yPercent: -100,
				paused: true,
				duration: 0.2,
				ease: 'power2.inOut'
			})
			.progress(1);

		ScrollTrigger.create({
			start: 'top top',
			end: 99999,
			onUpdate: (self) => {
				self.direction === -1 ? showAnim.play() : showAnim.reverse();
			}
		});
	});
</script>

<header class="fixed top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
	<div class="container flex h-16 items-center justify-between px-4 md:px-6">
		<a href="#top" class="font-display text-lg font-semibold"> NJS </a>
		<nav class="hidden items-center space-x-4 text-sm font-medium md:flex">
			<a href="#about" class="transition-colors hover:text-primary">About</a>
			<a href="#projects" class="transition-colors hover:text-primary">Projects</a>
			<a href="#skills" class="transition-colors hover:text-primary">Skills</a>
			<a href="#experience" class="transition-colors hover:text-primary">Experience</a>
			<a href="#contact" class="transition-colors hover:text-primary">Contact</a>
		</nav>
		<ThemeSwitcher />
	</div>
</header>
