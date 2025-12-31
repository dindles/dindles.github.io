<script lang="ts">
  import { page } from '$app/state'

  // current page for active animations
  const is_on_sound_page = $derived(page.url.pathname === '/sound')
  const is_on_code_page = $derived(page.url.pathname === '/code')
</script>

<div class="categories">
  <!-- SOUNDS -->
  <a href="/sound" aria-label="Sound projects">
    <button
      class="btn-category btn-sound"
      class:active={is_on_sound_page}
      aria-label="Sound projects"
    >
      <p class="emoji maraca">🪇</p>
    </button>
  </a>

  <!-- CODE -->
  <a href="/code" aria-label="Code projects">
    <button class="btn-category btn-code" class:active={is_on_code_page} aria-label="Code projects">
      <div class="code-display">
        <span class="code-text typing"></span>
      </div>
    </button>
  </a>
</div>

<style>
  .categories {
    display: flex;
    justify-content: center;
    gap: var(--space-lg);
    user-select: none;
  }

  .categories a {
    text-decoration: none;
  }

  .btn-category {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    aspect-ratio: 1 / 1;
    border: var(--border-button-primary);
    border-radius: var(--radius-full);
    background-color: var(--colour-surface-light);
    cursor: pointer;
    box-shadow: 3px 3px 0 var(--colour-secondary);
    transition: all var(--transition-default);
  }

  .btn-category:hover {
    border-color: var(--colour-primary);
  }

  .btn-category:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }

  .emoji {
    margin: 0;
    font-size: 2rem;
    font-family: var(--font-emoji);
    color: var(--colour-secondary);
    pointer-events: none;
  }

  .code-display {
    pointer-events: none;
  }

  .code-text {
    margin: 0;
    font-family: var(--font-mono);
    color: var(--colour-secondary);
  }

  /* Maraca-shaking animation - triggers on hover for desktop, loops on mobile when active */
  .maraca {
    animation: none;
  }

  /* Desktop: only on hover/focus */
  @media (hover: hover) {
    .btn-sound:hover .maraca,
    .btn-sound:focus-visible .maraca {
      animation: shaking 0.5s infinite;
    }
  }

  /* Mobile: loop when on active page */
  @media (hover: none) {
    .btn-sound.active .maraca {
      animation: shaking 0.5s infinite;
    }
  }

  @keyframes shaking {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-1px) rotate(0deg);
    }
    35% {
      transform: translateY(-1px) rotate(5deg);
    }
    55% {
      transform: translateY(-1px) rotate(0deg);
    }
    65% {
      transform: translateY(-1px) rotate(-5deg);
    }
    75% {
      transform: translateY(-1px) rotate(5deg);
    }
  }

  /* Typing animation – based on a CodePen by Alvaro Montoro: https://codepen.io/alvaromontoro/pen/rNwVpdd */
  @keyframes typing {
    /* Start at 'i = 0' (matches static state) */
    0%,
    10% {
      content: 'i = 0';
    }
    /* Delete back */
    12% {
      content: 'i = ';
    }
    14% {
      content: 'i =';
    }
    16% {
      content: 'i ';
    }
    18% {
      content: 'i';
    }
    20%,
    47% {
      content: '';
    }

    /* Type 'j = 0' */
    49% {
      content: 'j';
    }
    52% {
      content: 'j ';
    }
    54% {
      content: 'j =';
    }
    56% {
      content: 'j = ';
    }
    58%,
    68% {
      content: 'j = 0';
    }

    /* Delete back */
    70% {
      content: 'j = ';
    }
    72% {
      content: 'j =';
    }
    74% {
      content: 'j ';
    }
    76% {
      content: 'j';
    }
    78%,
    93% {
      content: '';
    }

    /* Type back to 'i = 0' for seamless loop */
    95% {
      content: 'i';
    }
    97% {
      content: 'i ';
    }
    98% {
      content: 'i =';
    }
    99% {
      content: 'i = ';
    }
    100% {
      content: 'i = 0';
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  /* Typing animation - triggers on hover for desktop, loops on mobile when active */
  .typing {
    --caret: currentcolor;
  }

  .typing::before {
    content: 'i = 0';
    animation: none;
  }

  .typing::after {
    content: '';
    border-right: 1px solid var(--caret);
    animation: none;
  }

  /* Desktop: only on hover/focus */
  @media (hover: hover) {
    .btn-code:hover .typing::before,
    .btn-code:focus-visible .typing::before {
      animation: typing 4.5s infinite;
    }

    .btn-code:hover .typing::after,
    .btn-code:focus-visible .typing::after {
      animation: blink 0.5s linear infinite;
    }
  }

  /* Mobile: loop when on active page */
  @media (hover: none) {
    .btn-code.active .typing::before {
      animation: typing 4.5s infinite;
    }

    .btn-code.active .typing::after {
      animation: blink 0.5s linear infinite;
    }
  }

  @media (prefers-reduced-motion) {
    .typing::before,
    .typing::after,
    .maraca {
      animation: none !important;
    }
  }
</style>
