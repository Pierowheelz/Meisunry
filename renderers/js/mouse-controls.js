// Timeout to prevent repeat scroll events
let isScrolling = false;
let scrollTimeout = null;

// Listen for the wheel event to adjust the CSS property
imageGrid.addEventListener('wheel', event => {
  processWheel(event);
});
gridWrapper.addEventListener('wheel', event => {
  processWheel(event);
});

function processWheel(event) {
  if( isScrolling ){
    return;
  }
  isScrolling = true;
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout( () => {
    isScrolling = false;
  }, 50 );
  if (event.ctrlKey) {
    event.preventDefault();
  
    // Determine the direction of the scroll
    const zoomAmount = event.deltaY > 0 ? 0.8 : 1.2;
    currentZoom *= zoomAmount;
    currentZoom = Math.max(currentZoom, 0.1);
    updateGridAndSpacing();  
    // Trigger Masonry Layout's layout after changing the CSS property
    grid.layout();    
  }
  else if (event.shiftKey)
  {
    // Determine the direction of the scroll
    const paddingAmount = event.deltaY > 0 ? 0.1 : -0.1;
    currentPadding += paddingAmount;
    currentPadding = Math.max(Math.min(currentPadding, 1), 0.25);
    updateGridAndSpacing();
    // Trigger Masonry Layout's layout after changing the CSS property
    grid.layout();
  }
}
