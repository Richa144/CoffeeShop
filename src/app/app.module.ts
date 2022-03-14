import { OrderComponent } from './../Components/order/order.component';
import { CartComponent } from './../Components/cart/cart.component';
import { ViewCartService } from './../Services/view-cart.service';
import { HomePageComponent } from './../Components/home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ViewCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
