<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from 'bits-ui';
	import { personalData } from '$lib/data';
	import { gsap } from 'gsap';

	onMount(() => {
		gsap.from('.hero-text', {
			duration: 1,
			y: 50,
			opacity: 0,
			stagger: 0.2,
			ease: 'power3.out',
			delay: 0.5
		});
	});
</script>

<section class="flex h-screen w-full items-center justify-center">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center space-y-6 text-center">
			<div class="space-y-2">
				<h1
					class="hero-text font-display text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none"
				>
					{personalData.name}
				</h1>
				<p class="hero-text mx-auto max-w-[700px] text-muted-foreground md:text-xl">
					{personalData.title}
				</p>
			</div>
			<div class="hero-text space-x-4">
				<Button.Root>
					<a href="#projects">View Projects</a>
				</Button.Root>
				<Button.Root>
					<a href="#contact">Contact Me</a>
				</Button.Root>
			</div>
		</div>
	</div>
</section>
