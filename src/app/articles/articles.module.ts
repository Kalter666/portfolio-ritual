import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { HowToTakeLeaveOfComponent } from './how-to-take-leave-of/how-to-take-leave-of.component';
import { DeathRegistrationComponent } from './death-registration/death-registration.component';
import { WhatToDoIfMenDiedComponent } from './what-to-do-if-men-died/what-to-do-if-men-died.component';
import { EmbamblingComponent } from './embambling/embambling.component';
import { RitualTransportationComponent } from './ritual-transportation/ritual-transportation.component';
import { WakeOrganisationComponent } from './wake-organisation/wake-organisation.component';
import { GraniteMonumentsComponent } from './granite-monuments/granite-monuments.component';
import { GraveCareComponent } from './grave-care/grave-care.component';
import { ArticlesRoutingModule } from './articles-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [
    ArticlesComponent,
    HowToTakeLeaveOfComponent,
    DeathRegistrationComponent,
    WhatToDoIfMenDiedComponent,
    EmbamblingComponent,
    RitualTransportationComponent,
    WakeOrganisationComponent,
    GraniteMonumentsComponent,
    GraveCareComponent
  ]
})
export class ArticlesModule {
}
