import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewCartService {

  constructor() { }
  CartList:any = [];
  selectedCombo = {};
  totalAmt: any;

  addItem(item){
    let isPresent = false;
    isPresent = this.CartList.find((data, index) =>{
      if(data.name === item.name) {
        this.CartList[index].count++;
        return true
      }
    })
    if(!isPresent){
      item['count'] = 1
      this.CartList.push(item)
    }
    return this.CartList
  }

  removeItem(item){
    let isPresent = false;
    isPresent = this.CartList.find((data, index) =>{
      if(data.name === item.name) {
        this.CartList[index].count--;
        if(this.CartList[index].count === 0){
          this.CartList.splice(index,1)
        }
        return true
      }
    })
    return this.CartList
  }

  setCartItems(item){
    this.CartList = item
  }

  getCartItems(){
    return this.CartList
  }

  setDiscount(discount){
    this.selectedCombo = discount
  }

  getTotalDiscount(){
    return this.selectedCombo
  }
  setTotalAmt(amt){
    this.totalAmt = amt;
  }

  getTotalAmt(){
    return this.totalAmt
  }
}
