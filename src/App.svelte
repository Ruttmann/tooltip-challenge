<script>
  import { tooltip } from "./actions/Tooltip";
</script>

<div class="app-container">
  <div class="buttons-container top">
    <button title="Greetings!" use:tooltip>Open tooltip</button>
    <button title="Greetings!" use:tooltip>Open tooltip</button>
    <button title="Greetings!" use:tooltip>Open tooltip</button>
  </div>

  <div class="buttons-container">
    <button title="Greetings!" use:tooltip>Open tooltip</button>
    <button title="Greetings!" use:tooltip>Open tooltip</button>
    <button title="Greetings!" use:tooltip>Open tooltip</button>
  </div>

  <div class="buttons-container bottom">
    <button title="Greetings!" use:tooltip>Open tooltip</button>
    <button title="Greetings!" use:tooltip>Open tooltip</button>
    <button title="Greetings!" use:tooltip>Open tooltip</button>
  </div>
</div>

<style type="text/scss">
  %app-commons {
    display: flex;
    justify-content: space-between;
  }
  .app-container {
    @extend %app-commons;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: darkgray;

    .buttons-container {
      @extend %app-commons;
      padding: 60px 0;
    }

    .top {
      padding: 0 0 50px 0;
    }

    .bottom {
      padding: 50px 0 0 0;
    }
  }
</style>
