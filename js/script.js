"use strict";

let images = null;
let main = null;

/**
 * Fonction temporaire pour faire des tests.
 */
function fonctionBidon(){
	// Appuyez sur F12 dans votre navigateur web pour voir la console
	console.log("Je suis une fonction bidon");
}

/**
 * Affiche une image en plein écran.
 * @param {HTMLElement} image miniature de l'image à afficher en plein écran
 */
function afficherImagePleinEcran(image) {
	// On crée un élément <div> qui va contenir l'image en plein écran
	let ImageSuperpose = document.createElement('div');
	ImageSuperpose.id = 'superposition';

	// On ajoute un écouteur d'événement sur l'élément <div> pour le fermer lorsqu'on cliquera dessus
	ImageSuperpose.addEventListener('click', function() {
		// On retire l'élément <div> de la superposition quand on clique dessus
		main.removeChild(ImageSuperpose);
	}, false);

	// On ajoute l'élément <div> à la fin de la balise <main>
	main.appendChild(ImageSuperpose);

	// On crée un élément <img> qui va contenir l'image en plein écran
	let img = document.createElement('img');
	// On remplace le chemin de l'image miniature par le chemin de l'image en taille originale.
	// ? Il est important que les images est le même nom pour que cela fonctionne.
	img.src = image.src.replace('/miniatures/', '/originales/');
	img.alt = image.alt;
	ImageSuperpose.appendChild(img);

	// On crée un élément <p> qui va contenir le texte alternatif de l'image
	let pAlt = document.createElement('p');
	let pInformation = document.createElement('p');
	pAlt.innerHTML = image.alt;
	pInformation.innerHTML = "Cliquez sur l'image pour fermer";
	ImageSuperpose.appendChild(pAlt);
	ImageSuperpose.appendChild(pInformation);
}

/**
 * Fonction d'initialisation de la galerie.
 * Lancé une fois que le DOM est chargé.
 */
function initialisation() {
	main = document.querySelector('main');

	// On récupère toutes les images de la galerie dans un tableau
	images = document.querySelectorAll('#galerie img');

	// On ajoute un écouteur d'événement sur chaque image
	images.forEach((image) => {
		// 'image' est l'élément <img> courant
		// TODO: Changez le nom de l'événement pour qu'il corresponde à la bonne action
		image.addEventListener('nom_evenement', function() {
			// TODO: Appelez la bonne fonction pour afficher l'image en plein écran
			// * Ne pas oublier de passer 'image' en paramètre (entre les parenthèses)
			fonctionBidon();
		}, false);
	});
}

window.addEventListener('DOMContentLoaded', initialisation, false);
