import {Component} from '@angular/core'


@Component({
    selector:'app-contador',
    template:`<h1>hola mundo</h1>

    <h3>La base es:<strong>{{base}}</strong></h3>
    
    <button (click)="sumar(base)">+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="sumar(-base)">-{{base}}</button>`
})

export class ContadorComponent{
    title = 'bases';

    numero:number=1;
    base:number=5;
    sumar(valor:number){
    this.numero=this.numero+valor;
    }
}