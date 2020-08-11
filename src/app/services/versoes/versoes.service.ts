import { Versoes } from './../../models/versoes/versoes';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersoesService {

  constructor(
    private http: HttpClient
  ) { }

  listar(id): Observable<Versoes[]> {
    return this.http.get<Versoes[]>(`${environment.apiUrl}/Version?ModelID=${id}`);
  }
}
