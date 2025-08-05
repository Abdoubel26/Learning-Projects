
let products = {
    data: [
        {   name: "long double vented Jacket",
            category: "jackets",
            image: "LDVJ.webp",
            price: "100"
            },
        {   name: "black leather jacket",
            category: "jackets",
            image: "BLJ.webp",
            price: "120"
        },
        {   name: "blue denim jacket",
            category: "jackets",
            image: "BDJ.jpg",
            price: "110"
        },

        {   name: "jeans",
            category: "pants",
            image: "J.jpeg",
            price: "60"
        },
        {   name: "black jeans",
            category: "pants",
            image: "BJ.webp",
            price: "65"
        },
        {   name: "white t-shirt",
            category: "t-shirts",
            image: "WT.webp",
            price: "30"
        },
        {   name: "black t-shirt",
            category: "t-shirts",
            image: "BT.webp",
            price: "35"

        },
        {   name: "silver watch",
            category: "watches",
            image: "SW.webp",
            price: "150"
        },
        {   name: "gold watch",
            category: "watches",
            image: "GW2.jpg",
            price: "200"
        }

    ]
};

let PC = document.getElementById("products-container");


for (let i of products.data) {
    let card = document.createElement('div');
    card.classList.add('card', i.category, 'hide' );
    //create image container
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    //create image element
    let img = document.createElement("img");
    img.classList.add('image');
    img.setAttribute('src', i.image);
    img.setAttribute('alt', i.name);
    imageContainer.appendChild(img);
    card.appendChild(imageContainer);


    //create name, price and buy button container
    let container = document.createElement('div');
    container.classList.add('container');

    //create h5 tag for the product's name
    let nametag = document.createElement('h5');
    nametag.classList.add('name');
    nametag.textContent = `${i.name.toUpperCase()}`;
    container.appendChild(nametag);
    
    

    // create price tag
    let price = document.createElement('h6');
    price.classList.add('price');
    price.textContent = `$${i.price}`;
    container.appendChild(price);

    // create buy btn 
    let buybtn = document.createElement('button');
    buybtn.classList.add('buy');
    buybtn.textContent = "Buy";
    container.appendChild(buybtn);

    card.appendChild(container);
    document.getElementById("products-container").appendChild(card);
}



function filterProducts(value){
    let buttons = document.querySelectorAll(".catbtn");
    buttons.forEach( (button) => {
        if(value.toUpperCase() === button.textContent.toUpperCase()) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    })

    let cards = document.querySelectorAll(".card");
    cards.forEach( (card) => { 
        if(value === "All"){
            card.classList.remove('hide');
        } else {
            if(card.classList.contains(value)) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide')
            }
        }

    })
}



let searchbtn = document.getElementById("searchBtn");

searchbtn.addEventListener('click', () => {

    let searchInput = document.getElementById("searchInput").value;
    let containers = document.querySelectorAll('.container');
    

    containers.forEach( (container, index) => {
        let cards = document.querySelectorAll(".card");
        if(container.textContent.includes(searchInput.toUpperCase())){
            cards[index].classList.remove('hide');
        } else {
            cards[index].classList.add('hide');
        }
    })
})


window.onload = function() {
    filterProducts('All');
}