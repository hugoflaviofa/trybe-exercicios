window.onload = function(){

    let submitButton = document.getElementById('submit');
    let resetButton = document.getElementById('reset');
    // let nameInput = document.getElementById('name-input');

    

    submitButton.addEventListener('click', function(event){
        event.preventDefault();
    });

    resetButton.addEventListener('click', function(){

        document.getElementById('name-input').innerText = '';
        document.getElementById('email-input').innerText = '';
        document.getElementById('text-area').innerText = '';
        document.getElementById('name-input').focus();
    });
}