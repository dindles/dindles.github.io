<script lang="ts">
  import '../app.css'
  import Meta from '$lib/components/meta.svelte'
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'
  import Categories from '$lib/components/categories.svelte'
  interface Props {
    children?: import('svelte').Snippet
  }

  let { children }: Props = $props()
</script>

<svelte:head>
  <title>Dindles</title>
  <Meta />
</svelte:head>

<div class="page-wrapper">
  <Header />
  <main class="main-content">
    <Categories />
    {@render children?.()}
  </main>
  <Footer />
</div>

<style>
  .page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--colour-surface);
  }

  .main-content {
    flex: 1 1 0%;
    padding: var(--space-lg);
  }

  /* Remove scrollbar */
  :global(body::-webkit-scrollbar) {
    display: none;
  }

  /* Firefox scrolls the root element, so scrollbar-width must live on html */
  :global(html) {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
