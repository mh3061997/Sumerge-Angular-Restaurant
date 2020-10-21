import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Services/FoodService.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderitems:{quantity:number,item:{name:string,weight:string,price:number,img:string}}[];
  ordertotal=0;
  cartempty:boolean=true;

  checkEmptyCart(){
    for(var i=0;i<this.orderitems.length;i++){
      if(this.orderitems[i].quantity)
      this.cartempty=false;
    }
  }

  ShowTotal(){
    alert("Your Total is: "+this.foodService.GetOrderTotal());
  }
  constructor(private foodService:FoodService) {
    this.orderitems=foodService.OrderItems;
    this.checkEmptyCart();
    this.ordertotal=foodService.GetOrderTotal();
    this.foodService.OrderTotal=0;
    
    this.foodService.OrderChanged.subscribe((neworderitems)=>{

      this.orderitems=neworderitems;
      //console.log("i updated all");
      this.checkEmptyCart();

  

    })
   }


  ngOnInit(): void {

    
  }

}
