import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Produto } from '../../../models/produto';
import { ProdutoService } from '../../../services/produto-service';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';

import { ProdutoComponent } from '../produto-component/produto-component';
import { routes } from '../../../app.routes';
@Component({
  selector: 'app-produto-list',
  imports: [],
  templateUrl: './produto-list.html',
  styleUrl: './produto-list.scss',
})
export class ProdutoList {
  //pra conseguri invcar o service
  produtoService = inject(ProdutoService);
  rota = inject(Router);
  lista: Produto[] =[];
  produtoEdit: Produto = new Produto(0,"",0,0); // objeto que vai carregar no
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

edit(id:number){
  this.rota.navigate(['admin/produtos/edit', id]);

}




}
