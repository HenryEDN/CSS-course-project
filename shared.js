//-------------Modal-------------
//Open modal
var backdrop = document.querySelector('.backdrop');
var selectPlanButton = document.querySelectorAll('.plan button')
var modal = document.querySelector('.modal');
var negativeActionButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for (var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', function() {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';

        // modal.className = 'open'; //Overrides the complete class list
        
        backdrop.classList.add('open');
        modal.classList.add('open');

    });
}


backdrop.addEventListener('click', function(){
    closeModal();
    // mobileNav.style.display = 'none';
    // backdrop.style.display ='none';

    backdrop.classList.remove('open');
    mobileNav.classList.remove('open');
});

if(modal){
    negativeActionButton.addEventListener('click', function(){
        closeModal();
    }); 
}

function closeModal(){
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    if(modal){
        modal.classList.remove('open');
    }
}

toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});

// console.dir(backdrop.style['background-color']); //Alter

// console.log(backdrop);
// console.dir(backdrop);

// backdrop.style.display = 'block';