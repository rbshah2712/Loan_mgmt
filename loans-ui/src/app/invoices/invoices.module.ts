import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { AddInvoicesComponent } from './add-invoices/add-invoices.component';
import { EditInvoicesComponent } from './edit-invoices/edit-invoices.component';
import { DelInvoicesComponent } from './del-invoices/del-invoices.component';
import { SearchInvoicesComponent } from './search-invoices/search-invoices.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    AddInvoicesComponent,
    EditInvoicesComponent,
    DelInvoicesComponent,
    SearchInvoicesComponent,
    ListInvoicesComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
