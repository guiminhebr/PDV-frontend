import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  http = inject(HttpClient);
  API = "http://localhost:8080/produto"

  findAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API+"/findAll");
  }
  delete(produto: Produto): Observable<String>{
    return this.http.delete<String>(this.API+"/delete/"+produto.id, {responseType:'text' as 'json'});
  }
  save(produto: Produto): Observable<String>{
    return this.http.post<String>(this.API+"/save", produto, {responseType:'text' as 'json'});
  }
  update(produto: Produto): Observable<String>{
    return this.http.put<String>(this.API+"/update/"+produto.id, produto, {responseType: 'text' as 'json'});
  }
  findById(id: number): Observable<Produto>{
    return this.http.get<Produto>(this.API+"/findById/"+id);
  }
  
}
