import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.componet';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // === componentes | pipes | servicios ... ===
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // === cosas visibles fuera de este módulo | públicas ===
    exports: [
        ListadoComponent
    ],
    // === módulos ===
    imports: [
        CommonModule
    ]

})

export class HeroesModule {}