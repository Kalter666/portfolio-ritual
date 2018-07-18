import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { MiniatureComponent } from './main/miniature/miniature.component';
import { ImageComponent } from './main/image/image.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll/lib';
import { TelImgModule } from './shared/tel-img/tel-img.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MiniatureComponent,
    ImageComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule,
    AppRoutingModule,
    SimpleSmoothScrollModule,
    TelImgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
