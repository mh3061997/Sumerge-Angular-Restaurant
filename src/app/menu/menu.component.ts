import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FoodService } from '../Services/FoodService.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  @ViewChild('fooditem',{static:true}) item:ElementRef;

  fooditems:{name:string,weight:string,price:number,img:string}[];

  constructor(private foodService:FoodService) {
    this.fooditems=foodService.fooditems;
    
   }
  
   logger(){
    console.log(this.item);
   }
  ngOnInit(): void {
    
  }

}
