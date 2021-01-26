import Tooltip from "../../components/Tooltip.svelte";

export function tooltip(baseElement, props) {
  let title;
  let tooltipComponent;

  function showTooltip() {
    if (baseElement.getAttribute("title")) {
      title = baseElement.getAttribute("title");
      baseElement.removeAttribute("title");

      tooltipComponent = new Tooltip({
        props: {
          title,
          baseElement,
          position: props && props.position,
        },
        target: document.body,
      });
    }
  }

  function hideTooltip() {
    if (tooltipComponent) {
      tooltipComponent.$destroy();
      baseElement.setAttribute("title", title);
    }
  }

  const showEvents = ["mouseover", "focus"];
  const hideEvents = ["mouseleave", "blur"];
  const windowHideEvents = ["resize", "scroll"];

  for (const event of showEvents) {
    baseElement.addEventListener(event, showTooltip);
  }

  for (const event of hideEvents) {
    baseElement.addEventListener(event, hideTooltip);
  }

  for (const event of windowHideEvents) {
    window.addEventListener(event, hideTooltip);
  }

  return {
    destroy() {
      for (const event of showEvents) {
        baseElement.removeEventListener(event, showTooltip);
      }

      for (const event of hideEvents) {
        baseElement.removeEventListener(event, hideTooltip);
      }

      for (const event of windowHideEvents) {
        window.removeEventListener(event, hideTooltip);
      }
    },
  };
}
