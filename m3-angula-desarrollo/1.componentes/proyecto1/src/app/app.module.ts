import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { HolamundoComponent } from './holamundo/holamundo.component';
import { MinombreesrushanniComponent } from './minombreesrushanni/minombreesrushanni.component';
import { MyComponenteComponent } from './my-componente/my-componente.component';
import { HolaenzoComponent } from './holaenzo/holaenzo.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HolamundoComponent,
    MinombreesrushanniComponent,
    MyComponenteComponent,
    HolaenzoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
