<script lang="ts">
  type EmbedStatus = 'loading' | 'loaded' | 'error'

  let embeds = $state({
    sugarcane: {
      status: 'loading' as EmbedStatus,
      timeoutId: undefined as number | undefined,
    },
    orbitalFarm: {
      status: 'loading' as EmbedStatus,
      timeoutId: undefined as number | undefined,
    },
  })

  const LOAD_TIMEOUT_MS = 15000 // 15 seconds

  function handleIframeLoad(embed_key: 'sugarcane' | 'orbitalFarm') {
    if (embeds[embed_key].timeoutId) {
      clearTimeout(embeds[embed_key].timeoutId)
    }
    embeds[embed_key].status = 'loaded'
  }

  function handleIframeError(embed_key: 'sugarcane' | 'orbitalFarm') {
    if (embeds[embed_key].timeoutId) {
      clearTimeout(embeds[embed_key].timeoutId)
    }
    embeds[embed_key].status = 'error'
  }

  function setupTimeout(embed_key: 'sugarcane' | 'orbitalFarm') {
    const timeout_id = setTimeout(() => {
      if (embeds[embed_key].status === 'loading') {
        embeds[embed_key].status = 'error'
      }
    }, LOAD_TIMEOUT_MS) as unknown as number

    embeds[embed_key].timeoutId = timeout_id
  }

  function retryLoad(embed_key: 'sugarcane' | 'orbitalFarm') {
    embeds[embed_key].status = 'loading'
    setupTimeout(embed_key)
  }

  // Set up timeouts when component mounts
  $effect(() => {
    setupTimeout('sugarcane')
    setupTimeout('orbitalFarm')

    return () => {
      if (embeds.sugarcane.timeoutId) clearTimeout(embeds.sugarcane.timeoutId)
      if (embeds.orbitalFarm.timeoutId) clearTimeout(embeds.orbitalFarm.timeoutId)
    }
  })
</script>

<div class="sound-page">
  <!-- Orbital Farm embed -->
  <div class="embed-container">
    {#if embeds.orbitalFarm.status === 'loading'}
      <div class="loading-overlay">
        <div class="spinner"></div>
      </div>
    {:else if embeds.orbitalFarm.status === 'error'}
      <div class="error-overlay">
        <p class="error-message">failed to load embed</p>
        <button class="retry-button" onclick={() => retryLoad('orbitalFarm')}>Retry</button>
        <a
          href="https://dindles.bandcamp.com/album/a-neglected-corner-of-an-orbital-farm"
          class="fallback-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen on Bandcamp ↗
        </a>
      </div>
    {/if}
    {#if embeds.orbitalFarm.status !== 'error'}
      <iframe
        class="embed-frame"
        title="Dindles - A Neglected Corner of an Orbital Farm"
        src="https://bandcamp.com/EmbeddedPlayer/album=2843291190/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
        onload={() => handleIframeLoad('orbitalFarm')}
        onerror={() => handleIframeError('orbitalFarm')}
      >
        <a href="https://dindles.bandcamp.com/album/a-neglected-corner-of-an-orbital-farm">
          A Neglected Corner of an Orbital Farm by Dindles
        </a>
      </iframe>
    {/if}
  </div>

  <!-- Sugarcane embed -->
  <div class="embed-container">
    {#if embeds.sugarcane.status === 'loading'}
      <div class="loading-overlay">
        <div class="spinner"></div>
      </div>
    {:else if embeds.sugarcane.status === 'error'}
      <div class="error-overlay">
        <p class="error-message">Failed to load embed</p>
        <button class="retry-button" onclick={() => retryLoad('sugarcane')}>Retry</button>
        <a
          href="https://dindles.bandcamp.com/album/sugarcane"
          class="fallback-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen on Bandcamp ↗
        </a>
      </div>
    {/if}
    {#if embeds.sugarcane.status !== 'error'}
      <iframe
        class="embed-frame"
        title="Dindles - Sugarcane"
        src="https://bandcamp.com/EmbeddedPlayer/album=243964234/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
        onload={() => handleIframeLoad('sugarcane')}
        onerror={() => handleIframeError('sugarcane')}
      >
        <a href="https://dindles.bandcamp.com/album/sugarcane">Sugarcane by Dindles</a>
      </iframe>
    {/if}
  </div>
</div>

<style>
  .sound-page {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }

  .embed-container {
    display: flex;
    justify-content: center;
    position: relative;
    min-height: 400px;
  }

  .loading-overlay,
  .error-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    background-color: var(--colour-surface);
    border: 2px dotted var(--colour-secondary);
    border-radius: 0.5rem;
    z-index: 10;
    padding: 2rem;
  }

  .embed-frame {
    width: 100%;
    max-width: 32rem;
    aspect-ratio: 1 / 1;
    border-radius: 0.5rem;
  }

  .spinner {
    width: 3rem;
    height: 3rem;
    border: 4px solid var(--colour-surface);
    border-top-color: var(--colour-text);
    border-radius: 9999px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .error-message {
    margin: 0;
    font-family: var(--font-primary);
    color: var(--colour-text);
    font-size: 1rem;
  }

  .retry-button {
    padding: 0.5rem 1rem;
    background-color: var(--colour-primary);
    color: var(--colour-surface);
    border: 2px solid var(--colour-secondary);
    border-radius: 0.25rem;
    font-family: var(--font-primary);
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 200ms ease;
  }

  .retry-button:hover {
    background-color: var(--colour-secondary);
    transform: translateY(-1px);
  }

  .retry-button:active {
    transform: translateY(0);
  }

  .fallback-link {
    color: var(--colour-text);
    text-decoration: none;
    font-family: var(--font-primary);
    font-size: 0.9rem;
    border-bottom: 1px dotted var(--colour-secondary);
    transition: border-color 200ms ease;
  }

  .fallback-link:hover {
    border-bottom-color: var(--colour-primary);
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation: none;
    }
  }
</style>
