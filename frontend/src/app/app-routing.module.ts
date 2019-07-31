import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
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
import { AuthGuard } from '../app/guards/auth-guard.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



const routes: Routes = [
  { path: "index", component: PhotographerComponent },
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "sign-up", component: SignUpComponent },
  { path: "booking/:id", component: BookingComponent, canActivate: [AuthGuard] },
  { path: "profile/:id", component: PhotographerProfileComponent, canActivate: [AuthGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "MyBookings", component: MyBookingComponent, canActivate: [AuthGuard] },
  { path: "findphotographer", component: FindphotographerComponent, canActivate: [AuthGuard] },
  { path: "photographerprofile", component: PhotopdComponent, canActivate: [AuthGuard] },
  { path: "payment", component: PaymentComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "account", component: ManageAccountComponent, canActivate: [AuthGuard] },
  { path: "photogdash", component: PhotogdashComponent, canActivate: [AuthGuard] },
  { path: "pendingrequest", component: PendingrequestComponent, canActivate: [AuthGuard] },
  { path: "upcomingevent", component: UpcomingeventComponent, canActivate: [AuthGuard] },
  { path: "pastactivity", component: PastactivityComponent, canActivate: [AuthGuard] },
  { path: "mybookings", component: MybookingsComponent, canActivate: [AuthGuard] },
  { path: "pastbookings", component: PastbookingsComponent, canActivate: [AuthGuard] },
  { path: "futurebookings", component: FuturebookingsComponent, canActivate: [AuthGuard] },
  { path: "pendingbookings", component: PendingbookingsComponent, canActivate: [AuthGuard] },
  { path: "edit-profile", component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "index" }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
