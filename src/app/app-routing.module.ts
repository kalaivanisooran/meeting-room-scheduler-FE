import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: LoginPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
