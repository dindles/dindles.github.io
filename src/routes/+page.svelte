<script lang="ts">
  import Neko from '$lib/components/neko.svelte'
</script>

<h1>dindles</h1>
<p>p.l.u.r.</p>

<Neko type="kina" />

<style>
  global:html {
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    color: #3e3e3e;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }
  p {
    color: #79009b;
    font-size: 1.2em;
  }
</style>
