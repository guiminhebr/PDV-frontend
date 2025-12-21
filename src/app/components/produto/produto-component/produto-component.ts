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
  //podemops fazer o cadastro por rota, preencha as informações. tem q pegar o id
  //da rota usar findByid do back, preencher com o produto encontrado e preencher
  //inicializa o potencial id de algo que vou atualizar.
  isProdutoValido(): boolean{
    return this.produto.preco >= 0 && this.produto.estoque >=0;
  }


  constructor(){
    let id = this.router.snapshot.params['id'];//pega a variavel id
    if (id > 0){//se for maior que 0, e ubsuco o objeto no back e coloco no objeto Produto que vou editar lá em cima (input)
      this.findById(id);
    }



  }
  save(){
      if(this.produto.id > 0){
        this.produtoService.update(this.produto).subscribe({
          next: mensagem => {
              alert(mensagem);
              this.retorno.emit(mensagem);
              this.router2.navigate(['admin/produtos']);
          }, error: erro => {
                alert("Erro ao atualizar");
          }
        })
      }else {
         this.produtoService.save(this.produto).subscribe({
      next: mensagem => {
        this.retorno.emit(mensagem); 
      this.router2.navigate(['admin/produtos']); // opcional
      }, error: erro => {
        alert("Erro ao salvar")
      }
    })
      }


   
  }
  findById(id: number){
    //busca no back end
    this.produtoService.findById(id).subscribe({
      next: retorno =>{
        this.produto = retorno; //o carro do input lá
      }, error: erro => {
        alert("erro na busca pelo ID")
      }
    })
  }
  


}
