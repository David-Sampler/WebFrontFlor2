import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendasComponent } from './create-vendas.component';

describe('CreateVendasComponent', () => {
  let component: CreateVendasComponent;
  let fixture: ComponentFixture<CreateVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
