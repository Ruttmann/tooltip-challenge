<script>
  import { onMount } from "svelte";
  import POSITION, { createTooltip } from "../actions/Tooltip/positioning";

  export let title;
  export let baseElement;
  export let position = POSITION.TOP;

  let tooltip;
  const arrowWidth = 20;
  const arrowHeight = 10;

  let arrowPlacementX = "CENTER";
  let arrowPlacementY = "BOTTOM";
  let fade = "0";

  onMount(() => {
    const { calcArrowPlacementX, calcArrowPlacementY } = createTooltip(
      baseElement,
      tooltip,
      position,
      arrowHeight
    );

    arrowPlacementX = calcArrowPlacementX;
    arrowPlacementY = calcArrowPlacementY === "TOP" ? "BOTTOM" : "TOP";
    fade = "1";
  });
</script>

<div data-fade={fade} bind:this={tooltip}>
  {title}
  <svg
    data-arrow-x={arrowPlacementX}
    data-arrow-y={arrowPlacementY}
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

<style lang="scss">
  $arrow-height: 10px;
  $arrow-width: 20px;
  %tooltip-commons {
    background: white;
    position: absolute;
  }

  div {
    @extend %tooltip-commons;
    box-shadow: 2px 2px 2px #777;
    border-radius: 4px;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    top: 0;
    left: 0;

    &[data-fade="1"] {
      opacity: 1;
    }
    svg {
      position: absolute;
      top: 100%;

      &[data-arrow-y="TOP"] {
        top: -$arrow-height;
        transform: rotate(180deg);
      }
      &[data-arrow-x="LEFT"] {
        left: calc(25% - #{$arrow-width} / 2);
      }

      &[data-arrow-x="RIGHT"] {
        left: calc(75% - #{$arrow-width} / 2);
      }
      &[data-arrow-x="CENTER"] {
        left: calc(50% - #{$arrow-height});
      }
    }
  }
</style>
