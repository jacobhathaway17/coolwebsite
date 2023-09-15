document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('output');
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');

    choice1.addEventListener('click', function() {
        output.textContent = "You chose Choice 1. What happens next?";
        choice1.textContent = "Continue to Choice A";
        choice2.textContent = "Continue to Choice B";
    });

    choice2.addEventListener('click', function() {
        output.textContent = "You chose Choice 2. What happens next?";
        choice1.textContent = "Continue to Choice X";
        choice2.textContent = "Continue to Choice Y";
    });
});
