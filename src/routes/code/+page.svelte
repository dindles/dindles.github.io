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

<main class="code-page">
	{#each code_projects as project}
		<div class="project-wrapper">
			<div class="card-project {project.bgColor}">
				<h2 class="project-title">{project.name}</h2>
				<div class="project-description">
					<p class="description-text">{project.description}</p>
				</div>
				<div class="project-tags">
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
	.code-page {
		flex: 1 1 0%;
	}

	.project-wrapper {
		padding: 1.5rem;
		padding-bottom: 0;
	}

	.card-project {
		width: 20rem;
		margin: 0 auto;
		text-align: center;
		border: 2px dotted var(--colour-secondary);
		cursor: pointer;
		transition: border-color 200ms ease;
	}

	.card-project:hover {
		border-color: var(--colour-primary);
	}

	.project-title {
		padding-top: 1.5rem;
		color: var(--colour-text);
	}

	.project-description {
		padding: 1.5rem;
		max-width: 12rem;
	}

	.description-text {
		font-weight: 600;
		color: var(--colour-text);
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding-bottom: 1.5rem;
		column-gap: 1rem;
	}

	.project-tag {
		font-family: var(--font-mono);
		border: 1px solid var(--colour-secondary);
		background-color: var(--colour-primary);
		max-width: fit-content;
		padding: 0.25rem 0.5rem;
	}
</style>
