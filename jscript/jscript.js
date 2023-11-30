// Wait for HTML document to get ready
window.addEventListener('load', function() { // NOT `DOMContentLoaded`
    // Do something about HTML document
    var draggable = new PlainDraggable(document.getElementById('draggable'));
    draggable.containment = document.body;
    // drag end event
    draggable.onDragEnd = function() {
        console.log('drag end');
    }
    
});  

