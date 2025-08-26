<script lang="ts">
	import InfiniteScroller from '$lib/components/ui/InfiniteScroller.svelte';
</script>

<section id="skills" class="w-full bg-background py-20 md:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
				<div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">Skills</div>
				<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Technologies I Use</h2>
				<p
					class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					A collection of tools and technologies I'm proficient with.
				</p>
			</div>
		</div>
		<div class="mx-auto mt-12">
			<InfiniteScroller />
		</div>
	</div>
</section>
