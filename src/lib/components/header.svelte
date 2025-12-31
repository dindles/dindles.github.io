<div class="header">
  <a href="/" class="home-button" aria-label="Home">
    <svg
      class="blob-icon"
      viewBox="0 0 300 299"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Home"
    >
      <path
        d="M2211 5205 c-33 -5 -82 -31 -109 -57 -38 -38 -40 -46 -12 -35 29 11 34 7 23 -21 -7 -19 -13 -39 -13 -43 0 -4 -38 -18 -85 -30 -54 -14 -118 -54 -175 -110 -49 -48 -121 -102 -160 -119 -182 -84 -211 -111 -282 -269 -41 -91 -102 -174 -197 -271 -157 -160 -181 -219 -181 -453 0 -160 -10 -177 -101 -177 -21 0 -68 -27 -106 -60 l-69 -60 4 -685 c4 -641 7 -691 45 -785 23 -55 71 -221 108 -370 41 -163 89 -306 123 -360 30 -49 67 -117 83 -150 93 -200 221 -278 493 -302 166 -15 347 -73 411 -131 48 -43 138 -48 209 -11 41 22 95 22 300 1 532 -55 769 -49 1120 31 50 11 143 30 208 43 106 21 134 38 262 159 114 108 165 142 255 168 62 18 138 54 169 80 54 46 399 172 469 172 17 0 41 11 53 25 11 14 67 43 125 65 168 65 219 140 219 321 0 96 10 167 28 195 162 252 106 1349 -84 1649 -33 52 -66 126 -74 164 -9 43 -55 112 -119 180 -57 61 -120 149 -140 196 -21 47 -50 96 -66 109 -16 14 -37 44 -46 68 -12 32 -49 53 -133 77 -567 157 -644 186 -748 279 -56 51 -116 92 -134 92 -17 0 -47 15 -67 32 -48 44 -207 60 -268 28 -64 -35 -101 -3 -137 118 l-27 92 -97 -6 c-54 -4 -168 -24 -253 -45 l-156 -38 -114 72 c-63 39 -138 87 -166 107 -45 31 -114 48 -279 68 -27 4 -77 2 -109 -3z"
        transform="translate(0, 299) scale(0.05, -0.05)"
      />
    </svg>
  </a>
</div>

<style>
  .header {
    display: flex;
    justify-content: center;
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
    color: var(--colour-surface-light);
  }

  .blob-icon path {
    fill: currentColor;
  }
</style>
