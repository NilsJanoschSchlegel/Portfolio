<script lang="ts">
	import { personalData } from '$lib/data';
	import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-svelte';
	import { Tooltip } from 'bits-ui';
</script>

<section id="contact" class="w-full border-t py-20 md:py-32">
	<div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
		<div class="space-y-3">
			<h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
			<p
				class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				Have a project in mind or just want to say hi? My inbox is always open.
			</p>
			<a
				href="mailto:{personalData.email}"
				class="inline-block text-lg font-semibold text-primary hover:underline"
			>
				{personalData.email}
			</a>
		</div>
		<div class="mx-auto mt-4 w-full max-w-sm space-y-2">
			<div class="flex justify-center space-x-4">
				<a href={personalData.socials.github} target="_blank" rel="noopener noreferrer">
					<Tooltip.Root>
						<Tooltip.Trigger class="text-muted-foreground transition-colors hover:text-foreground">
							<GithubLogo class="h-8 w-8" />
						</Tooltip.Trigger>
						<Tooltip.Content sideOffset={5}>
							<p>GitHub</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</a>
				<a href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer">
					<Tooltip.Root>
						<Tooltip.Trigger class="text-muted-foreground transition-colors hover:text-foreground">
							<LinkedinLogo class="h-8 w-8" />
						</Tooltip.Trigger>
						<Tooltip.Content sideOffset={5}>
							<p>LinkedIn</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</a>
				<a href={personalData.socials.twitter} target="_blank" rel="noopener noreferrer">
					<Tooltip.Root>
						<Tooltip.Trigger class="text-muted-foreground transition-colors hover:text-foreground">
							<TwitterLogo class="h-8 w-8" />
						</Tooltip.Trigger>
						<Tooltip.Content sideOffset={5}>
							<p>Twitter</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</a>
			</div>
		</div>
	</div>
</section>
