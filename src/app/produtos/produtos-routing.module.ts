import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { DescricaoProdutosComponent } from './descricao-produtos/descricao-produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DescricaoProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
