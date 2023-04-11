import { Component } from '@angular/core';
import { IProduto } from '../produtos';
import { produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos: IProduto [] = produtos;

} 
