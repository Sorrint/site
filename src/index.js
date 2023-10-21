import './styles/index.scss';
import './styles/background.scss';
import './styles/mars.scss';
import './styles/haze.scss';
import './styles/menu.scss';


let cover = document.querySelector('.cover-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    // let y = e.clientY / window.innerHeight;  
    cover.style.transform = 'translate(-' + x * 500 + 'px)';
});