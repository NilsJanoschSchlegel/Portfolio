<script lang="ts">
	import { skills } from '$lib/data';
</script>

<div
	class="relative flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
>
	<div class="flex min-w-full flex-shrink-0 animate-marquee items-center justify-around gap-4">
		{#each skills as skill}
			<div class="text-2xl font-semibold text-muted-foreground">{skill}</div>
		{/each}
	</div>
	<div class="flex min-w-full flex-shrink-0 animate-marquee items-center justify-around gap-4">
		{#each skills as skill}
			<div class="text-2xl font-semibold text-muted-foreground">{skill}</div>
		{/each}
	</div>
</div>
