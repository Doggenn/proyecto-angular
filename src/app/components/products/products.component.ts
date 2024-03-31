import { Producto } from 'src/app/components/interfaces/producto';
import { Component, Input, inject } from '@angular/core';
import { ProductosService } from 'src/app/core/service/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  //@Input() productos: Producto[] = [];
  arrProductos:any;
  productosService = inject(ProductosService)


  async ngOnInit() {
     this.productosService.getAll().subscribe(response => {
       console.log(response);
       //return this.arrProductos.push(response)
       this.arrProductos = response;
      })
  }

  // async ngOnInit() {
  //   const response = await this.productosService.getAllProm();
  //   console.log(response);
  //   this.arrProductos = response;
  // }

}
