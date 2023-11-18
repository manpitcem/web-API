import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RegisterComponent } from './register/register.component';
import { FaqComponent } from './faq/faq.component';
import { UpdateComponent } from './update/update.component';
import { RegistershopComponent } from './registershop/registershop.component';
import { ViewshopComponent } from './viewshop/viewshop.component';
import { UpdateshopComponent } from './updateshop/updateshop.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'faq', component: FaqComponent},
  { path: 'update/:id', component: UpdateComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'viewproduct', component: ViewproductComponent},
  {path: 'registershop', component: RegistershopComponent},
  {path: 'viewshop', component: ViewshopComponent},
  {path: 'updateshop/:id', component: UpdateshopComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
