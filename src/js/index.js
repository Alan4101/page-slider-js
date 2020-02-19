let container = document.querySelector('.container');
let wrapper = document.querySelector('.wrapper');
let sections = document.querySelectorAll('.section');
let listControls = document.querySelector('.list-control');

let height = 35;
let position = 0;
let lengthSlide = sections.length;

for(let i = 0; i < lengthSlide; i++){
    // listControls.insertAdjacentHTML('beforeend', `<li class="item-control" ><button data-number=${i}></button></li>`)
    listControls.insertAdjacentHTML('beforeend', '<li class="item-control" ><button data-number='+ i +'></button></li>')
}
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
document.addEventListener('DOMContentLoaded', addSliderPoint);
container.addEventListener('wheel', scrollDirection);
listControls.addEventListener('click', addActiveClass);

function addSliderPoint(){
    let c = document.querySelectorAll('.item-control');
    c[0].firstChild.classList.add('active-control');
}
function addActiveClass(e) {
    e = e || window.event;
    // let b = e.target;
    let b = e.target ? e.target : e.srcElement;
    let c = document.querySelectorAll('.item-control');

    if(b.hasAttribute('data-number')){

        wrapper.style.marginTop = '-' + b.getAttribute('data-number')*height +'em';

        //
        for(let i=0; i<c.length; i++){
            if(c[i].firstChild.classList.contains('active-control')){
                c[i].firstChild.classList.remove('active-control');
                b.classList.add('active-control');
            }else {
                b.classList.add('active-control');

            }
        }
    }
}

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
    if(numberSlide >= 0 && numberSlide < lengthSlide  ){
        c.forEach( function(el ){
            el.firstChild.getAttribute('data-number') != numberSlide ?
                el.firstChild.classList.remove('active-control') :
                el.firstChild.classList.add('active-control');
        });
    }

}

if ('objectFit' in document.documentElement.style === false) {
    document.addEventListener('DOMContentLoaded', function() {
        Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function(image) {
            (image.runtimeStyle || image.style).background = "url(\"".concat(image.src, "\") no-repeat 50%/").concat(image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'))
            image.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='".concat(image.width, "' height='").concat(image.height, "'%3E%3C/svg%3E")
        })
    })
}
