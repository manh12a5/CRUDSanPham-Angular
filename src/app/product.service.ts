import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Product} from "./product";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL)
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL + '/create', product);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:8080/view/'+ id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(API_URL + '/edit/' + id, product)
  }

  deleteProduct(id: number):Observable<Product> {
    return this.httpClient.delete<Product>(API_URL + '/delete/' + id);
  }

  getAllProductByCategory(id: number):Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + '/category/' + id);
  }
}
