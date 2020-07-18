import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheComprasComponent } from './detalhe-compras.component';

describe('DetalheComprasComponent', () => {
  let component: DetalheComprasComponent;
  let fixture: ComponentFixture<DetalheComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
