import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Produto } from '../../../models/produto';
import { ProdutoService } from '../../../services/produto-service';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produto-list',
  imports: [],
  templateUrl: './produto-list.html',
  styleUrl: './produto-list.scss',
})
export class ProdutoList {
  //pra conseguri invcar o service
  produtoService = inject(ProdutoService);
  lista: Produto[] =[];
  findAll(){
    this.produtoService.findAll().subscribe({
      next: lista => {
          this.lista = lista;
      }, error: erro =>{
          console.error(erro);

        alert("erro em listar!")
      }
    })
    


}
ngOnInit() {
  console.log('COMPONENTE INICIADO');
  this.findAll();
}
delete(p: Produto){
  this.produtoService.delete(p).subscribe(
    {
      next: mensagem => {
        alert(mensagem);
      },error: erro =>{
        alert("erro em deletar!")
      }
    }
  )
}



}
