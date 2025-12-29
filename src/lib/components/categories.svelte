<script lang="ts">
  import { categoryState } from '$lib/state/state-stores.svelte'

  // Sets state on clicks
  function soundClick() {
    categoryState.category = 'sound'
    categoryState.soundVis = 'visible'
    categoryState.codeVis = 'hidden'
  }

  function codeClick() {
    categoryState.category = 'code'
    categoryState.codeVis = 'visible'
    categoryState.soundVis = 'hidden'
  }
</script>

<div class="flex justify-center gap-6 category">
  <!-- SOUNDS -->
  <a href="/sound">
    <button
      onclick={soundClick}
      onfocus={() => (categoryState.soundVis = 'visible')}
      class="btn-category"
    >
      <!-- shaking maracas -->
      {#if categoryState.soundVis === 'visible'}
        <p id="maracasAnim" class="emoji">🪇</p>
      {:else}
        <p class="emoji">🪇</p>
      {/if}
    </button>
  </a>

  <!-- CODE -->
  <a href="/code">
    <button
      onclick={codeClick}
      onfocus={() => (categoryState.codeVis = 'visible')}
      class="btn-category"
    >
      <!-- scrolling code -->
      {#if categoryState.codeVis === 'visible'}
        <div aria-label="let i = 0" class="pt-2 pointer-events-none h-11">
          <span id="typingAnim" class="font-mono"></span>
        </div>
      {:else}
        <p class="font-mono pointer-events-none">i = 0</p>
      {/if}
    </button>
  </a>
</div>

<style>
  /* Button Styles */
  .btn-category {
    display: inline-block;
    width: 5rem;
    text-align: center;
    aspect-ratio: 1 / 1;
    border: var(--border-width-2) double var(--color-secondary-700);
    border-radius: var(--radius-full);
    cursor: pointer;
    box-shadow: var(--shadow-secondary);
    transition: all var(--transition-base);
  }

  .btn-category:hover {
    border-color: var(--color-secondary-500);
  }

  .btn-category:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }

  .emoji {
    padding-top: var(--space-1);
    margin: 0 auto;
    font-size: var(--text-4xl);
    font-family: var(--font-emoji);
    color: var(--color-secondary-700);
    pointer-events: none;
  }

  /* SOUND */
  /* Maraca-shaking animation*/
  #maracasAnim {
    animation: shaking 0.5s infinite;
  }

  @keyframes shaking {
    0% {
      transform: translateX(0);
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
    100% {
      transform: translateY(0) rotate(0);
    }
  }

  /* CODE */
  /* prevents text highlighting on click */
  .category {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }

  /* Typing animation – based on a CodePen by Alvaro Montoro*/
  @keyframes typing {
    0%,
    50% {
      content: '';
    }
    5%,
    45% {
      content: 'i';
    }
    10%,
    40% {
      content: 'i ';
    }
    15%,
    35% {
      content: 'i =';
    }
    20%,
    30% {
      content: 'i = ';
    }
    25%,
    29% {
      content: 'i = 0';
    }

    50%,
    96.8605% {
      content: '';
    }
    55%,
    90% {
      content: 'j';
    }
    60%,
    85% {
      content: 'j ';
    }
    65%,
    80% {
      content: 'j =';
    }
    70%,
    75% {
      content: 'j = ';
    }
    72%,
    73% {
      content: 'j = 0';
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

  #typingAnim {
    --caret: currentcolor;
  }

  #typingAnim::before {
    content: '';
    animation: typing 4.5s infinite;
  }

  #typingAnim::after {
    content: '';
    border-right: 1px solid var(--caret);
    animation: blink 0.5s linear infinite;
  }

  @media (prefers-reduced-motion) {
    #typingAnim::after {
      animation: none;
    }
    #maracasAnim {
      animation: none;
    }
  }
</style>
