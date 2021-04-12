var tabContact = [];
onClickperson = event => {
    event.preventDefault()
        // recuperation des données

    var person = {}

    person.id = tabContact.length;
    console.log(tabContact.length)
    person.prenom = document.querySelector("#prenom").value;
    person.nom = document.querySelector("#nom").value;
    person.groupe = document.querySelector("#groupe").value;
    person.bio = document.querySelector("#bio").value;
    var image = document.querySelector("#photo")
    image.src = URL.createObjectURL(image.files[0])
    person.image = image.src
    tabContact.push(person);

    // enfants.remove();


    let enfants = document.querySelectorAll("#partForm2Contact > div");
    if (enfants != null) {
        enfants.forEach(element => {
            element.remove()

        });
    }
    tabContact.forEach(element => {

        var listeContact = document.querySelector("#partForm2Contact");
        var new_div = document.createElement("div");
        var new_bdge = document.createElement("div")
        var boutonSupprimer = document.createElement("button");
        var spanId = document.createElement('span');
        spanId.innerText = element.id;
        spanId.className="hidden";
        boutonSupprimer.innerText = spanId.innerText + " X";
        var prenom = document.createElement("h5");
        prenom.innerText = element.prenom + ' ' + element.nom + '   ' + '                 id: ' + spanId.innerText;
        var groupe = document.createElement("p");
        groupe.innerText = element.groupe
        var bio = document.createElement("p");
        bio.innerText = element.bio
        var ContactImage = document.createElement("img");
        ContactImage.src = element.image;

        new_bdge.className = "badge";
        ContactImage.className = "img_badge";
        boutonSupprimer.className = "spanSupr";
        prenom.className = "flex";
        boutonSupprimer.addEventListener("click", onClickDelete)
        prenom.appendChild(boutonSupprimer)

        new_bdge.appendChild(ContactImage);
        new_bdge.appendChild(prenom);
        new_bdge.appendChild(groupe);
        new_bdge.appendChild(bio);
        new_div.appendChild(new_bdge);
        listeContact.appendChild(new_div);

    });

}


// suppression du contact
onClickDelete = event => {

    var contactSelectione = event.target
    var idforDelete = contactSelectione.innerText;
    tabContact.reduce((acc, element, index) => {
        if (element.id == parseInt(idforDelete.toString())) {
            console.log(index);
            contactSelectione.parentNode.parentNode.remove()
            tabContact.splice(index);
        }

    })
}

// ajout photo photo d'illustration
var imageIllus = document.querySelector("#imgillustra");
var image = document.querySelector("#photo")
image.addEventListener("change", () => {
    imageIllus.src = URL.createObjectURL(image.files[0])
})


// vider les contenus

onClickClear = event => {
    event.preventDefault()

    document.querySelector("#prenom").value = " ";
    document.querySelector("#nom").value = " ";
    document.querySelector("#groupe").value = " ";
    document.querySelector("#bio").value = " ";
}

// Recherche du contact
var recherche = document.querySelector("#recherche");
console.log(recherche.value)
recherche.addEventListener('input', () => {

    tabContact.reduce((acc, elementTrouve, index, arr) => {

        if (elementTrouve.id == parseInt(recherche.value.toString()) || elementTrouve.prenom == recherche.value) {

            let enfants = document.querySelectorAll("#partForm2Contact > div");
            if (enfants != null) {
                enfants.forEach(listeContact => {
                    listeContact.remove()

                });
            }

            let listeContactTrouve = document.querySelector("#partForm2Contact");
            let parent = document.createElement("div");
            let badgeTrouve = document.createElement("div")
            let boutonSupprimer = document.createElement("button");
            let spanId = document.createElement('span');
            spanId.innerText = elementTrouve.id;
            boutonSupprimer.innerText = spanId.innerText + " X";
            let prenom = document.createElement("h5");
            prenom.innerText = elementTrouve.prenom + ' ' + elementTrouve.nom + '   ' + '             id: ' + spanId.innerText;
            let groupe = document.createElement("p");
            groupe.innerText = elementTrouve.groupe
            let bio = document.createElement("p");
            bio.innerText = elementTrouve.bio
            let ContactImage = document.createElement("img");
            ContactImage.src = elementTrouve.image;

            badgeTrouve.className = "badge";
            ContactImage.className = "img_badge";
            boutonSupprimer.className = "spanSupr";
            prenom.className = "flex";
            boutonSupprimer.addEventListener("click", onClickDelete)
            prenom.appendChild(boutonSupprimer)

            badgeTrouve.appendChild(ContactImage);
            badgeTrouve.appendChild(prenom);
            badgeTrouve.appendChild(groupe);
            badgeTrouve.appendChild(bio);
            parent.appendChild(badgeTrouve);
            listeContactTrouve.appendChild(parent);

        }
        if (recherche.value == " ") {
            let enfants = document.querySelectorAll("#partForm2Contact > div");
            if (enfants != null) {
                enfants.forEach(element => {
                    element.remove()

                });
            }
            tabContact.forEach(element => {

                var listeContact = document.querySelector("#partForm2Contact");
                var new_div = document.createElement("div");
                var new_bdge = document.createElement("div")
                var boutonSupprimer = document.createElement("button");
                var spanId = document.createElement('span');
                spanId.innerText = element.id;
                boutonSupprimer.innerText = spanId.innerText + " X";
                var prenom = document.createElement("h5");
                prenom.innerText = element.prenom + ' ' + element.nom + '   ' + '                 id: ' + spanId.innerText;
                var groupe = document.createElement("p");
                groupe.innerText = element.groupe
                var bio = document.createElement("p");
                bio.innerText = element.bio
                var ContactImage = document.createElement("img");
                ContactImage.src = element.image;

                new_bdge.className = "badge";
                ContactImage.className = "img_badge";
                boutonSupprimer.className = "spanSupr";
                prenom.className = "flex";
                boutonSupprimer.addEventListener("click", onClickDelete)
                prenom.appendChild(boutonSupprimer)

                new_bdge.appendChild(ContactImage);
                new_bdge.appendChild(prenom);
                new_bdge.appendChild(groupe);
                new_bdge.appendChild(bio);
                new_div.appendChild(new_bdge);
                listeContact.appendChild(new_div);

            });

        } else if (arr.length == index && (elementTrouve.id != parseInt(recherche.value.toString()) && elementTrouve.prenom != recherche.value)) {
            alert("Contact pas trouvé");

            let enfants = document.querySelectorAll("#partForm2Contact > div");
            if (enfants != null) {
                enfants.forEach(element => {
                    element.remove()

                });
            }
            tabContact.forEach(element => {

                var listeContact = document.querySelector("#partForm2Contact");
                var new_div = document.createElement("div");
                var new_bdge = document.createElement("div")
                var boutonSupprimer = document.createElement("button");
                var spanId = document.createElement('span');
                spanId.innerText = element.id;
                boutonSupprimer.innerText = spanId.innerText + " X";
                var prenom = document.createElement("h5");
                prenom.innerText = element.prenom + ' ' + element.nom + '   ' + '                 id: ' + spanId.innerText;
                var groupe = document.createElement("p");
                groupe.innerText = element.groupe
                var bio = document.createElement("p");
                bio.innerText = element.bio
                var ContactImage = document.createElement("img");
                ContactImage.src = element.image;

                new_bdge.className = "badge";
                ContactImage.className = "img_badge";
                boutonSupprimer.className = "spanSupr";
                prenom.className = "flex";
                boutonSupprimer.addEventListener("click", onClickDelete)
                prenom.appendChild(boutonSupprimer)

                new_bdge.appendChild(ContactImage);
                new_bdge.appendChild(prenom);
                new_bdge.appendChild(groupe);
                new_bdge.appendChild(bio);
                new_div.appendChild(new_bdge);
                listeContact.appendChild(new_div);

            });
        }


    })
})


// fin recherche

var btn_create = document.querySelector("#btn")
btn_create.addEventListener("click", onClickperson)

var btn_refresh = document.querySelector("#btn2")
btn_refresh.addEventListener("click", onClickClear)
