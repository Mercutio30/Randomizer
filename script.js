
function proj() {
const projet = ['site vitrine', 'site Wordpress', 'site e-commerce', 'Blog', ' site Mobile'];
const page = [1, 2, 3, 4, 5, 6];
const theme = ["Actualité", "Gastronomie", "Voyage et transport", "Agences et services de voyages", "Design et développement Web", "Mode et style", "Art Photo et numérique", "Restaurants", "Sports", "Animaux", "Maison et jardin", "Publicité et marketing", "Éducation", "Population et société", "Immobilier", "Science"];
const cont = ["Carousel", "Animation de page", "CSS Pure", "Bootstrap", "Materialize", "Paralax", "Grid", "Formulaire", "ES6", "ES5","Maketing complet", "Gestion de suivi de donnée (GIT, Trello)"];


  
const random1 = projet[Math.floor(Math.random()*projet.length)];
const ran2 = page[Math.floor(Math.random()*page.length)];
const ran3 = theme[Math.floor(Math.random()*theme.length)];
const ran4 = cont[Math.floor(Math.random()*cont.length)];


const res = document.createElement('rest');
res.textContent = `Votre projet de la semaine est un ${random1} de ${ran2} page(s) ayant pour thème ${ran3} et pour contrainte(s) la présence d'un(e) ${ran4}.`;
const box = document.getElementById('rest');
box.appendChild(res);

};

function reset()
{
   document.getElementById("rest").innerHTML = "";
}