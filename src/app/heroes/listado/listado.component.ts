import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';  

  borrarHeroe(): void {   
    // === eliminar todos los elementos del array === 
    //let borrarArray: string[] = this.heroes.splice(0, this.heroes.length);
    //this.heroes = [];
    // === eliminar un sólo elemento del array ===
    //this.heroes.shift();  // borra por arriba
    //this.heroes.pop();      // borrar por abajo

    this.heroeBorrado = this.heroes.shift() || '';
    
  } 
  
}
