import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EylonComponent } from './components/eylon/eylon.component';
import { SapirComponent } from './components/sapir/sapir.component';
import { GilComponent } from './components/gil/gil.component';
import { BagaComponent } from './components/baga/baga.component';
import { WagaComponent } from './components/waga/waga.component';

@NgModule({
  declarations: [
    AppComponent,
    EylonComponent,
    SapirComponent,
    GilComponent,
    BagaComponent,
    WagaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
