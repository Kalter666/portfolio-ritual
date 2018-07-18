import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToTakeLeaveOfComponent } from './how-to-take-leave-of/how-to-take-leave-of.component';
import { ArticlesComponent } from './articles.component';
import { DeathRegistrationComponent } from './death-registration/death-registration.component';
import { WhatToDoIfMenDiedComponent } from './what-to-do-if-men-died/what-to-do-if-men-died.component';
import { EmbamblingComponent } from './embambling/embambling.component';
import { RitualTransportationComponent } from './ritual-transportation/ritual-transportation.component';
import { WakeOrganisationComponent } from './wake-organisation/wake-organisation.component';
import { GraniteMonumentsComponent } from './granite-monuments/granite-monuments.component';
import { GraveCareComponent } from './grave-care/grave-care.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent,
    children: [
      { path: 'Как проводить человека в последний путь?', component: HowToTakeLeaveOfComponent },
      { path: 'Государственная регистрация смерти', component: DeathRegistrationComponent },
      { path: 'Что делать, когда человек умер?', component: WhatToDoIfMenDiedComponent },
      { path: 'Бальзамирование', component: EmbamblingComponent },
      { path: 'Ритуальные перевозки', component: RitualTransportationComponent },
      { path: 'Организация и проведение поминок в Волгограде', component: WakeOrganisationComponent },
      { path: 'Гранитные памятники', component: GraniteMonumentsComponent },
      { path: 'Уход за могилами', component: GraveCareComponent },
      { path: '**', redirectTo: 'article'}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ArticlesRoutingModule {
}
