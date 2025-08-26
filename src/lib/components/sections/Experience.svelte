<script lang="ts">
	import { experience } from '$lib/data';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const timelineItems = gsap.utils.toArray<Element>('.timeline-item');
		timelineItems.forEach((item, i) => {
			gsap.from(item, {
				scrollTrigger: {
					trigger: item,
					start: 'top 85%',
					toggleActions: 'play none none none'
				},
				opacity: 0,
				x: i % 2 === 0 ? -100 : 100,
				duration: 0.8,
				ease: 'power3.out'
			});
		});
	});
</script>

<section id="experience" class="w-full bg-muted py-20 md:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
				<div class="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">
					Experience
				</div>
				<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">My Professional Journey</h2>
			</div>
		</div>
		<div class="relative mx-auto mt-12 max-w-3xl">
			<div class="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>
			{#each experience as job, i}
				<div
					class="timeline-item relative mb-8 flex w-full items-center justify-between {i % 2 !== 0
						? 'flex-row-reverse'
						: ''}"
				>
					<div class="order-1 w-5/12"></div>
					<div
						class="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
					>
						{i + 1}
					</div>
					<div class="bg-card order-1 w-5/12 rounded-lg p-4 shadow-md">
						<h3 class="text-card-foreground mb-1 font-bold">{job.role}</h3>
						<p class="mb-2 text-sm font-semibold text-primary">{job.company} | {job.period}</p>
						<p class="text-sm text-muted-foreground">{job.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
