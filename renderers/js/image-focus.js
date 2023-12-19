// Add a click event listener to the focused image
focusImg.addEventListener('click', () => {
  hideFocusImg();
});

function hideFocusImg() {
  // Hide
  focusImg.parentNode.classList.remove('show');
  // Clear text selection
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) { // For older versions of IE
    document.selection.empty();
  }
}

window.electronAPI.onHideFocusImg((event, value) => { hideFocusImg(); });