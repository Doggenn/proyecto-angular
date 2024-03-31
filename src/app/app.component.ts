import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  seccionActual: string = 'home'; 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.actualizarSeccionActual();
      }
    });
  }

  cambiarSeccion(opcion: string) {
    this.seccionActual = opcion;
  }

  private actualizarSeccionActual() {
    const rutaActual = this.router.url;
    if (rutaActual === '/productos') {
      this.seccionActual = 'productos';
    } else if (rutaActual === '/gestion') {
      this.seccionActual = 'gestion';
    }else if (rutaActual === '/login') {
      this.seccionActual = 'login';
    } else if (rutaActual === '/registro') {
    this.seccionActual = 'registro';
    }else if (rutaActual === '/gestion/:productoId') {
      this.seccionActual = 'gestion';
    } else {
      this.seccionActual = 'home';
    }
  }
  onClickLogout() {
    localStorage.removeItem('token_crm');
    alert('Hasta pronto!')
    this.router.navigateByUrl('/login');
  }
  title = 'proyecto_angular';
}
