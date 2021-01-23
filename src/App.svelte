<script>
  import { onMount } from "svelte";
  let counter = 0;
  onMount(() => {
    const interval = setInterval(() => counter++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="App">
  <header class="App-header">
    <img src="/logo.svg" class="App-logo" alt="logo" />
    <p>Page has been open for <code>{counter}</code> seconds.</p>
    <a
      class="App-link"
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer"> Learn Svelte </a>
  </header>
</div>

<style type="text/scss">
  .App-header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);

    .App-logo {
      height: 36vmin;
      pointer-events: none;
      margin-bottom: 3rem;
      animation: App-logo-pulse infinite 1.6s ease-in-out alternate;
    }

    @keyframes App-logo-pulse {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.06);
      }
    }
  }
</style>
