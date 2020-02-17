let cont = document.querySelector('.container');
let wrapper = document.querySelector('.wrapper');
let sections = document.querySelectorAll('.section');
let listControls = document.querySelector('.list-control');

let height = 35;
let position = 0;
let lengthSlide = sections.length;

for(let i = 0; i < lengthSlide; i++){
    listControls.insertAdjacentHTML('beforeend', `<li class="item-control" ><button data-number=${i}></button></li>`)
}

cont.addEventListener('wheel', scrollDirection);

listControls.addEventListener('click', function (e) {
    e = e || window.event;
    let b = e.target;
    let c = document.querySelectorAll('.item-control');

    if(b.hasAttribute('data-number')){
           wrapper.style.marginTop = '-' + b.getAttribute('data-number')*height +'em';

        c.forEach( elm => {
            if(elm.firstChild.classList.contains('active-control')){
                elm.firstChild.classList.remove('active-control');
                b.classList.add('active-control')
            }else {
                b.classList.add('active-control');
            }
        });
    }
} );

function scrollDirection(event) {
    let c = document.querySelectorAll('.item-control');
    var numberSlide = 0;
    var delta;

    event.wheelDelta ? delta = event.wheelDelta : delta = -1*event.deltaY;

    if(delta < 0){
        if(position < 0){ position = 0; }

        position += height;

        position/(lengthSlide-1) > height ?
            wrapper.style.marginTop = height*(lengthSlide-1) :
            wrapper.style.marginTop ='-'+ position +'em';

        numberSlide = position/height;


    }else if(delta > 0){
        if(position > height*lengthSlide){
            position = position-(position -(height*lengthSlide));
        }

        position -= height;

        position/(lengthSlide-1) < height ?
            wrapper.style.marginTop = '-'+position +'em' :
            wrapper.style.marginTop = height*(lengthSlide-1);
        numberSlide = position/height;
    }
    c.forEach( el =>{
        el.firstChild.getAttribute('data-number') != numberSlide ?
            el.firstChild.classList.remove('active-control') :
                el.firstChild.classList.add('active-control');
    });
}
