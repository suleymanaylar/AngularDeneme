import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()

export class ProductService {


  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";

  addProduc(product: Product): Observable<Product> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }

    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProducts(categoryId): Observable<Product[]> {
    let newPath = this.path
    if (categoryId) {
      newPath += "?categoryId=" + categoryId
    }
    return this.http
      .get<Product[]>(newPath).pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir Hata Oluştu : ' + err.error.message
    } else {
      errorMessage = 'Sistemsel bir hata'
    }
    return throwError(errorMessage);
  }

  getProduct(): Observable<Product[]> {
   return this.http
      .get<Product[]>(this.path).pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      );
  }
}
