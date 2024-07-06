import { Component } from '@angular/core';
import { ApiChuckNorrisService } from '../../../services/api-chuck-norris.service';
import { TradutorService } from '../../../services/tradutor.service';
import { PiadaAleatoriaService } from '../../../services/piada-aleatoria.service';

type Piada = {
  piada_ingles:string,
  piada_portugues:string
}

@Component({
  selector: 'app-piadas',
  templateUrl: './piadas.component.html',
  styleUrl: './piadas.component.scss'
})
export class PiadasComponent {
  piada:Piada = {
    piada_ingles: 'Click one button to recive a joke',
    piada_portugues: 'Clique em um botão para receber uma piada'
  }

  constructor(
    private chuckNorrisService:ApiChuckNorrisService,
    private tradutorService:TradutorService,
    private piadaAleatoriaService:PiadaAleatoriaService
  ){}

  buscaPiadaChuckNorris(){
    this.chuckNorrisService.buscaPiada().subscribe({
      next:(resposta)=>{
        this.piada.piada_ingles = resposta.value;
        this.traduzPiada(resposta.value,'en','pt');
      }
    })
  }

  buscaPiadaAleatoria(){
    this.piadaAleatoriaService.buscaPiada().subscribe({
      next:(resposta)=>{
        this.piada.piada_ingles = resposta.setup+resposta.punchline;
        this.traduzPiada(resposta.setup+resposta.punchline,'en','pt');
      }
    })
  }

  buscaPiadaProgramador(){

  }

  traduzPiada(piada:string, origem:string, destino:string){

    this.tradutorService.traduzir(piada,origem,destino).subscribe({
      next:(resposta)=>{
        this.piada.piada_portugues = resposta;
        
      }
    })
  }



}
