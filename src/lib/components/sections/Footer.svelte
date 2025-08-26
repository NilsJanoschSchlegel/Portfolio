<script lang="ts">
	import { personalData } from '$lib/data';
</script>

<footer class="flex w-full shrink-0 items-center border-t px-4 py-6 md:px-6">
	<p class="text-xs text-muted-foreground">
		&copy; {new Date().getFullYear()}
		{personalData.name}. All rights reserved.
	</p>
</footer>
