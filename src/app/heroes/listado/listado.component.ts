import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes:string[]=['spider','koku','ronalod']
  heroedelete:string=""
  borrar(){
    const borrado=this.heroes.shift()||'';
    this.heroedelete=borrado;
  }
}
