import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PProjetosComponent } from './p-projetos.component';

describe('PProjetosComponent', () => {
  let component: PProjetosComponent;
  let fixture: ComponentFixture<PProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PProjetosComponent]
    });
    fixture = TestBed.createComponent(PProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
