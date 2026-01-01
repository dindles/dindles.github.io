<script lang="ts">
  interface Props {
    size?: number // Size in pixels (default: 200)
    hue?: number // Initial hue from available palette (default: random)
    interactive?: boolean // Enable click to change color (default: false)
  }

  let { size = 200, hue, interactive = false }: Props = $props()

  const AVAILABLE_HUES = [30, 90, 140, 200, 280, 330]
  let current_hue = $derived(
    hue ?? AVAILABLE_HUES[Math.floor(Math.random() * AVAILABLE_HUES.length)]
  )

  function handleClick() {
    if (!interactive) return
    // Pick random hue different from current
    const available = AVAILABLE_HUES.filter((h) => h !== current_hue)
    current_hue = available[Math.floor(Math.random() * available.length)]
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!interactive) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick()
    }
  }
</script>

{#if interactive}
  <div
    class="logo-container interactive"
    style="--logo-size: {size}px; --logo-hue: {current_hue};"
    onclick={handleClick}
    onkeydown={handleKeydown}
    role="button"
    tabindex="0"
    aria-label="Click to change color"
  >
    <div class="step step-1"></div>
    <div class="step step-2"></div>
    <div class="step step-3"></div>
    <div class="step step-4"></div>
  </div>
{:else}
  <div class="logo-container" style="--logo-size: {size}px; --logo-hue: {current_hue};">
    <div class="step step-1"></div>
    <div class="step step-2"></div>
    <div class="step step-3"></div>
    <div class="step step-4"></div>
  </div>
{/if}

<style>
  .logo-container {
    /* Size and layout */
    width: var(--logo-size);
    height: var(--logo-size);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3px;
    padding: 3px;

    /* Border styling */
    border: 5px solid var(--logo-colour);
    border-radius: 14px;

    /* Colors */
    --lightness: 0.9;
    --chroma: 0.17; /* Calculated: 0.15 + 0.1 * (1 - Math.abs(0.9 - 0.5) * 2) */
    --logo-colour: oklch(var(--lightness) var(--chroma) var(--logo-hue));
    --logo-bg: oklch(0 0 0); /* Black background */

    background-color: var(--logo-bg);

    /* Disable text selection */
    user-select: none;
    -webkit-user-select: none;
  }

  .logo-container.interactive {
    cursor: pointer;
  }

  .step {
    /* Layout */
    aspect-ratio: 1;
    border-radius: 6px;

    /* Default colors (inactive state) */
    color: var(--logo-colour);
    background-color: var(--logo-bg);
    border: 5px solid var(--logo-colour);

    /* Animation */
    animation: step-pulse 1.6s ease-in-out infinite;
  }

  /* Stagger animations for each step */
  .step-1 {
    animation-delay: 0s;
  }

  .step-2 {
    animation-delay: 0.4s;
  }

  .step-3 {
    animation-delay: 0.8s;
  }

  .step-4 {
    animation-delay: 1.2s;
  }

  @keyframes step-pulse {
    0%,
    24% {
      /* Active state: inverted colors */
      color: var(--logo-bg);
      background-color: var(--logo-colour);
      border-color: var(--logo-colour);
    }
    25%,
    100% {
      /* Inactive state: default colors */
      color: var(--logo-colour);
      background-color: var(--logo-bg);
      border-color: var(--logo-colour);
    }
  }
</style>
