import { Router } from "@angular/router";
import { ViewCartService } from "./../../Services/view-cart.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private viewCartService: ViewCartService,
    private router: Router
  ) {}

  items: any;
  cart: any = [];
  comboList: any = [];
  selectedCombo: any = {};
  discount = 0;

  ngOnInit() {
    this.http.get("../../../assets/item.json").subscribe((data) => {
      this.items = data;
    });
    this.http.get("../../../assets/combo.json").subscribe((data) => {
      this.comboList = data;
    });
  }

  addItem(item: any) {
    this.cart = this.viewCartService.addItem(item);
    alert(`${item.name} Added`)
    this.checkOffer()
  }

  removeItem(item: any) {
    let isPresent = false;
     isPresent = this.cart.find(e => {
      if(e.name === item.name){
        return true;
      }
    })
    if(isPresent){
      alert(`${item.name} Removed`)
    }else{
      alert(`${item.name} Not Present in cart`)
    }
    this.cart = this.viewCartService.removeItem(item);
    
    this.checkOffer()
  }

  onViewCart() {
    this.router.navigate(["cart"]);
  }

  selectCombo() {
    this.discount = 0;
    this.selectedCombo = {};
    let data = this.cart.map((item) => item.name);
    this.comboList.forEach((element) => {
      if (element.name.every((elem) => data.includes(elem))) {
        this.discount = Math.max(this.discount, element.discount);
      }
      if (this.discount === element.discount) {
        this.selectedCombo = element;
      }
    });
  }

  checkOffer(){
    this.selectCombo();
    this.viewCartService.setDiscount(this.selectedCombo);
    if (this.discount) {
      alert(`You got a discount of ${this.discount} % on selecting a Combo (Best Offer Applied)`);
    }
  }
}
