import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  productosService = inject(ProductosService)
  @Input() productos: Producto[] = [];
  @Output() productoCreado: EventEmitter<Producto> = new EventEmitter();
  nuevoProducto: Producto = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    stars: 0,
    image: ''
  };
    arrProductos: Producto[] = [];
  onClick() {
    console.log(this.nuevoProducto)
    // Emitimos el producto hacia el componente padre.

    this.productoCreado.emit(this.nuevoProducto);
    this.arrProductos.push(this.nuevoProducto);
    //this.nuevoProducto.create(this.arrProductos)
    this.nuevoProducto = { id: 0, name: '', price: 0, description: '', stars: 0, image: '' }
  }
}
