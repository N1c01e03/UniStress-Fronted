import { Component, signal } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UniStress');
  constructor(private router: Router) {}
  cerrarSesion() {
    // Limpia sesión, token, etc.
    this.router.navigate(['/']);
  }
}
