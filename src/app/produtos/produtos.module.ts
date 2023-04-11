import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DescricaoProdutosComponent } from './descricao-produtos/descricao-produtos.component';



@NgModule({
  declarations: [
    ProdutosComponent,
    DescricaoProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
