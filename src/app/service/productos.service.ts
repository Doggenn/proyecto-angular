import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Producto } from '../interfaces/producto';
type GetResponse = {
  id: number;
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

  httpClient = inject(HttpClient)

  getAll() {
    return this.httpClient.get<GetResponse>('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products')
  }
  getAllObs() {
    return this.httpClient.get<GetResponse>('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products')
  }
  getAllProm(): Promise<GetResponse> {
    return firstValueFrom(
      this.httpClient.get<GetResponse>('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products')
    )
  }
  create(producto: Producto) {
    return firstValueFrom(
      this.httpClient.post<Producto>('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products', producto)
    );
  }
}
