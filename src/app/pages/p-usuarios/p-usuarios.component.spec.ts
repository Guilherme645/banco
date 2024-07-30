import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PUsuariosComponent } from './p-usuarios.component';

describe('PUsuariosComponent', () => {
  let component: PUsuariosComponent;
  let fixture: ComponentFixture<PUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PUsuariosComponent]
    });
    fixture = TestBed.createComponent(PUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
