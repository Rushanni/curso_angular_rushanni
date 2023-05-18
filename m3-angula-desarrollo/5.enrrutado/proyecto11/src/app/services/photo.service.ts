import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from '../photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url: string = "https://jsonplaceholder.typicode.com/photos";

  // HttpClient

  constructor(private httpCliente: HttpClient) { }

  // Observable sin HttpResponse: Observable<IPhoto[]>
  findAll(): Observable<IPhoto[]>{
    return this.httpCliente.get<IPhoto[]>(this.url);
  }

  // Observable<IPhoto>
  findById(id: number): Observable<IPhoto>{
    return this.httpCliente.get<IPhoto>('${this.url}/${id}');
  }

}
