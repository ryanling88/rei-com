import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-carosel',
  templateUrl: './pixel-carosel.component.html',
  styleUrls: ['./pixel-carosel.component.css']
})
export class PixelCaroselComponent implements OnInit {
	images: string[] = ['https://cdn.discordapp.com/attachments/730452109480296468/1126255109484060884/ezgif-4-01cefe4626.gif',
	'https://cdn.discordapp.com/attachments/730452109480296468/1158548700944154797/pkCbYoz7nrbJOSFQvGv6vBNdraXEBkwHsJiNT6MOHXAxUMlMDjjxkogwvTwT.gif?ex=651ca60f&is=651b548f&hm=72f261c776cd818687cb23005dd7faa1145e95f7c7011d33d4dde001b910b985&',
	'https://cdn.discordapp.com/attachments/730452109480296468/1158547496302301274/Mm0y00LPPeWmnY3LZTmbZYSHtpsBSGmSMmna4RR7xj6dQArlKoH2JhmrRyGC.gif?ex=651ca4ef&is=651b536f&hm=36b875ede13fa567262eb56076a24f1f4764aa344a853d9623424a4d604596b1&'];
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
