import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { EditLoansComponent } from './edit-loans/edit-loans.component';
import { DelLoansComponent } from './del-loans/del-loans.component';
import { SearchLoansComponent } from './search-loans/search-loans.component';

const routes: Routes = [
  { path: '', component: ListLoansComponent },
  { path: 'add', component: AddLoansComponent },
  { path: 'edit/:id', component: EditLoansComponent },
  { path: 'delete/:id', component: DelLoansComponent },
  { path: 'search', component: SearchLoansComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
