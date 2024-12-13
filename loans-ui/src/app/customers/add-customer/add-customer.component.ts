import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/consumer.model';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  Customerform!:FormGroup;
  customer!: Customer;
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective | undefined;

  constructor(private customerService:CustomerService, private toasterService: ToastrService, private router:Router) { }

  ngOnInit() {

    this.Customerform = new FormGroup({
      firstName: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      lastName: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      emailAddress: new FormControl(null, {validators: [Validators.required,Validators.email]}),
      phoneNumber: new FormControl(null, {validators: [Validators.required,Validators.pattern('^[- +()0-9]+$')]}),
      dob: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      homeAddress: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      workAddress: new FormControl(null, {validators: [Validators.required,Validators.minLength(3)]}),
      isactive : new FormControl(null ,{validators: [Validators.required]}),
      
    });

  }


  AddCustomer(){
    if (this.Customerform.invalid) {
      return;
    }else{
        let newCustomer = {
          firstName: this.Customerform.value.firstName,
          lastName: this.Customerform.value.lastName,
          emailAddress: this.Customerform.value.emailAddress,
          phoneNumber: this.Customerform.value.phoneNumber,
          dob: this.Customerform.value.dob,
          homeAddress: this.Customerform.value.homeAddress,
          workAddress: this.Customerform.value.workAddress,
          isactive: this.Customerform.value.isactive
      };
      this.customerService.addCustomer(newCustomer).subscribe({
        next: (data) => 
          {
            
            this.customer = data;
            this.resetForm();
          },
          error: (e) => 
          {
            this.showError(e);
          },
          complete: () => console.info('complete')      
        }); 
      
    }
  }

  resetForm(){
    this.Customerform.reset();
    this.showSuccess('Customer Added Successfully');
    this.router.navigate(['/customers'])
  }

  showSuccess(message: string | undefined) {
    this.toasterService.success(message);
  }

  showError(error: string | undefined) {
    this.toasterService.error(error,'', {
      timeOut: 3000,
    });
  }

}
