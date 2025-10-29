import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPsicologo } from './configuracion-psicologo';

describe('ConfiguracionPsicologo', () => {
  let component: ConfiguracionPsicologo;
  let fixture: ComponentFixture<ConfiguracionPsicologo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionPsicologo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionPsicologo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
