import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { DoneComponent } from './checkout/done/done.component';
import { LoggedinComponent } from './login/loggedin/loggedin.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { RegisteredComponent } from './register/registered/registered.component';

const routes: Routes = [{
path:'login',component:LoginComponent ,children:[{path:'loggedin',component:LoggedinComponent}]
},{
path:'register',component:RegisterComponent ,children:[{path:'registered',component:RegisteredComponent}]

},{
path:'menu',component:MenuComponent

},{
path:'checkout',component:CheckoutComponent ,children:[{path:'done',component:DoneComponent}]
}
,{
  path:'',component:LoginComponent ,children:[{path:'loggedin',component:LoggedinComponent}]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
