import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PChamadosComponent } from './p-chamados.component';

describe('PChamadosComponent', () => {
  let component: PChamadosComponent;
  let fixture: ComponentFixture<PChamadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PChamadosComponent]
    });
    fixture = TestBed.createComponent(PChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
