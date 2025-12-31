<script lang="ts">
  // No state needed - animations controlled via CSS
</script>

<div class="categories">
  <!-- SOUNDS -->
  <a href="/sound" aria-label="Sound projects">
    <button class="btn-category btn-sound" aria-label="Sound projects">
      <p class="emoji maraca">🪇</p>
    </button>
  </a>

  <!-- CODE -->
  <a href="/code" aria-label="Code projects">
    <button class="btn-category btn-code" aria-label="Code projects">
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
    gap: 1.5rem;
    user-select: none;
  }

  .btn-category {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
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
  }

  /* Maraca-shaking animation - triggers on hover/focus */
  .maraca {
    animation: none;
  }

  .btn-sound:hover .maraca,
  .btn-sound:focus-visible .maraca {
    animation: shaking 0.5s infinite;
  }

  @keyframes shaking {
    0%, 100% {
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

  /* Typing animation - triggers on hover/focus */
  .typing {
    --caret: currentcolor;
  }

  .typing::before {
    content: '';
    animation: none;
  }

  .typing::after {
    content: '';
    border-right: 1px solid var(--caret);
    animation: none;
  }

  .btn-code:hover .typing::before,
  .btn-code:focus-visible .typing::before {
    animation: typing 4.5s infinite;
  }

  .btn-code:hover .typing::after,
  .btn-code:focus-visible .typing::after {
    animation: blink 0.5s linear infinite;
  }

  @media (prefers-reduced-motion) {
    .typing::before,
    .typing::after,
    .maraca {
      animation: none !important;
    }
  }
</style>
