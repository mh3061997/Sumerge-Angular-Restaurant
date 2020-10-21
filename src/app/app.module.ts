import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DoneComponent } from './checkout/done/done.component';
import { RegisteredComponent } from './register/registered/registered.component';
import { LoggedinComponent } from './login/loggedin/loggedin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodService } from './Services/FoodService.service';
import { FooditemComponent } from './menu/fooditem/fooditem.component';
import { CheckoutItemComponent } from './checkout/checkout-item/checkout-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    CheckoutComponent,
    DoneComponent,
    RegisteredComponent,
    LoggedinComponent,
    FooditemComponent,
    CheckoutItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
