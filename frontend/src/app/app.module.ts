import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApiserviceService } from './apiservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { FaqComponent } from './faq/faq.component';
import { UpdateComponent } from './update/update.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RegistershopComponent } from './registershop/registershop.component';
import { ViewshopComponent } from './viewshop/viewshop.component';
import { UpdateshopComponent } from './updateshop/updateshop.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    FaqComponent,
    UpdateComponent,
    ViewproductComponent,
    RegistershopComponent,
    ViewshopComponent,
    UpdateshopComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
