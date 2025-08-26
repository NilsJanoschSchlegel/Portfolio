<script lang="ts">
	import { personalData } from '$lib/data';
	import { Tabs } from 'bits-ui';
	import { CheckCircle } from 'phosphor-svelte';
</script>

<section id="about" class="w-full bg-muted py-20 md:py-32">
	<div class="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
		<img
			alt="About"
			class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
			height="550"
			src="https://images.unsplash.com/photo-1586589058841-f1264894a260?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
			width="550"
		/>
		<div class="space-y-4">
			<div class="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">
				About Me
			</div>
			<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Who I Am</h2>

			<Tabs.Root value="bio" class="w-full max-w-md">
				<Tabs.List class="grid w-full grid-cols-2">
					<Tabs.Trigger
						value="bio"
						class="focus-visible:ring-ring inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
						>Bio</Tabs.Trigger
					>
					<Tabs.Trigger
						value="fun-facts"
						class="focus-visible:ring-ring inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
						>Fun Facts</Tabs.Trigger
					>
				</Tabs.List>
				<Tabs.Content
					value="bio"
					class="focus-visible:ring-ring mt-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					<p
						class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						{personalData.bio}
					</p>
				</Tabs.Content>
				<Tabs.Content
					value="fun-facts"
					class="focus-visible:ring-ring mt-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					<ul class="space-y-2 text-muted-foreground">
						{#each personalData.funFacts as fact}
							<li class="flex items-center gap-2">
								<CheckCircle class="h-5 w-5 text-primary" />
								<span>{fact}</span>
							</li>
						{/each}
					</ul>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	</div>
</section>
