<script lang="ts">
  import '../app.css'
  import Meta from '$lib/components/meta.svelte'
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'
  import Intro from '$lib/components/intro.svelte'
  import Categories from '$lib/components/categories.svelte'
  import ViewTransitions from '$lib/components/view-transitions.svelte'
  interface Props {
    children?: import('svelte').Snippet
  }

  let { children }: Props = $props()
</script>

<svelte:head>
  <title>Dindles</title>
  <Meta />
</svelte:head>

<!-- Access the browser's view transitions API on navigation -->
<ViewTransitions />

<div class="flex flex-col min-h-screen bg-surface">
  <Header />
  <main class="flex-grow">
    <Intro />
    <Categories />
    {@render children?.()}
  </main>
  <Footer />
</div>

<style>
  /* Remove scrollbar without preventing scrolling */
  /* For Webkit-based browsers (Chrome, Safari and Opera) */
  :global(body::-webkit-scrollbar) {
    display: none;
  }

  /* For IE, Edge and Firefox */
  /* todo: firefox testing */
  :global(body) {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
