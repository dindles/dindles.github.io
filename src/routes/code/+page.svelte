<script lang="ts">
	const code_projects = [
		{
			name: 'Emojibeats',
			description: 'Have fun make beats',
			stack: ['Svelte', 'Sveltekit', 'TypeScript', 'CSS', 'ToneJS'],
			font: '',
			fontColor: 'text-secondary-dark',
			bgColor: '',
			link1: '',
			link2: ''
		},
		{
			name: 'This website',
			description: 'Welcome!',
			stack: ['Svelte', 'Sveltekit', 'Typescript', 'CSS'],
			font: '',
			fontColor: 'text-secondary-dark',
			bgColor: '',
			link1: '',
			link2: ''
		},
		{
			name: 'The George Saunders Escalation Exercise',
			description: 'My proud first project, glowing neon and all.',
			stack: ['HTML', 'CSS', 'JavaScript', 'Python'],
			font: '',
			fontColor: 'text-secondary-dark',
			bgColor: '',
			link1: '',
			link2: ''
		}
	];
</script>

<main class="flex-grow">
	{#each code_projects as project}
		<div class="p-6 pb-0">
			<div class="card-project {project.bgColor}">
				<div>
					<h2 class="pt-6 {project.fontColor} {project.font}">{project.name}</h2>
				</div>
				<div class="p-6 max-w-48">
					<p class="font-semibold {project.fontColor}">{project.description}</p>
				</div>
				<div class="flex flex-wrap justify-center pb-6 gap-x-4">
					{#each project.stack as item}
						<div class="project-tag">
							<span>{item}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</main>

<style>
	.card-project {
		width: 20rem;
		margin: 0 auto;
		text-align: center;
		border: var(--border-width-2) dotted var(--color-secondary-700);
		cursor: pointer;
		transition: border-color var(--transition-base);
	}

	.card-project:hover {
		border-color: var(--color-secondary-500);
	}

	.project-tag {
		font-family: var(--font-mono);
		border: var(--border-width-1) solid var(--color-gray-400);
		background-color: var(--color-primary-100);
		max-width: fit-content;
		padding: var(--space-1) var(--space-2);
	}
</style>
