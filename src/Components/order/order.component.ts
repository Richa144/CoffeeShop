import { ViewCartService } from './../../Services/view-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router,
    private viewCartService: ViewCartService ) { }

    totalAmt: any;
  ngOnInit() {
    this.totalAmt = this.viewCartService.getTotalAmt();
  }
  backToMenu(){
    this.viewCartService.setTotalAmt(0);
    this.router.navigate([''])
  }

}
