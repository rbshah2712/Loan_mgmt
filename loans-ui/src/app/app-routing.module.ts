import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = 
[
  {path: 'login', component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'forgot', component:ForgotComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'loan-types', loadChildren: () => import('./loan-types/loan-types.module').then(m => m.LoanTypesModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }, 
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) }, 
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) }, 
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'loan-types', loadChildren: () => import('./loan-types/loan-types.module').then(m => m.LoanTypesModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
