<script lang="ts">
  interface Props {
    type?: 'black' | 'white' | 'calico' | 'kina' | 'colourful'
  }
  let { type }: Props = $props()

  $effect(() => {
    const script = document.createElement('script')
    script.src = 'https://webneko.net/n20171213.js'
    script.onload = () => {
      ;(window as any).NekoType = type
    }

    document.getElementById('neko-container')?.appendChild(script)
  })
</script>

<div id="neko-container"></div>
