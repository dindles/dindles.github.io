<script lang="ts">
  import ThemeSelector from '$lib/components/theme-selector.svelte'
  import blobOutline from '$lib/assets/images/blob-black.svg'
</script>

<div class="header">
  <a href="/" class="home-button" aria-label="Home">
    <img src={blobOutline} alt="Home" class="blob-icon" />
  </a>
  <ThemeSelector />
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    background-color: var(--colour-primary);
  }

  .home-button {
    display: flex;
    align-items: center;
    padding: 0.25rem;
    border-radius: 0.375rem;
    transition: all 200ms ease;
  }

  .home-button:hover {
    transform: scale(1.02);
  }

  .home-button:active {
    transform: scale(0.98);
  }

  .blob-icon {
    width: 2rem;
    height: 2rem;
    filter: invert(1);
  }
</style>
