import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { EditLoansComponent } from './edit-loans/edit-loans.component';
import { DelLoansComponent } from './del-loans/del-loans.component';
import { SearchLoansComponent } from './search-loans/search-loans.component';


@NgModule({
  declarations: [
    LoansComponent,
    ListLoansComponent,
    AddLoansComponent,
    EditLoansComponent,
    DelLoansComponent,
    SearchLoansComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
