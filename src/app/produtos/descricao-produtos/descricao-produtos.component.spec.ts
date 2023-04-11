import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoProdutosComponent } from './descricao-produtos.component';

describe('DescricaoProdutosComponent', () => {
  let component: DescricaoProdutosComponent;
  let fixture: ComponentFixture<DescricaoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
