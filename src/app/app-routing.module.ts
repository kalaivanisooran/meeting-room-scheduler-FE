import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent }
  { path: 'login', component: LoginPageComponent },
  { path : 'booking', component: BookingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
