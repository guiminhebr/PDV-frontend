import { Component } from '@angular/core';
import { Vendaservice } from '../../../services/vendaservice';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Venda } from '../../../models/venda';
@Component({
  selector: 'app-vendalist',
  imports: [],
  templateUrl: './vendalist.html',
  styleUrl: './vendalist.scss',
})
export class Vendalist {
  //pra conseguir utilizar o service
  vendaService = inject(Vendaservice);
  rota = inject(Router);
   lista: Venda[] =[];
   findAll(){
    this.vendaService.findAll().subscribe({
      next: lista => {
        this.lista = lista;
      }, error: erro => {
          alert("erro em trazer os dados de venda.");
      }
    })
   }
   ngOnInit() {
  console.log('COMPONENTE INICIADO');
  this.findAll();
}

}
