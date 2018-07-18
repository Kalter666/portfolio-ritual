import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'page', loadChildren: './pages/pages.module#PagesModule' },
  { path: 'article', loadChildren: './articles/articles.module#ArticlesModule' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
