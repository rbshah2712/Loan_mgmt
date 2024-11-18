import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { Customer } from '../models/consumer.model';
import { catchError, Observable, throwError } from 'rxjs';

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

  addCustomer(customer: { firstName: any; lastName: any; emailAddress: any; phoneNumber: any; dob: any; homeAddress: any; workAddress: any; isactive: any;}) : Observable<Customer>{
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.ADD_CUSTOMER;
    return this.httpClient.post<Customer>(url,customer).pipe(catchError(this.handleError));
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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }





}
