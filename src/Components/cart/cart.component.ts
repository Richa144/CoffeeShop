import { ViewCartService } from "./../../Services/view-cart.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  constructor(
    private viewCartService: ViewCartService,
    private router: Router
  ) {}
  cartItems: any = [];
  itemList: any = [];
  totalPrice = 0;
  selectedCombo: any = {};

  ngOnInit() {
    this.cartItems = this.viewCartService.getCartItems();
    this.selectedCombo = this.viewCartService.getTotalDiscount();
    this.getTotal();
  }

  getTotal() {
    let price = 0;
    this.cartItems.forEach((element) => {
      if (Object.keys(this.selectedCombo).length > 0) {
        if (this.selectedCombo.name.includes(element.name)) {
          price = element.price - this.selectedCombo.discount / 100;
        }
      } else {
        price = element.price;
      }
      price = price * element.count;
      price = (price * element.tax_rate) / 100 + price;
      this.totalPrice = this.totalPrice + price;
    });
  }

  onCheckout() {
    this.viewCartService.setTotalAmt(this.totalPrice);
    this.viewCartService.setCartItems([]);
    this.viewCartService.setDiscount({});
    this.router.navigate(["order"]);
  }
}
