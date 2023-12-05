// Wait for HTML document to get ready
window.addEventListener('load', function() { // NOT `DOMContentLoaded`
    // Do something about HTML document
    var draggable = new PlainDraggable(document.getElementsByClassName('target')[0,1]);
    console.log(draggable);
    draggable.containment = {left: 0, top: 0, width: '100%', height: '100%'};
  });

  

