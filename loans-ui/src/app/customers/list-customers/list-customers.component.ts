import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customerResult:any;
  customerList:any;
  selectAll: boolean = false;
  
  constructor(private customerservice:CustomerService) { }
  

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList(){
    this.customerservice.getCustomer().subscribe((data) => {
      this.customerResult = data;
      this.customerList = this.customerResult.CustomerDetails;
      console.log(this.customerList);
    });
  }

}
