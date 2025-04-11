const draggables = document.querySelectorAll('.draggable');
const dropZone = document.getElementById('dropZone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData("text/plain", event.target.textContent);
        console.log('dragstart', event.target.textContent);
    })
})

dropZone.addEventListener('dragover', function (event) {
    event.preventDefault();
})

dropZone.addEventListener('drop', function (event) {
    const text = event.dataTransfer.getData("text/plain");
    console.log('dragover', text);
    dropZone.value = text;
})

