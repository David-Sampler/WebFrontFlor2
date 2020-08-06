import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumovendaComponent } from './resumovenda.component';

describe('ResumovendaComponent', () => {
  let component: ResumovendaComponent;
  let fixture: ComponentFixture<ResumovendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumovendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumovendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
