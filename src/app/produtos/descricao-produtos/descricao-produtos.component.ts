import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-descricao-produtos',
  templateUrl: './descricao-produtos.component.html',
  styleUrls: ['./descricao-produtos.component.css']
})
export class DescricaoProdutosComponent {

  estoque = 1;
  quantidade= 1 ;
  produto: IProduto | undefined;
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService,
  ) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }
  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho!")
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto)
  };

}
