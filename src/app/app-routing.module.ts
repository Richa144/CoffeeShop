import { OrderComponent } from './../Components/order/order.component';
import { CartComponent } from './../Components/cart/cart.component';
import { HomePageComponent } from './../Components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/items"
  },
  {
    path: "items",
    component: HomePageComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "order",
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
