import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoEstudiante } from './registo-estudiante';

describe('RegistoEstudiante', () => {
  let component: RegistoEstudiante;
  let fixture: ComponentFixture<RegistoEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistoEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistoEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
