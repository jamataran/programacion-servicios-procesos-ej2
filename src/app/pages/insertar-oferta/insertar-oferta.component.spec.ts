import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarOfertaComponent } from './insertar-oferta.component';

describe('InsertarOfertaComponent', () => {
  let component: InsertarOfertaComponent;
  let fixture: ComponentFixture<InsertarOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
