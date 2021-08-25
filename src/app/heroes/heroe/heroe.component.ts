import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string='ironman';
    edad:number=15;

    get nombrecapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenernombre():string{
        return `${this.nombre}-${this.edad}`
    }

    cambiarnombre(){
        this.nombre='spiderman';
    }
    cambiaredad(){
        this.edad=10;
    }
}