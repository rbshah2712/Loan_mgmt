import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DelCustomerComponent } from './del-customer/del-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    DelCustomerComponent,
    SearchCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
