import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as checkoutComponent from './checkout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: checkoutComponent.CheckoutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CheckoutRoutingModule { }
