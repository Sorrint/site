import './styles/index.scss';
import './styles/background.scss';
import './styles/mars.scss';
import './styles/haze.scss';
import './styles/menu.scss';
import './styles/popup.scss'

const popup = document.querySelector('.popup')

let cover = document.querySelector('.cover-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    cover.style.transform = 'translate(-' + x * 500 + 'px)';
});


const dateInput = document.querySelector('input[type="date"]');
    
dateInput.addEventListener('click', () => {
  dateInput.focus();
});

const guestsInput = document.querySelector("#guests")


guestsInput.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, ''); 
});

guestsInput.addEventListener('focus', function () {
    this.value = this.value.replace(/\D/g, ''); 
});

guestsInput.addEventListener('blur', function () {
    if (this.value !== '') {
        const count = this.value
        this.value += ` ${getDeclensions(count, ['человек', 'человека', 'человек'])}` ;
    }
});


function getDeclensions (count, variants) {
    const cases = [2, 0, 1, 1, 1, 2];
    return variants[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]];
};

const closeButton = document.querySelector('.icon-close')

closeButton.addEventListener('click', ()=> {
    popup.style.display = 'none'
})


const popupButton = document.querySelector('.popup__button')

popupButton.addEventListener('click', ()=> {
    popup.style.display = 'none'
})

const menuButton = document.querySelector('.menu__button')

menuButton.addEventListener('click', ()=> {
    popup.style.display = 'block'
})
