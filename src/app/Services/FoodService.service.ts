import { EventEmitter } from '@angular/core';

export class FoodService{
    

    fooditems:{name:string,weight:string,price:number,img:string}[]=[{
        name:"Sushi",
        weight:"400g",
        price:600,
        img:"../../assets/sushi.jpg"
      },{
        name:"Burger",
        weight:"350g",
        price:180,
        img:"../../assets/burger.jpg"
      },{
        name:"Chicken Wrap",
        weight:"60g",
        price:75,
        img:"../../assets/chickenwrap.jpg"
      },{
        name:"Veal",
        weight:"400g",
        price:520,
        img:"../../assets/veal.jpg"
      },{
        name:"Falafel",
        weight:"30g",
        price:10,
        img:"../../assets/falafel.jpg"
      }]
      
      OrderChanged= new EventEmitter();

      OrderItems:{quantity:number,item:{name:string,weight:string,price:number,img:string}}[]=[];

      AddOrderItem(item:{name:string,weight:string,price:number,img:string}){
        for(var i=0;i<this.OrderItems.length;i++){
          if(this.OrderItems[i].item.name===item.name){

            this.OrderItems[i].quantity++;
            this.OrderChanged.emit(this.OrderItems);
            break;
  
          }
          
        }
        //console.log("order changed service +++");
      }
      RemoveOrderItem(item:{name:string,weight:string,price:number,img:string}){
        for(var i=0;i<this.OrderItems.length;i++){
          if(this.OrderItems[i].item.name===item.name){
            this.OrderItems[i].quantity--;
            this.OrderChanged.emit(this.OrderItems);
            break;
          }
          
        }
        //console.log("order changed service ---");
      }
        GetOrderTotal() {
          this.OrderItems.forEach(item =>{
            this.OrderTotal +=item.quantity*item.item.price;
          });
          var temp:number=this.OrderTotal;
          this.OrderTotal=0;
          return temp;
        }

      OrderTotal=0;

     constructor(){
           for(var i=0;i<this.fooditems.length;i++){
             this.OrderItems.push({quantity:0,item:this.fooditems[i]});
           }
          // console.log("this is "+ this.OrderItems[0].item.name);
     }
}