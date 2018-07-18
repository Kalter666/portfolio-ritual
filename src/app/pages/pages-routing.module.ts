import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './prices/prices.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'prices', component: PricesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'shop', redirectTo: 'contacts'},
  { path: '**', redirectTo: '../'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
