<script lang="ts">
  import { themeState, themes } from '$lib/components/theme-selector.svelte'
  import { onMount } from 'svelte'

  function applyTheme() {
    const theme = themes[themeState.currentTheme]
    const root = document.documentElement

    root.style.setProperty('--colour-surface', theme.colours.surface)
    root.style.setProperty('--colour-primary', theme.colours.primary)
    root.style.setProperty('--colour-secondary', theme.colours.secondary)
    root.style.setProperty('--colour-text', theme.colours.text)
  }

  onMount(() => {
    applyTheme()
  })

  $effect(() => {
    // React to theme changes
    themeState.currentTheme
    applyTheme()
  })
</script>
