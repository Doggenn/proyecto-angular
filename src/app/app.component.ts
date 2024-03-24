import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  seccionActual: string = 'home'; // Valor por defecto

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Actualizar la seccionActual según la ruta actual
        this.actualizarSeccionActual();
      }
    });
  }

  cambiarSeccion(opcion: string) {
    this.seccionActual = opcion;
  }

  private actualizarSeccionActual() {
    // Obtener la ruta actual del router
    const rutaActual = this.router.url;

    // Lógica para determinar la sección actual basada en la ruta actual del router
    if (rutaActual === '/productos') {
      this.seccionActual = 'productos';
    } else if (rutaActual === '/gestion') {
      this.seccionActual = 'gestion';
    } else {
      this.seccionActual = 'home';
    }
  }
  title = 'proyecto_angular';
}
