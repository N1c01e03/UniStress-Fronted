import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesPsicologo } from './notificaciones-psicologo';

describe('NotificacionesPsicologo', () => {
  let component: NotificacionesPsicologo;
  let fixture: ComponentFixture<NotificacionesPsicologo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionesPsicologo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionesPsicologo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
