import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteProyeccionComponent } from './cliente-proyeccion.component';

describe('ClienteProyeccionComponent', () => {
  let component: ClienteProyeccionComponent;
  let fixture: ComponentFixture<ClienteProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
