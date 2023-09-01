
const rodri = document.querySelector(' .rodri');
const tremb = document.querySelector(' .tremb');

const jump = () => {
    rodri.classList.add('jump');

    setTimeout(() => {
        rodri.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const trembposition = tremb.offsetLeft
    const rodriposition = +window.getComputedStyle(rodri).bottom.replace('px', '');

        if (trembposition < 85 && trembposition > 0 && rodriposition < 110) {
          
            tremb.style.animation = 'none';
            tremb.style.left = `${trembposition}px`;
            
            rodri.style.animation = 'none';
            rodri.style.bottom = `${rodriposition}px`;

            rodri.src = './imagens/faken.jpg'; 
            rodri.style.width = '190px';
            rodri.style.marginLeft = '1px';
            rodri.style.bottom = '140px';

            

            clearInterval(loop); 
        }
}, 10)

document.addEventListener('keydown', jump);