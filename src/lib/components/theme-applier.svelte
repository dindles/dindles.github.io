<script lang="ts">
  import { THEME_STATE, themes } from '$lib/components/theme-selector.svelte'
  import { onMount } from 'svelte'

  function applyTheme() {
    const theme = themes[THEME_STATE.currentTheme]
    const ROOT = document.documentElement

    ROOT.style.setProperty('--colour-surface', theme.colours.surface)
    ROOT.style.setProperty('--colour-primary', theme.colours.primary)
    ROOT.style.setProperty('--colour-secondary', theme.colours.secondary)
    ROOT.style.setProperty('--colour-text', theme.colours.text)
  }

  onMount(() => {
    applyTheme()
  })

  $effect(() => {
    // React to theme changes
    THEME_STATE.currentTheme
    applyTheme()
  })
</script>
