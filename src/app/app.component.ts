import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  seccionActual: string = 'home'
  cambiarSeccion( opcion: string ) {
    this.seccionActual = opcion;
  }
  title = 'proyecto_angular';
}
