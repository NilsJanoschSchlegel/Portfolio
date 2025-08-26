<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import Header from '$lib/components/sections/Header.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	let cursor: HTMLDivElement | null = null;
	let follower: HTMLDivElement | null = null;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Custom cursor
		let posX = 0;
		let posY = 0;
		let mouseX = 0;
		let mouseY = 0;

		gsap.to({}, 0.016, {
			repeat: -1,
			onRepeat: function () {
				posX += (mouseX - posX) / 9;
				posY += (mouseY - posY) / 9;

				if (follower) {
					gsap.set(follower, {
						css: {
							left: posX - 12,
							top: posY - 12
						}
					});
				}

				if (cursor) {
					gsap.set(cursor, {
						css: {
							left: mouseX,
							top: mouseY
						}
					});
				}
			}
		});

		const onMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

		window.addEventListener('mousemove', onMouseMove);

		document.querySelectorAll('a, button, .project-card').forEach((el) => {
			el.addEventListener('mouseenter', () => {
				gsap.to(cursor, { scale: 4, duration: 0.3 });
			});
			el.addEventListener('mouseleave', () => {
				gsap.to(cursor, { scale: 1, duration: 0.3 });
			});
		});

		// Section animations
		const sections = gsap.utils.toArray<Element>('section');
		sections.forEach((section) => {
			gsap.from(section, {
				scrollTrigger: {
					trigger: section as Element,
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reverse'
				},
				opacity: 0,
				y: 50,
				duration: 1,
				ease: 'power3.out'
			});
		});

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	});
</script>

<div class="cursor" bind:this={cursor}></div>
<div class="cursor-follower" bind:this={follower}></div>

<Header />
<main class="flex-1">
	<Hero />
	<About />
	<Projects />
	<Skills />
	<Experience />
	<Contact />
</main>
<Footer />

<style>
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
	.animate-marquee {
		animation: marquee 20s linear infinite;
	}
</style>
