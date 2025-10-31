import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-suscripcion',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './suscripcion.html',
  styleUrls: ['./suscripcion.css'],
})
export class Suscripcion {

  constructor(private router: Router) {}

  plan = 'Premium';
  estado: 'Activo' | 'Cancelado' = 'Activo';
  inicio = new Date(2025, 8, 1);
  fin    = new Date(2026, 9, 1);
  beneficios = [
    'Sesiones ilimitadas',
    'Acceso a especialistas',
    'Prioridades de atención'
  ];

  cancelar() {
    this.estado = 'Cancelado';
  }

  renovar() {
    this.router.navigate(['/pagos']); // ✅ ir a pantalla pagos
  }
}
