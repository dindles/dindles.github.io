<script>
  import { page } from '$app/state'
</script>

<div class="error-container">
  <h1>404</h1>
  <p>page not found: {page.url.pathname}</p>
  <a href="/">rewind</a>
</div>

<style>
  .error-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
