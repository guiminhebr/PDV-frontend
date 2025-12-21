import { Routes } from '@angular/router';
import { Login } from './components/layout/login/login';
import { Principal } from './components/layout/principal/principal';
import { ProdutoList } from './components/produto/produto-list/produto-list';
import { Produto } from './models/produto';
import { ProdutoComponent } from './components/produto/produto-component/produto-component';
import { Vendalist } from './components/venda/vendalist/vendalist';
import { Vendacomponent } from './components/venda/vendacomponent/vendacomponent';
export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path:"login", component: Login},
    {path: "admin", component: Principal, children: [
        {path:"produtos", component: ProdutoList},
        {path: "produtos/new", component: ProdutoComponent},
        {path: "produtos/edit/:id", component: ProdutoComponent},
        {path: "vendas", component: Vendalist},
        {path: "vendas/new", component: Vendacomponent}
       
    ]}

];
