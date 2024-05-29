let container = document.querySelector('.container')
let items = document.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll ('ul li')
let list = container.querySelector('.list')


let active = 0
let firstPosition = 0
let lastPosition = items.length -1

function setSlider(params) {
        let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active+ 1)
}

function nextButton(params) {
    list.style.setProperty('--calculation', 1)
    items[active].classList.remove('active');
    active = (active === firstPosition) ? lastPosition : active - 1;
    setSlider()
    items[active].classList.add('active');

}

function prevButton(params) {
    list.style.setProperty('--calculation', -1)
    items[active].classList.remove('active');
    active = (active === lastPosition) ? firstPosition : active + 1;
        setSlider()
    items[active].classList.add('active');

}
