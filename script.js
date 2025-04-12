const draggables = document.querySelectorAll('.draggable');
const blank = document.getElementById('blank');
const checkAnswer = document.getElementById('checkAnswer');
const answerMessage = document.getElementById('answerMessage');
let answer = '';

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData("text/plain", event.target.textContent);
        console.log('dragstart', event.target.textContent);
    })
})

blank.addEventListener('dragover', function (event) {
    event.preventDefault();
})

blank.addEventListener('drop', function (event) {
    answer = event.dataTransfer.getData("text/plain");
    console.log('drop', answer);
    blank.value = answer;
})

checkAnswer.addEventListener('click', function () {
    const correctAnswer = 'html';
    answerMessage.style.display = 'block';
    if (answer.toLowerCase() == correctAnswer) {
        answerMessage.textContent = 'Congratulations! Your answer is correct...';
        answerMessage.style.color = 'green';        
    }
    else {
        answerMessage.textContent = 'Oops! Your answer is wrong... Try again';
        answerMessage.style.color = 'red';
    }
})

