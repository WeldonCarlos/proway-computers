import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DescricaoProdutosComponent } from './descricao-produtos/descricao-produtos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProdutosComponent,
    DescricaoProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }
