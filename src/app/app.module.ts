import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingComponent } from './booking/booking.component';
import { SearchFormComponent } from './booking/search-form/search-form.component';
import { ResultComponent } from './booking/result/result.component';
import { SearchFormServiceService } from './service/search-form-service.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    BookingComponent,
    SearchFormComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
