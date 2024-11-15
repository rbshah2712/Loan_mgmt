import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  //HTTP Method to communicate with backend APIs
  
  getCustomer(){
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMER;
    return this.httpClient.get(url);
  }

  viewCustomer(){

  }

  editCustomer(){

  }

  deleteCustomer(){

  }

  searchCustomer(){

  }




}
