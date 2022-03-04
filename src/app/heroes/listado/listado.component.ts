import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent  {

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America']
  heroeBorrado:string = '';
  borrarHeroe(){
    // console.log('borrando...');
    // this.heroes.splice(0,1); Puedo utilizar el splice para eliminar elementos o el shift()
    this.heroeBorrado = this.heroes.shift() || ''; // shift borra el primer elemento del array y lo retorna por eso lo guardamos en una variable y lo mostramos 
    
    
  }


}
