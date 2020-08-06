import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCombosComponent } from './create-combos.component';

describe('CreateCombosComponent', () => {
  let component: CreateCombosComponent;
  let fixture: ComponentFixture<CreateCombosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCombosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
