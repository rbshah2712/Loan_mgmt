import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/consumer.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  form!:FormGroup;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      lastName: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      emailAddress: new FormControl(null, {validators: [Validators.required,Validators.email]}),
      phoneNumber: new FormControl(null, {validators: [Validators.required,Validators.pattern('^[- +()0-9]+$')]}),
      dob: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      homeAddress: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      workAddress: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      
  });
  }

  AddCustomer(){
    if (this.form.invalid) {
      return;
    }
    let currentDate = new Date();
    let createdAt = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
   
      this.customerService.addCustomer(
        this.form.value.firstName,               
        this.form.value.lastName,
        this.form.value.emailAddress,
        this.form.value.phoneNumber,
        this.form.value.dob,
        this.form.value.homeAddress,
        this.form.value.workAddress,
        this.form.value.isactive,
        createdAt); 
      this.form.reset();
  }

}
