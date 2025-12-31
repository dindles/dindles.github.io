<script lang="ts">
  const code_projects = [
    {
      name: 'Beatjie',
      description: 'Have fun make beats',
      stack: ['Svelte', 'Sveltekit', 'TypeScript', 'CSS', 'ToneJS'],
      font: '',
      fontColor: 'text-secondary-dark',
      bgColor: '',
      link1: '',
      link2: '',
    },
    {
      name: 'This website',
      description: 'Welcome!',
      stack: ['Svelte', 'Sveltekit', 'Typescript', 'CSS'],
      font: '',
      fontColor: 'text-secondary-dark',
      bgColor: '',
      link1: '',
      link2: '',
    },
    {
      name: 'The George Saunders Escalation Exercise',
      description: 'My proud first project, glowing neon and all.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Python'],
      font: '',
      fontColor: 'text-secondary-dark',
      bgColor: '',
      link1: '',
      link2: '',
    },
  ]
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
    padding: var(--space-lg);
    padding-bottom: 0;
  }

  .card-project {
    width: 20rem;
    margin: 0 auto;
    border: var(--border-card);
    border-radius: var(--radius-md);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    transition: border-color var(--transition-default);
  }

  .card-project:hover {
    border-color: var(--colour-primary);
  }

  .project-title {
    color: var(--colour-text);
    margin: 0;
    text-align: center;
  }

  .project-description {
    text-align: center;
  }

  .description-text {
    font-weight: 600;
    color: var(--colour-text);
    margin: 0;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-sm);
  }

  .project-tag {
    font-family: var(--font-mono);
    border: var(--border-tag);
    background-color: var(--colour-surface);
    color: var(--colour-text);
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
  }
</style>
