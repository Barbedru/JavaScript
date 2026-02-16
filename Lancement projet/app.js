const article = [
    {   id : 1,
        image:"media/portrait.png",
        titre: "Photo Portrait",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero, consectetur non a fugiat"
    },

    {   id : 2,
        image: "media/paysage.png",
        titre: "Photo Paysage",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero, consectetur non a fugiat"
    },

    {   id : 3,
        image: "media/poire.png",
        titre: "Photo Artistique",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero, consectetur non a fugiat"
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
    img.src=article.image;
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
    article.forEach((article) => { createdCard(article, container) });
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
window.onclick = function(event) {
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

document.getElementById("addButton").addEventListener("click", function() {

    const input = document.getElementById("field");
    const value = input.value.trim();

    if (value !==""){

        //création nouvel avis
        const avis = document.createElement("p");
        avis.textContent = value;

        //ajout de l'avis à la suite du formulaire
        document.getElementById("listAvis").appendChild(avis);


    }
})















