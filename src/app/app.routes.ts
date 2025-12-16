import { Routes } from '@angular/router';
import { Login } from './components/layout/login/login';
import { Principal } from './components/layout/principal/principal';
import { ProdutoList } from './components/produto/produto-list/produto-list';
import { Produto } from './models/produto';
import { ProdutoComponent } from './components/produto/produto-component/produto-component';
export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path:"login", component: Login},
    {path: "admin", component: Principal, children: [
        {path:"produtos", component: ProdutoList},
        {path: "produtos/new", component: ProdutoComponent},
        {path: "produtos/edit/:id", component: ProdutoComponent}
       
    ]}

];
