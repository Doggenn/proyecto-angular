import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Producto } from '../../components/interfaces/producto';
type GetResponse = {
  id: string;
  name: string;
  price: number;
  description: string;
  stars: number;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) {} // Inyecta HttpClient en el constructor
  public productoData = {
    id: '',
  name: '',
  price: '',
  description: '',
  stars: '',
  image: ''
  }

  getAll() {
    return this.httpClient.get<GetResponse>('http://localhost:3000/products')
  }
  getAllObs() {
    return this.httpClient.get<GetResponse>('http://localhost:3000/products')
  }
  getAllProm(): Promise<GetResponse> {
    return firstValueFrom(
      this.httpClient.get<GetResponse>('http://localhost:3000/products')
    )
  }
  getById(productoId: string) {
    return firstValueFrom(
      this.httpClient.get<Producto>(`http://localhost:3000/products/${productoId}`/**, this.createHeaders() */)
    )
  }
  updateById(productoId: string, editProducto: Producto) {
    return firstValueFrom(
      this.httpClient.put(
        `http://localhost:3000/products/${productoId}`,
        editProducto,
        /**, this.createHeaders() */
      )
    );
  }
  create(producto: Producto) {
    return firstValueFrom(
      this.httpClient.post<Producto>('http://localhost:3000/products', producto)
    );
  }
}
