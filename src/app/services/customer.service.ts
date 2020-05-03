import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  path:"https://localhost:44376/api/customers/getall";

  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<Customer[]>{

    return this.httpClient.get<Customer[]>(this.path);
  }
}
