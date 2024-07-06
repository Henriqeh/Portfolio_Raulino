import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradutorService {

  constructor(private http:HttpClient) { }

  public traduzir(valor:string,origem:string,destino:string):Observable<any>{
    return this.http.get<any>(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${origem}&tl=${destino}&dt=t&q=${encodeURIComponent(valor)}`).pipe(
      map(resposta=>resposta[0][0][0])
    )
  }
}
