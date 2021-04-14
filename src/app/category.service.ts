import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./category";
const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL + '/categories')
  }

  getCategory(id: number):Observable<Category> {
    return this.httpClient.get<Category>(API_URL + '/category/' + id);
  }

  deleteCategory(id: number):Observable<Category> {
    return this.httpClient.delete<Category>(API_URL + '/categories/delete' + id);
  }

  create(category: Category):Observable<Category> {
    return this.httpClient.post<Category>(API_URL + '/category/create', category);
  }

  editCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(API_URL + '/category/edit/' + id, category)
  }

}
