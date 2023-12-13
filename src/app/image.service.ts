import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private images = [
    { src: 'path/to/image1.jpg', caption: 'Caption 1' },
    { src: 'path/to/image2.jpg', caption: 'Caption 2' },
    { src: 'path/to/image3.jpg', caption: 'Caption 3' },
    // Add more images as needed
  ];

  private currentIndex = 0;

  getCurrentImage() {
    return this.images[this.currentIndex];
  }

  rotateImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
