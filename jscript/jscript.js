// Wait for HTML document to get ready
window.addEventListener('load', function() { // NOT `DOMContentLoaded`

    var tattoo1 = new PlainDraggable(document.getElementById('Anchor'));
      tattoo1.containment = {left: 0, top: 0, width: '100%', height: '100%'};
    var tattoo2 = new PlainDraggable(document.getElementById('Rope'));
      tattoo2.containment = {left: 0, top: 0, width: '100%', height: '100%'};
    var tattoo3 = new PlainDraggable(document.getElementById('Star'));
      tattoo3.containment = {left: 0, top: 0, width: '100%', height: '100%'};
    var tattoo4 = new PlainDraggable(document.getElementById('Wheel'));
      tattoo4.containment = {left: 0, top: 0, width: '100%', height: '100%'};
  
    var tattoo6 = new PlainDraggable(document.getElementById('twoflower'));
      tattoo6.containment = {left: 0, top: 0, width: '100%', height: '100%'};
  
    var tattoo8 = new PlainDraggable(document.getElementById('tat8'));
      tattoo8.containment = {left: 0, top: 0, width: '100%', height: '100%'};
  });

  

