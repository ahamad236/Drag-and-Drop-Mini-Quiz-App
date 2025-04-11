const draggables = document.querySelectorAll('.draggable');
const dropZone = document.getElementById('dropZone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData("text/plain", event.target.textContent);
    })
})

dropZone.addEventListener('dragover', function (event) {
    event.preventDefault();
    const text = event.dataTransfer.getData("text/plain");
    dropZone.value = text;
})

