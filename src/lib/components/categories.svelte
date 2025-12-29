<script lang="ts">
  import { categoryState } from '$lib/state/state.svelte'

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

<div class="categories">
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
        <div aria-label="let i = 0" class="code-display">
          <span id="typingAnim" class="code-text"></span>
        </div>
      {:else}
        <p class="code-text code-static">i = 0</p>
      {/if}
    </button>
  </a>
</div>

<style>
  .categories {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    user-select: none;
  }

  .btn-category {
    display: inline-block;
    width: 5rem;
    text-align: center;
    aspect-ratio: 1 / 1;
    border: 2px double var(--colour-secondary);
    border-radius: 9999px;
    cursor: pointer;
    box-shadow: 3px 3px 0 var(--colour-secondary);
    transition: all 200ms ease;
  }

  .btn-category:hover {
    border-color: var(--colour-primary);
  }

  .btn-category:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }

  .emoji {
    padding-top: 0.25rem;
    margin: 0 auto;
    font-size: 2rem;
    font-family: var(--font-emoji);
    color: var(--colour-secondary);
    pointer-events: none;
  }

  .code-display {
    padding-top: 0.5rem;
    pointer-events: none;
    height: 2.75rem;
  }

  .code-text {
    font-family: var(--font-mono);
  }

  .code-static {
    pointer-events: none;
  }

  /* Maraca-shaking animation */
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

  /* Typing animation – based on a CodePen by Alvaro Montoro */
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
