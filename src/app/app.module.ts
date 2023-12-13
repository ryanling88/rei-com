import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TosComponent } from './tos/tos.component';
import { ExamplesPricingComponent } from './examples-pricing/examples-pricing.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { StandardCaroselComponent } from './standard-carosel/standard-carosel.component';
import { PixelCaroselComponent } from './pixel-carosel/pixel-carosel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TosComponent,
    ExamplesPricingComponent,
    ImageCarouselComponent,
    StandardCaroselComponent,
    PixelCaroselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
