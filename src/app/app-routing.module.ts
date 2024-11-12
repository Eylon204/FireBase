import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WagaComponent } from './components/waga/waga.component';
import { BagaComponent } from './components/baga/baga.component';
import { EylonComponent } from './components/eylon/eylon.component';
import { SapirComponent } from './components/sapir/sapir.component';
import { GilComponent } from './components/gil/gil.component';

const routes: Routes = [
  { path: 'waga', component: WagaComponent },
  { path: 'baga', component: BagaComponent },
  { path: 'eylon', component: EylonComponent },
  { path: 'sapir', component: SapirComponent },
  { path: 'gil', component: GilComponent },
  { path: 'eylon', component: EylonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }