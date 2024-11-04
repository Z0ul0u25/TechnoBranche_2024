"use strict";

let images = null;
let main = null;

/**
 * Affiche une image en plein écran.
 * @param {HTMLElement} image miniature de l'image à afficher en plein écran
 */
function AfficherImagePleinEcran(image) {
	// On crée un élément <div> qui va contenir l'image en plein écran
	let ImageSuperpose = document.createElement('div');
	ImageSuperpose.id = 'superposition';
	ImageSuperpose.addEventListener('click', function() {
		// On retire l'élément <div> de la superposition quand on clique dessus
		main.removeChild(ImageSuperpose);
	}, false);

	main.appendChild(ImageSuperpose);

	// On crée un élément <img> qui va contenir l'image en plein écran
	let img = document.createElement('img');
	img.src = image.src.replace('/miniatures/', '/originales/');
	img.alt = image.alt;
	ImageSuperpose.appendChild(img);

	// On crée un élément <p> qui va contenir le texte alternatif de l'image
	let p = document.createElement('p');
	p.textContent = image.alt;
	ImageSuperpose.appendChild(p);
}

/**
 * Fonction d'initialisation de la galerie.
 * Lancé une fois que le DOM est chargé.
 */
function initialisation() {
	images = document.querySelectorAll('#galerie img');
	main = document.querySelector('main');

	// On ajoute un écouteur d'événement sur chaque image
	images.forEach(function(image) {
		image.addEventListener('click', function() {
			// On appelle la fonction showImage en lui passant l'image cliquée en paramètre
			AfficherImagePleinEcran(image);
		}, false);
	});
}

window.addEventListener('DOMContentLoaded', initialisation, false);
