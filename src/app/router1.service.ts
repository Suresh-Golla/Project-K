import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { routerInterface } from './course';

@Injectable({
  providedIn: 'root'
})
export class Router1Service {

  private _url = "../assets/data/course.json";

  constructor(private _http:HttpClient) { }

  getCourse(): Observable<routerInterface[]>{
    return this._http.get<routerInterface[]>(this._url)
    .pipe(catchError(this.errorHandler))
   }

   errorHandler(error:HttpErrorResponse){
     return throwError(error.message || "Server Error")
   }
}
