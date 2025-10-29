import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPsicologo } from './registro-psicologo';

describe('RegistroPsicologo', () => {
  let component: RegistroPsicologo;
  let fixture: ComponentFixture<RegistroPsicologo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPsicologo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPsicologo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
