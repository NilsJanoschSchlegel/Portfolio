<script lang="ts">
	import { Switch } from 'bits-ui';
	import { theme } from '$lib/stores/theme';
	import { Sun, Moon } from 'phosphor-svelte';

	let checked = $state(false);

	$effect(() => {
		checked = $theme === 'dark';
	});

	function handleClick() {
		theme.toggle();
	}
</script>

<div class="flex items-center">
	<Sun class="h-5 w-5 text-yellow-500" />
	<Switch.Root
		bind:checked
		onclick={handleClick}
		class="relative mx-2 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-300 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none dark:bg-gray-700"
	>
		<Switch.Thumb
			class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out {checked
				? 'translate-x-5'
				: 'translate-x-0'}"
		/>
	</Switch.Root>
	<Moon class="h-5 w-5 text-gray-400" />
</div>
