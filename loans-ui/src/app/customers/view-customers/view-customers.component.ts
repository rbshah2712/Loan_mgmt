import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/consumer.model';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customerId: string = '';
  customerInfo : any;
  customerdetails: any;

  constructor(private customerService:CustomerService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(data => {
      this.customerId = data['id'];
    });

    this.customerService.viewCustomer(this.customerId).subscribe(data => {
      this.customerInfo = data;
      this.customerdetails = this.customerInfo.CustomerDetails;
      console.log(this.customerdetails._id);
    });
}
}
