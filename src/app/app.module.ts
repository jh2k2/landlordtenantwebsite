import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BotFooterComponent } from './bot-footer/bot-footer.component';
import { HeroComponent } from './hero/hero.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ForTlComponent } from './for-tl/for-tl.component';
import { TextVariationComponent } from './text-variation/text-variation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BotFooterComponent,
    HeroComponent,
    GalleryComponent,
    ForTlComponent,
    TextVariationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
