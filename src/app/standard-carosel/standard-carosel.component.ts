import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-carosel',
  templateUrl: './standard-carosel.component.html',
  styleUrls: ['./standard-carosel.component.css']
})
export class StandardCaroselComponent implements OnInit{
	images: string[] = ['https://f2.toyhou.se/file/f2-toyhou-se/images/73553566_4Tpd5uOmbKQIIGX.png',
		'https://f2.toyhou.se/file/f2-toyhou-se/images/68749094_TmCBVJ4x3KDU4cq.png',
		'https://f2.toyhou.se/file/f2-toyhou-se/images/68676731_lO7g1AxRjsPOAHJ.png'];
	currentIndex = 0;
	isEnlarged = false;

	constructor() { }

	ngOnInit(): void {
	}

	nextImage() {
		this.currentIndex = (this.currentIndex + 1) % this.images.length;
		this.isEnlarged = false;
	}

	prevImage() {
		this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
		this.isEnlarged = false;
	}

	toggleEnlargement() {
		this.isEnlarged = !this.isEnlarged;
	  }
}
