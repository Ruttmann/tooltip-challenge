<script>
  import { onMount } from "svelte";
  import POSITION, { createTooltip } from "../actions/Tooltip/positioning";

  export let title;
  export let baseElement;

  let tooltip;
  const arrowWidth = 20;
  const arrowHeight = 10;

  onMount(() => {
    createTooltip(baseElement, tooltip, POSITION.TOP, arrowHeight);
  });
</script>

<div bind:this={tooltip}>
  {title}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={arrowWidth}
    height={arrowHeight}
    viewBox={`0 0 ${arrowWidth} ${arrowHeight}`}>
    <polygon
      points={`0,0 ${arrowWidth},0 ${arrowWidth / 2},${arrowHeight}`}
      fill="#FFF"
    />
  </svg>
</div>

<style type="text/scss">
  %tooltip-commons {
    background: white;
    position: fixed;
  }

  div {
    @extend %tooltip-commons;
    box-shadow: 2px 2px 2px #777;
    border-radius: 4px;
    padding: 4px;
    top: 0;
    left: 0;

    svg {
      position: absolute;
      top: 100%;
      left: calc(50% - 10px);
    }
  }
</style>
