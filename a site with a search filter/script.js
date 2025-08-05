
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
 
for( i of products.data){
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    //create image div
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");

    //append image
    let img = document.createElement("img");
    img.setAttribute("src", i.image);
    img.setAttribute("alt", i.name);
    imageDiv.appendChild(img);
    card.appendChild(imageDiv);
   
    //product name container
    let container = document.createElement("div");
    container.classList.add("product-name-container");
    // append PC
    let Pname = document.createElement("h5");
    Pname.classList.add("Pname");
    Pname.innerText = i.name.toUpperCase();
    container.appendChild(Pname);

    //price 
    let price = document.createElement("h6");
    price.classList.add("price");
    price.innerText = '$' + i.price;
    container.appendChild(price);

    let buyBTN = document.createElement("button");
    buyBTN.classList.add("buy");
    buyBTN.innerText = `Buy`;
    container.appendChild(buyBTN);





    card.appendChild(container)
    PC.appendChild(card);
}




function filterProducts(value) {

    let catbtn = document.querySelectorAll(".catbtn");

    catbtn.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add('active');
        } 
        else {
            button.classList.remove('active')

        }
    })

    let cards = document.querySelectorAll(".card");

    cards.forEach((ocard) => {
        if (value === "All") {
            ocard.classList.remove('hide');
        } else {
            // match category exactly as in data (already lowercase and plural)
            if (ocard.classList.contains(value)) {
                ocard.classList.remove('hide');
            } else {
                ocard.classList.add('hide');
            }
        }
    })
};



document.getElementById("searchBtn").addEventListener("click", () => {
    let si = document.getElementById("searchInput").value;
    
    let elements = document.querySelectorAll(`.product-name-container`);
    let cards =  document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if(element.innerText.includes(si.toUpperCase())) {
            cards[index].classList.remove('hide');

        } else {
            cards[index].classList.add('hide');
        }
    })
    

}
)
    
    
    




window.onload = function() { filterProducts('All'); }