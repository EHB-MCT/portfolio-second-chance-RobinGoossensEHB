import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private _http: HttpClient) {}

  apiUrl =  environment.BASE_URL + '/student';

  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  saveData(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}`, data);
  }

  deleteData(id: any): Observable<any> {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  editData(id: any, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}/${id}`, data);
  }

  getSingleData(id: any): Observable<any> {
    return this._http.get(`${this.apiUrl}/${id}`);
  }
}
