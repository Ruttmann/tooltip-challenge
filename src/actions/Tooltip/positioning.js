const POSITION = {
  TOP: "TOP",
  BOTTOM: "BOTTOM",
};

function getPosition(
  baseElementRect,
  tooltipRect,
  position,
  padding,
  boundaryRect
) {
  let x, y;
  const leftBoundary = boundaryRect.left + 20;
  const rightBoundary = boundaryRect.right - 20;
  const xAxisBasePosition =
    baseElementRect.left + baseElementRect.width / 2 - tooltipRect.width / 2;

  if (
    baseElementRect.left > leftBoundary &&
    baseElementRect.right < rightBoundary
  ) {
    x = xAxisBasePosition;
  } else {
    if (baseElementRect.left < leftBoundary) {
      x = xAxisBasePosition + 20;
    }

    if (baseElementRect.right > rightBoundary) {
      x = xAxisBasePosition - 20;
    }
  }

  switch (position) {
    case POSITION.TOP:
      y = baseElementRect.top - tooltipRect.height - padding;
      break;
    case POSITION.BOTTOM:
      y = baseElementRect.bottom + padding;
      break;
  }

  return { x, y };
}

function getOppositePosition(position) {
  switch (position) {
    case POSITION.TOP:
      return POSITION.BOTTOM;
    case POSITION.BOTTOM:
      return POSITION.TOP;
  }
}

function shouldFlip(targetPosition, position, boundaryRect, tooltipRect) {
  switch (position) {
    case POSITION.TOP:
      return targetPosition.y < boundaryRect.top;
    case POSITION.BOTTOM:
      return targetPosition.y + tooltipRect.height > boundaryRect.bottom;
  }
}

function getBoundaryRect(element) {
  let parent = element.parentElement;
  if (parent instanceof Document) {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    return {
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width,
      height,
    };
  }
  return parent.getBoundingClientRect();
}

function getTooltipArrowPlacement(tooltipRect, boundaryRect, targetPosition) {
  // Place arrow to the left
  if (targetPosition.x <= 20) {
    return "LEFT";
  }

  // Place arrow to the right
  if (boundaryRect.right - (targetPosition.x + tooltipRect.width) <= 20) {
    return "RIGHT";
  }
  // Place arrow to the center
  return "CENTER";
}

function placeTooltip(baseElement, tooltip, position, boundaryRect, padding) {
  const baseElementRect = baseElement.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  let targetPosition = getPosition(
    baseElementRect,
    tooltipRect,
    position,
    padding,
    boundaryRect
  );

  if (shouldFlip(targetPosition, position, boundaryRect, tooltipRect)) {
    position = getOppositePosition(position);
    targetPosition = getPosition(
      baseElementRect,
      tooltipRect,
      position,
      padding,
      boundaryRect
    );
  }
  //Place the tooltip in screen
  tooltip.style.transform = `translate(${targetPosition.x}px, ${targetPosition.y}px)`;
  //Return tooltip position
  return { targetPosition, tooltipRect, calcPosition: position };
}

function createTooltip(baseElement, tooltip, position, padding = 0) {
  if (!baseElement || !tooltip) {
    throw new Error(
      "The base element and the tooltip parameters must be valid HTML Elements."
    );
  }

  if (!POSITION[position]) {
    throw new Error("Please select a valid positioning parameter.");
  }

  const boundaryRect = getBoundaryRect(baseElement);

  const { targetPosition, tooltipRect, calcPosition } = placeTooltip(
    baseElement,
    tooltip,
    position,
    boundaryRect,
    padding
  );

  const arrowPlacement = getTooltipArrowPlacement(
    tooltipRect,
    boundaryRect,
    targetPosition
  );

  return {
    calcArrowPlacementX: arrowPlacement,
    calcArrowPlacementY: calcPosition,
  };
}

export default POSITION;
export { createTooltip };
