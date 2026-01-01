<script lang="ts">
  import BeatjieLogo from '$lib/components/beatjie-logo.svelte'

  const code_projects = [
    {
      name: 'Beatjie',
      description: 'little web groovebox',
      stack: ['Svelte', 'Sveltekit', 'TypeScript', 'CSS', 'ToneJS'],
      font: '',
      fontColor: 'text-secondary-dark',
      bgColor: '',
      link1: 'https://dindles.net/beatjie',
      link2: '',
    },
  ]
</script>

<main class="code-page">
  {#each code_projects as project}
    <div class="project-wrapper">
      <div class="card-project {project.bgColor}">
        <div class="logo-wrapper">
          <BeatjieLogo size={120} interactive={true} />
        </div>
        {#if project.link1}
          <a
            href={project.link1}
            target="_blank"
            rel="noopener noreferrer"
            class="project-title-link"
          >
            <h2 class="project-title">{project.name}</h2>
          </a>
        {:else}
          <h2 class="project-title">{project.name}</h2>
        {/if}
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

  .logo-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: var(--space-sm);
  }

  .project-title-link {
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .project-title {
    color: var(--colour-text);
    margin: 0;
    text-align: center;
    border-bottom: 1px dotted transparent;
    display: inline-block;
    transition: border-color var(--transition-default);
  }

  .project-title-link:hover .project-title {
    border-bottom-color: var(--colour-secondary);
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
