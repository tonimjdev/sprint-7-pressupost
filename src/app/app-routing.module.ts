import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BenvingudaComponent } from './pressupost/benvinguda/benvinguda.component';
import { HomeComponent } from './pressupost/home/home.component';

const routes: Routes = [
  {
    path: 'benvinguda',
    component: BenvingudaComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'benvinguda',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
