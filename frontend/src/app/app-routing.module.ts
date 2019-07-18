import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotographerComponent } from './photographer/photographer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BookingComponent } from './booking/booking.component';
import { PhotographerProfileComponent } from './photographer-profile/photographer-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { FindphotographerComponent } from './findphotographer/findphotographer.component';
import { PhotopdComponent } from './photopd/photopd.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { PhotogdashComponent } from './photogdash/photogdash.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';
import { UpcomingeventComponent } from './upcomingevent/upcomingevent.component';
import { PastactivityComponent } from './pastactivity/pastactivity.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PastbookingsComponent } from './pastbookings/pastbookings.component';
import { FuturebookingsComponent } from './futurebookings/futurebookings.component';
import { PendingbookingsComponent } from './pendingbookings/pendingbookings.component';

const routes: Routes = [
  { path: "index", component: PhotographerComponent},
  { path: "", redirectTo: "index", pathMatch: "full"},
  { path: "sign-up", component: SignUpComponent },
  { path: "booking/:id", component: BookingComponent },
  { path: "profile/:id", component: PhotographerProfileComponent },
  { path: "profile", redirectTo: "index", pathMatch: "full"},
  { path: "dashboard", component: DashboardComponent },
  { path: "MyBookings", component: MyBookingComponent },
  { path: "findphotographer", component: FindphotographerComponent },
  { path: "photographerprofile", component: PhotopdComponent},
  { path: "payment", component: PaymentComponent},
  { path: "login", component: LoginComponent},
  { path: "account", component: ManageAccountComponent },
  { path: "photogdash", component: PhotogdashComponent },
  { path: "pendingrequest", component:PendingrequestComponent},
  { path: "upcomingevent", component:UpcomingeventComponent},
  { path: "pastactivity", component:PastactivityComponent},
  { path:"mybookings", component:MybookingsComponent},
  { path:"pastbookings", component:PastbookingsComponent},
  { path:"futurebookings", component:FuturebookingsComponent},
  { path:"pendingbookings", component:PendingbookingsComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
