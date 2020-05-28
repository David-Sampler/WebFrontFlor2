import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServicosComponent } from './create-servicos.component';

describe('CreateServicosComponent', () => {
  let component: CreateServicosComponent;
  let fixture: ComponentFixture<CreateServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
