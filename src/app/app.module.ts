import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  // === componentes ===
  declarations: [
    AppComponent,    
  ],
  // === módulos ===
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  // === servicios específicos a un módulo ===
  providers: [],
  bootstrap: [AppComponent]
})

// === módulo principal | app.module.ts ===
export class AppModule { }
