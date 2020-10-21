import { Component, OnInit ,Input} from '@angular/core';
import { FoodService } from 'src/app/Services/FoodService.service';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {
  @Input('myitem') item:{name:string,weight:string,price:number,img:string};

  @Input() quantity:number=0;
  
constructor(private foodService:FoodService){

  // this.foodService.OrderChanged.subscribe((neworder) =>{
  //   //console.log("order changed",neworder);
  //   for(var i=0;i<neworder.length;i++){
  //     if(neworder[i].item.name===this.item.name){
  //       this.item = neworder[i].item;
  //       this.quantity=neworder[i].quantity;
  //       this.subprice = this.quantity*this.item.price;
  //     }
     
  //   }
  //   console.log("checkout item subs",this.item,"quantity",this.quantity);
  // });

  // setInterval(()=>{
  // console.log(this.quantity;)
  // },1000)
}
  
 
  ngOnInit(): void {

   
  }

}
