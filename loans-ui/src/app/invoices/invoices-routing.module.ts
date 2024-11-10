import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { AddInvoicesComponent } from './add-invoices/add-invoices.component';
import { EditInvoicesComponent } from './edit-invoices/edit-invoices.component';
import { DelInvoicesComponent } from './del-invoices/del-invoices.component';
import { SearchCustomerComponent } from '../customers/search-customer/search-customer.component';
import { SearchInvoicesComponent } from './search-invoices/search-invoices.component';

const routes: Routes = [
  { path: '', component: ListInvoicesComponent },
  { path: 'add', component: AddInvoicesComponent },
  { path: 'edit/:id', component: EditInvoicesComponent },
  { path: 'delete/:id', component: DelInvoicesComponent },
  { path: 'search', component: SearchInvoicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
