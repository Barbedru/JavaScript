const article = [
    {
        id: 1,
        image: "media/portrait.png",
        titre: "Photo Portrait",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero, consectetur non a fugiat"
    },

    {
        id: 2,
        image: "media/paysage.png",
        titre: "Photo Paysage",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero, consectetur non a fugiat"
    },

    {
        id: 3,
        image: "media/poire.png",
        titre: "Photo Artistique",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero, consectetur non a fugiat"
    }
];


function createdCard(article) {

    const cards = document.getElementById("cards");
    cards.classList.add("photos");

    const card = document.createElement("div");
    cards.appendChild(card);
    card.classList.add("card");
    card.classList.add("photo");


    const h3 = document.createElement("titre");
    h3.textContent = article.titre;
    card.appendChild(h3);
    h3.classList = "titre_photo";

    const img = document.createElement("img");
    img.src = article.image;
    img.textContent = article.image;
    card.appendChild(img);
    img.classList = "photos";

    const p = document.createElement("texte");
    p.textContent = article.description;
    card.appendChild(p);
    p.classList = "description";

}


window.addEventListener('load', function () {
    const container = document.getElementById("feed-container");
    article.forEach((article) => {
        createdCard(article, container)
    });
});

async function fetchArticles() {

    const reponse = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10");
    const jokeapi = await reponse.json();
    console.log(jokeapi);

}


//DROPDOWN
function dropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

//ferme le dropdown quand on click en dehors de celui-ci
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//FORMULAIRE DYNAMIQUE
document.getElementById("addButton").addEventListener("click", function () {

    const input = document.getElementById("field");
    const value = input.value.trim();

    if (value !== "") {

        //création nouvel avis
        const avis = document.createElement("p");
        avis.textContent = value;
        avis.classList.add("avis");

        //bouton supprimer
        const btnsup = document.createElement("button");
        btnsup.textContent = "Supprimer";
        btnsup.addEventListener("click", function () {
            avis.remove();
        });

        //ajout bouton à avis
        avis.appendChild(btnsup);

        //ajout de l'avis à la suite du formulaire
        document.getElementById("listAvis").appendChild(avis);
    }
})


//Création de la Galerie

const galleries = [
    {image: "media/1.jpg"},
    {image: "media/2.jpg"},
    {image: "media/3.jpg"},
    {image: "media/4.jpg"},
    {image: "media/5.jpg"},
    {image: "media/6.jpg"},
    {image: "media/7.jpg"},
    {image: "media/8.jpg"},
    {image: "media/9.jpg"},
    {image: "media/166.jpg"},
    {image: "media/167.jpg"},
    {image: "media/198.jpg"},
    {image: "media/168.jpg"},
    {image: "media/169.jpg"},
    {image: "media/199.jpg"},
    {image: "media/170.jpg"},
    {image: "media/171.jpg"},
    {image: "media/200.jpg"},
    {image: "media/182.jpg"},
    {image: "media/183.jpg"},
    {image: "media/184.jpg"},
]

function createdGrid(galleries) {

    //récupère dans l'HTML l'élément id="grid"
    const grid = document.getElementById("grid"); //conteneur principal

    //crée dynamiquement une nouvelle balise <div> en Js
    const gridContainer = document.createElement("div"); //conteneur pour les images
    gridContainer.classList.add("grid", "mosaic"); //Ajoute le css

    //Boucle images
    galleries.forEach(gallerie => {
        const img = document.createElement("img"); //Crée une balise <img> pour chaque image
        img.src = gallerie.image;                                            // Source de l'image
        gridContainer.appendChild(img);                                      //Ajout de l'image dans la div gridContainer
    });

    //Ajouter au HTML
    grid.appendChild(gridContainer);  //Ajout de gridContainer à l’intérieur de l’élément HTML

    return gridContainer;  //stock la variable
}

//Appel fonction
const galleryContainer = createdGrid(galleries); //stock la variable galleryContainer


//Boutons de changement

const mosaicBtn = document.getElementById("mosaicBtn");   // Récup le bouton mosaic dans l'html
const columnBtn = document.getElementById("columnBtn");   // ** column

mosaicBtn.addEventListener("click", function () {    //ajout d'événement, quand on click ça execute la fonction
    galleryContainer.classList.add("mosaic");                       // ajoute la class mosaic
    galleryContainer.classList.remove("column");         // supprime la class column si présente
});

columnBtn.addEventListener("click", () => {  //ajout d'événement, quand on click ça execute la fonction
    galleryContainer.classList.remove("mosaic"); // supprime la class mosaic si présente
    galleryContainer.classList.add("column"); // ajoute la class column
});


//Ajout d'une image


addImgBtn.addEventListener("click", function () {

    const newNew = document.createElement("div");
    const newImg = document.createElement("img");
    newImg.src = "https://picsum.photos/200/300?grayscale";


    const btnsup = document.createElement("button");
    btnsup.textContent = "Supprimer Image";


    btnsup.addEventListener("click", function () {
        newNew.remove();
    });

    newNew.appendChild(newImg);
    newNew.appendChild(btnsup);

    galleryContainer.appendChild(newNew);
});




















