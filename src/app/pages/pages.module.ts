import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from './prices/prices.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { TelImgModule } from '../shared/tel-img/tel-img.module';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    TelImgModule
  ],
  declarations: [
    PricesComponent,
    ContactsComponent,
    ServicesComponent,
    ShopComponent
  ]
})
export class PagesModule {
}
