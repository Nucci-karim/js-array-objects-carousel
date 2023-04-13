// ogetto per carosello
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// per inserire le immagini
const linkImg = "./assets/"

// --------------------------------------- esercizio vecchio --------------------------------------------//
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

console.log( prev, next )

// funzione per il bottone avanti
next.addEventListener( 'click', function(){
    
    
    let activeItem = document.querySelector('.item.active')
    console.log( activeItem )

    let itemToActive = activeItem.nextElementSibling
    console.log( itemToActive )

    if( activeItem.classList.contains('last') ){
        itemToActive = document.querySelector('.item.first')
    }

    activeItem.classList.remove('active')

    
    itemToActive.classList.add('active')

})

// funzione per il bottone indietro
prev.addEventListener( 'click', function(){
    
    let activeItem = document.querySelector('.item.active')
    console.log( activeItem )

    let itemToActive = activeItem.previousElementSibling
    console.log( itemToActive )

    if( activeItem.classList.contains('first') ){
        itemToActive = document.querySelector('.item.last')
    }

    activeItem.classList.remove('active')
    
    itemToActive.classList.add('active')

})


console.log( document.querySelectorAll('.item.last, .prev') )

// stampa per le immagini del carosello
for(let i = 0; i < images.length; i++){
    document.querySelector(".items").innerHTML = 
    `
    <div class="item first active">
        <img src="${ linkImg }${ images[i]['image']}" alt="">
        <div class="info-img">
            <h1>${images[i]['title']}</h1>
            <p>${images[i]['text']}</p>
        </div>
    </div>
    `
}