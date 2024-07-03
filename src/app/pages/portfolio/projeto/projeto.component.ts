import { Component, OnInit } from '@angular/core';
import { ROUTES, Router, Routes, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.scss'
})
export class ProjetoComponent {

 abreProjeto(rota:string){
   console.log(rota);
   this.roteador.navigate([rota]);
 }



  constructor(
    private roteador: Router
  ){

     
    

  }
}


