<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, Dialog } from 'bits-ui';
	import { projects, type Project } from '$lib/data';
	import { gsap } from 'gsap';

	let selectedProject: Project | null = $state(null);
	let isModalOpen = $derived(!!selectedProject);

	function handleProjectClick(project: Project) {
		selectedProject = project;
	}

	function handleProjectKeyDown(event: KeyboardEvent, project: Project) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleProjectClick(project);
		}
	}

	onMount(() => {
		const projectCards = document.querySelectorAll('.project-card');
		projectCards.forEach((card) => {
			card.addEventListener('mouseenter', () => {
				gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
			});
			card.addEventListener('mouseleave', () => {
				gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
			});
		});
	});
</script>

<section id="projects" class="w-full py-20 md:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
				<div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
					My Projects
				</div>
				<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
				<p
					class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Here are some of the projects I'm proud of. Click to learn more.
				</p>
			</div>
		</div>
		<div class="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
			{#each projects as project}
				<div
					role="button"
					tabindex="0"
					class="project-card bg-card text-card-foreground cursor-pointer rounded-xl border shadow-md transition-shadow hover:shadow-lg focus:ring-2 focus:ring-primary focus:outline-none"
					onclick={() => handleProjectClick(project)}
					onkeydown={(e) => handleProjectKeyDown(e, project)}
				>
					<div class="flex flex-col space-y-1.5 p-6">
						<h3 class="font-semibold tracking-tight">{project.title}</h3>
						<p class="text-sm text-muted-foreground">{project.description}</p>
						<div class="flex flex-wrap gap-2 pt-2">
							{#each project.technologies as tech}
								<span
									class="rounded-full bg-accent px-2 py-1 text-xs font-medium text-accent-foreground"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if selectedProject}
	<Dialog.Root bind:open={isModalOpen} onOpenChange={(v) => !v && (selectedProject = null)}>
		<Dialog.Portal>
			<Dialog.Overlay class="fixed inset-0 z-50 bg-black/60" />
			<Dialog.Content
				class="fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg"
			>
				<Dialog.Title class="text-lg font-semibold">{selectedProject.title}</Dialog.Title>
				<Dialog.Description class="mt-2 text-sm text-muted-foreground">
					{selectedProject.description}
				</Dialog.Description>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each selectedProject.technologies as tech}
						<span
							class="rounded-full bg-accent px-2 py-1 text-xs font-medium text-accent-foreground"
						>
							{tech}
						</span>
					{/each}
				</div>
				<div class="mt-6 flex justify-end gap-2">
					<Dialog.Close>
						<Button.Root>Close</Button.Root>
					</Dialog.Close>
					<Button.Root href={selectedProject.link} target="_blank">
						<a href={selectedProject.link} target="_blank">View Project</a>
					</Button.Root>
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
{/if}
