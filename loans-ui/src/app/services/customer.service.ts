import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { Customer } from '../models/consumer.model';

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

  viewCustomer(customerId:any){
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMER;
    return this.httpClient.get(url + "?customerId=" + customerId);
  }

  addCustomer(firstName: string, 
              lastName: string, 
              emailAddress: string, 
              phoneNumber: string, 
              dob: string, 
              homeAddress: string, 
              workAddress: string,
              isactive: string, 
              createdAt: string){
   
    const customerData = new FormData();
    customerData.append("firstName", firstName);
    customerData.append("lastName", lastName);
    customerData.append("emailAddress", emailAddress);
    customerData.append("phoneNumber" , phoneNumber);
    customerData.append("dob" , dob);
    customerData.append("homeAddress" , homeAddress);
    customerData.append("workAddress" , workAddress);
    customerData.append("isactive" , isactive);
    customerData.append("createdAt" , createdAt);

    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.ADD_CUSTOMER;
    return this.httpClient.post(url,customerData);
  }

  editCustomer(firstName: string, 
    lastName: string, 
    emailAddress: string, 
    phoneNumber: string, 
    dob: string, 
    homeAddress: string, 
    workAddress: string,
    isactive: string, 
    createdAt: string){

    const customerData = new FormData();
    customerData.append("firstName", firstName);
    customerData.append("lastName", lastName);
    customerData.append("emailAddress", emailAddress);
    customerData.append("phoneNumber" , phoneNumber);
    customerData.append("dob" , dob);
    customerData.append("homeAddress" , homeAddress);
    customerData.append("workAddress" , workAddress);
    customerData.append("isactive" , isactive);
    customerData.append("createdAt" , createdAt);

    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.UPDATE_CUSTOMER;
    return this.httpClient.put(url,customerData);
  }

  deleteCustomer(){

  }

  searchCustomer(){

  }




}
