import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, LazyLoadImageModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class SharedModule {}
