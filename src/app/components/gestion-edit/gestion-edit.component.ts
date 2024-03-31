import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient
import { Producto } from 'src/app/components/interfaces/producto';
import { ProductosService } from 'src/app/core/service/productos.service';

@Component({
  selector: 'app-gestion-edit',
  templateUrl: './gestion-edit.component.html',
  styleUrls: ['./gestion-edit.component.scss']
})
export class GestionEditComponent {

  formulario: FormGroup;
  productoId: string = '';
  producto!: Producto;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService,
    private httpClient: HttpClient 
  ) {
    this.formulario = this.formBuilder.group({
      name: [],
      price: [],
      description: [],
      stars: [],
      image: []
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.productoId = params['productoId'];
      await this.loadProductoData();
    });
  }

  async onSubmit() {
    try {
      await this.productosService.updateById(this.productoId, this.formulario.value);
      this.router.navigateByUrl('/productos');
      alert('Producto editado correctamente')
      await this.loadProductoData();
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      alert('Datos incorrecto revise el formulario')
    }
  }

  async loadProductoData() {
    try {
      const response = await this.productosService.getById(this.productoId);
      this.producto = response;
      this.updateFormulario();
    } catch (error) {
      console.error('Error al cargar los datos del producto:', error);
    }
  }

  updateFormulario() {
    this.formulario.patchValue({
      name: this.producto.name,
      price: this.producto.price,
      description: this.producto.description,
      stars: this.producto.stars,
      image: this.producto.image
    });
  }

  // Método para actualizar la vista previa del producto en tiempo real
  updatePreview() {
    this.producto = {
      id: this.formulario.value.id,
      name: this.formulario.value.name,
      price: this.formulario.value.price,
      description: this.formulario.value.description,
      stars: this.formulario.value.stars,
      image: this.formulario.value.image
    };
  }
}
