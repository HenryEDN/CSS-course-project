var backdrop = document.querySelector('.backdrop');
var selectPlanButton = document.querySelectorAll('.plan button')
var modal = document.querySelector('.modal');

for (var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', function() {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    })
}

var negativeActionButton = document.querySelector('.modal .modal__action--negative');

// console.log(negativeActionButton);

negativeActionButton.addEventListener('click', function() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});

// console.log(backdrop);
// console.dir(backdrop);

// backdrop.style.display = 'block';