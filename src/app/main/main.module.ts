import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniatureComponent } from './miniature/miniature.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [
    MiniatureComponent
  ],
  declarations: [MiniatureComponent]
})
export class MainModule {
}
