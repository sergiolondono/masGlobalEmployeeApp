import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  endpoint = environment.APIEndpoint + 'Employee/';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.endpoint).pipe(
      map(this.extractData));
  }

  getEmployeeById(idEmployee): Observable<any> {
    return this.http.get(this.endpoint + '/' + idEmployee).pipe(
      map(this.extractData));
  }

}
