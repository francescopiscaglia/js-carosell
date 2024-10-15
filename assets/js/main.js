const slides = [
    {
        name: "Mountain",
        description: "The first slide",
        image: "./assets/img/01.jpg",
    },
    {
        name: "Cottage",
        description: "The second slide",
        image: "./assets/img/02.jpg",
    },
    {
        name: "Lake",
        description: "The third slide",
        image: "./assets/img/03.jpg",
    },
    {
        name: "Sky",
        description: "The fourth slide",
        image: "./assets/img/04.jpg",
    },
    {
        name: "Village",
        description: "The fifth slide",
        image: "./assets/img/05.jpg",
    },
];

// seleziono la current slide dalla DOM
let currentSlideEL = document.querySelector(".current-slide");

// seleziono gli elementi dell'immagine dalla DOM
const imgEl = currentSlideEL.querySelector("img");
const titleEl = document.querySelector(".description > h3");
const descEl = document.querySelector(".description > p");
// console.log(imgEl, titleEl, descEl);

const thumbImgEl = document.querySelector(".thumbnail");
// console.log(thumbEl);

// seleziono l'elemento prev
const prevEL = document.querySelector(".prev");

// seleziono l'elemento next
const nextEL = document.querySelector(".next");
// console.log(prevEL, nextEL);

// seleziono il blocco dalla DOM
const previewEL = document.querySelector(".preview");


// Elaborazione 

// parto dalla slide in posizione 0 quindi dalla prima
let activeSlide = 0;

// mando alla DOM le proprietà dell'oggetto in posizione activeSlide
printCurrentSlide(imgEl, titleEl, descEl, slides[activeSlide]);

// thumbnail
for (let i = 0; i < slides.length; i++) {
    const singleSlide = slides[i];

    // creo l'elemnto img nella DOM
    const img = document.createElement("img");

    // console.log(imgEL);
    img.src = singleSlide.image;
    img.width = 120;
    img.height = 70;
    // console.log(img);

    thumbImgEl.appendChild(img)
    
    // event listener
    // quando clicclo sulle singole img mi stampa nella slide di preview l'immagine cliccata
    img.addEventListener("click", function() {
        printCurrentSlide(imgEl, titleEl, descEl, singleSlide)
    });
};


// next 
nextEL.addEventListener("click", next);


// prev 
prevEL.addEventListener("click", prev);


// autoplay
let interval = setInterval(next, 3000);

// clearInterval
previewEL.addEventListener("mouseenter", function() {
    clearInterval(interval);
})

// Riprende l'autoplay
previewEL.addEventListener("mouseleave", function() {
    interval = setInterval(next, 3000);
})




// funzione per cambiare automaticamente le slide
function next() {
    activeSlide++
    // console.log(activeSlide);

    // verifico se diventa maggiore della lunghezza dell'array
    if (activeSlide >= slides.length) {
        // e reimposto il contatore a 0
        activeSlide = 0;
    };
    
    // stampo la slide corrente in posizione activeSlide
    printCurrentSlide(imgEl, titleEl, descEl, slides[activeSlide]);
}

function prev() {
    activeSlide--
    // console.log(activeSlide);

    // verifico se diventa maggiore della lunghezza dell'array
    if (activeSlide < 0) {
        // e reimposto il contatore a 0
        activeSlide = slides.length -1;
    };
    
    // stampo la slide corrente in posizione activeSlide
    printCurrentSlide(imgEl, titleEl, descEl, slides[activeSlide]);
}
 
// funzione per stamapre la slide corrente
/**
 * 
 * @param {element} imgEl 
 * @param {*element} titleEl 
 * @param {element} descEl 
 * @param {object} obj 
 */
function printCurrentSlide (imgEl, titleEl, descEl, obj) {

    const {image, name, description} = obj

    imgEl.src = image
    titleEl.innerText = name;
    descEl.innerText = description;
};
