import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LibraryModule } from '../lib/lib.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LoadingService } from '../shared/services/loading.service';
import { DemoBankng4RoutingModule } from './demo-bank-ng4-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { AllLoansComponent } from './components/products/all-loans/all-loans.component';
import { LoanAgainstPropertyComponent } from './components/products/loan-against-property/loan-against-property.component';
import { PersonalLoanComponent } from './components/products/personal-loan/personal-loan.component';
import { HouseLoanComponent } from './components/products/house-loan/house-loan.component';
import { BusinessLoanComponent } from './components/products/business-loan/business-loan.component';
import { BalanceTransferTopUpLoanComponent } from './components/products/balance-transfer-top-up-loan/balance-transfer-top-up-loan.component';

@NgModule({
  imports: [CommonModule, SharedModule, LibraryModule, TabsModule.forRoot(), DemoBankng4RoutingModule],
  declarations: [
    NavigationComponent,
    DashboardComponent,
    AboutUsComponent,
    ProductsComponent,
    AllLoansComponent,
    LoanAgainstPropertyComponent,
    PersonalLoanComponent,
    HouseLoanComponent,
    BusinessLoanComponent,
    BalanceTransferTopUpLoanComponent
  ],
  entryComponents: [],
  providers: [LoadingService]
})
export class DemoBankng4Module {}
