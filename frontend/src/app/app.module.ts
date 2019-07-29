import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { PhotographerProfileComponent } from './photographer-profile/photographer-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BookingComponent } from './booking/booking.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { FindphotographerComponent } from './findphotographer/findphotographer.component';
import { PhotopdComponent } from './photopd/photopd.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import {DialogModule} from 'primeng/dialog';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { PhotogdashComponent } from './photogdash/photogdash.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';
import { UpcomingeventComponent } from './upcomingevent/upcomingevent.component';
import { PastactivityComponent } from './pastactivity/pastactivity.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PastbookingsComponent } from './pastbookings/pastbookings.component';
import { FuturebookingsComponent } from './futurebookings/futurebookings.component';
import { PendingbookingsComponent } from './pendingbookings/pendingbookings.component';
import { AuthGuard } from '../app/guards/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    PhotographerComponent,
    PhotographerProfileComponent,
    SignUpComponent,
    BookingComponent,
    DashboardComponent,
    MyBookingComponent,
    FindphotographerComponent,
    PhotopdComponent,
    PaymentComponent,
    LoginComponent,
    ManageAccountComponent,
    PhotogdashComponent,
    PendingrequestComponent,
    UpcomingeventComponent,
    PastactivityComponent,
    MybookingsComponent,
    PastbookingsComponent,
    FuturebookingsComponent,
    PendingbookingsComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
