import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { AboutComponent } from './about/about.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, SharedModule, MainModule, LazyLoadImageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
