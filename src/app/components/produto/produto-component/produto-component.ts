import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Produto } from '../../../models/produto';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../services/produto-service';
@Component({
  selector: 'app-produto-component',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.scss',
})
export class ProdutoComponent {
  @Input("produto") produto: Produto = new Produto(0,"",0,0);
  @Output("retorno") retorno = new EventEmitter<any>;
  router = inject(ActivatedRoute);
  router2 = inject(Router);
  produtoService = inject(ProdutoService);
  save(){
      if(this.produto.id > 0){
        this.produtoService.update(this.produto).subscribe({
          next: mensagem => {
              alert(mensagem);
              this.retorno.emit(mensagem);
              this.router2.navigate(['admin/produtos']);
          }, error: erro => {
                alert("erro ao atualizar");
          }
        })
      }else {
         this.produtoService.save(this.produto).subscribe({
      next: mensagem => {
        this.retorno.emit(mensagem); 
      this.router2.navigate(['admin/produtos']); // opcional
      }, error: erro => {
        alert("erro")
      }
    })
      }


   
  }
  


}
