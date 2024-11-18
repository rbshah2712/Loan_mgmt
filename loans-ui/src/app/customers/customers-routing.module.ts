import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DelCustomerComponent } from './del-customer/del-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';

const routes: Routes = [
  { path: '', component: ListCustomersComponent },
  { path: 'view/:id', component: ViewCustomersComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'edit/:id', component: EditCustomerComponent },
  { path: 'delete/:id', component: DelCustomerComponent },
  { path: 'search', component: SearchCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
