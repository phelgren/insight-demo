import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S36Component } from './s36/s36.component';
import { S38Component } from './s38/s38.component';
import { As400Component } from './as400/as400.component';
import { IbmiComponent } from './ibmi/ibmi.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 's36', component: S36Component },
  { path: 's38', component: S38Component },
  { path: 'as400', component: As400Component },
  { path: 'ibmi', component: IbmiComponent },
  { path: '', redirectTo: '/s36', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
