<script lang="ts" context="module">
  export type ThemeName = 'Dusty4' | 'Baldur'

  export interface Theme {
    name: ThemeName
    colours: {
      surface: string
      primary: string
      secondary: string
      text: string
    }
  }

  export const themes: Record<ThemeName, Theme> = {
    Dusty4: {
      name: 'Dusty4',
      colours: {
        surface: '#f5f6df',
        primary: '#5a8f78',
        secondary: '#3a5068',
        text: '#372a51',
      },
    },
    Baldur: {
      name: 'Baldur',
      colours: {
        surface: '#f5e8d1',
        primary: '#20a5a6',
        secondary: '#dd5639',
        text: '#0f1b26',
      },
    },
  }

  class ThemeState {
    currentTheme = $state<ThemeName>('Dusty4')
  }

  export const themeState = new ThemeState()
</script>

<script lang="ts">
  const themeNames: ThemeName[] = ['Dusty4', 'Baldur']

  function selectTheme(themeName: ThemeName) {
    themeState.currentTheme = themeName
  }
</script>

<div class="theme-selector">
  {#each themeNames as themeName}
    <button
      onclick={() => selectTheme(themeName)}
      class="theme-button"
      class:active={themeState.currentTheme === themeName}
      aria-label="Select {themeName} theme"
      title={themeName}
    >
      <div class="theme-preview">
        {#each Object.values(themes[themeName].colours) as colour}
          <div class="colour-swatch" style="background-color: {colour}"></div>
        {/each}
      </div>
    </button>
  {/each}
</div>

<style>
  .theme-selector {
    display: flex;
    gap: 0.5rem;
  }

  .theme-button {
    padding: 0.25rem;
    border: 2px solid transparent;
    border-radius: 0.375rem;
    background: transparent;
    cursor: pointer;
    transition: all 200ms ease;
  }

  .theme-button:hover {
    border-color: var(--colour-secondary);
  }

  .theme-button.active {
    border-color: var(--colour-text);
  }

  .theme-preview {
    display: flex;
    gap: 2px;
  }

  .colour-swatch {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 0.125rem;
  }
</style>
