// image-carousel.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
	images: string[] = ['https://f2.toyhou.se/file/f2-toyhou-se/images/73998860_mTtejqaATwFDoBu.png',
		'https://f2.toyhou.se/file/f2-toyhou-se/images/73626656_5Dr2bb4HKvISGy7.png',
		'https://f2.toyhou.se/file/f2-toyhou-se/images/68722890_kdsq4a0Gnx1W4Uq.png',
		'https://f2.toyhou.se/file/f2-toyhou-se/images/68759275_yDVSN0IPU267k7H.png'];
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
