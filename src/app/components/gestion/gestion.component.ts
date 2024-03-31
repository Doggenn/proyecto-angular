import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/components/interfaces/producto';
import { ProductosService } from 'src/app/core/service/productos.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  formulario: FormGroup;
  productosService = inject(ProductosService)
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute);
 
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
  constructor() {
    this.formulario = this.formBuilder.group({
      name: [],
      price: [],
      description: [],
      stars: [],
      image: []
    })
  }
    arrProductos: Producto[] = [];
  async onSubmit() {
    console.log(this.nuevoProducto)
    // Emitimos el producto hacia el componente padre.

    this.productoCreado.emit(this.nuevoProducto);
    console.log(this.formulario.value)
    //const response = await this.productosService.create(this.formulario.value);
    if (this.nuevoProducto) { //response.id
      alert('Producto registrado');
      this.router.navigateByUrl('/productos');
      this.productosService.create(this.formulario.value);
    } else {
      alert('Revisa el formulario')
    }
    this.arrProductos.push(this.nuevoProducto);
    //this.nuevoProducto.create(this.arrProductos)
    this.nuevoProducto = { id: 0, name: '', price: 0, description: '', stars: 0, image: '' }
  }
  updatePreview() {
    this.nuevoProducto = this.formulario.value;
}
}
