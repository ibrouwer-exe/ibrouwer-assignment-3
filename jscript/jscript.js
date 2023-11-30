// Wait for HTML document to get ready
window.addEventListener('load', function() { // NOT `DOMContentLoaded`
    // Do something abt html document
    var draggable = new PlainDraggable(document.getElementsByClassName('tat1')[0],
