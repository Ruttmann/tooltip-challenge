const POSITION = {
  TOP: "TOP",
  BOTTOM: "BOTTOM",
};

function getPosition(
  baseElementRect,
  tooltipRect,
  position,
  padding,
  documentRect
) {
  let x, y;
  const documentLeftBoundary = documentRect.left + 20;
  const documentRightBoundary = documentRect.right - 20;
  const xAxisBasePosition =
    baseElementRect.left + baseElementRect.width / 2 - tooltipRect.width / 2;

  if (
    baseElementRect.left > documentLeftBoundary &&
    baseElementRect.right < documentRightBoundary
  ) {
    x = xAxisBasePosition;
  } else {
    if (baseElementRect.left < documentLeftBoundary) {
      x = xAxisBasePosition + 20;
    }

    if (baseElementRect.right > documentRightBoundary) {
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

function getBoundaryRect(scrollableParent) {
  if (scrollableParent instanceof Document) {
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
  return scrollableParent.getBoundingClientRect();
}

function placeTooltip(baseElement, tooltip, position, documentRect, padding) {
  const baseElementRect = baseElement.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  let targetPosition = getPosition(
    baseElementRect,
    tooltipRect,
    position,
    padding,
    documentRect
  );

  if (shouldFlip(targetPosition, position, documentRect, tooltipRect)) {
    position = getOppositePosition(position);
    targetPosition = getPosition(
      baseElementRect,
      tooltipRect,
      position,
      padding,
      documentRect
    );
  }

  tooltip.style.transform = `translate(${targetPosition.x}px, ${targetPosition.y}px)`;
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

  const documentRect = getBoundaryRect(document);

  placeTooltip(baseElement, tooltip, position, documentRect, padding);
}

export default POSITION;
export { createTooltip };
