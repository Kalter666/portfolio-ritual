import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from './prices/prices.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [PricesComponent, ContactsComponent, ServicesComponent]
})
export class PagesModule { }
