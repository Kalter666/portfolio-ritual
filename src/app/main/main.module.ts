import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniatureComponent } from './miniature/miniature.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MainComponent } from './main.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [
    MiniatureComponent,
    MainComponent
  ],
  declarations: [MiniatureComponent, MainComponent, ImageComponent]
})
export class MainModule {
}
