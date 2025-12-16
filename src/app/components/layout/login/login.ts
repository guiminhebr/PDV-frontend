import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Route, Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  //pra injetar a funcionalidade de navegação entre paginas (rotas)
  router = inject(Router);
  usuario!:string;
  senha!:string;
  logar(){
    if(this.usuario==="admin" && this.senha==="admin"){
      alert("Login realizado com sucesso")
      this.router.navigate(['/admin']);
    }else {
      alert("Falha no Login")
    }

  }


}
