import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Services/FoodService.service';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit {
  @Input('myitem') item:{name:string,weight:string,price:number,img:string};
  constructor(private FoodService:FoodService) { }
  quantity:number=0;
  

  OnAddItem(){
  
      this.FoodService.AddOrderItem(this.item);
      this.quantity++;
      console.log(this.quantity)
    
  }

  OnRemoveItem(){
    if((this.quantity)-1>=0){
  
      this.FoodService.RemoveOrderItem(this.item);
      this.quantity--;
      console.log(this.quantity);
    }
  }
  ngOnInit(): void {
    
  }

}
