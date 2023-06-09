import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    RestaurantesComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
