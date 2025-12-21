import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Venda } from '../models/venda';
import { Observable

 } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Vendaservice {
  http = inject(HttpClient);
  API = "http://localhost:8080/venda"
   findAll(): Observable<Venda[]>{
     return this.http.get<Venda[]>(this.API+"/vendas/listarVendas");
    }
  
}
