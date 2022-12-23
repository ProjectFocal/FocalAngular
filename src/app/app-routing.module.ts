import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//page imports
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { AboutUsComponent } from  './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FocalPointsComponent } from './focal-points/focal-points.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateMediaComponent} from './create-media/create-media.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'account-recovery', component: AccountRecoveryComponent},
  { path: 'home', component: HomeComponent},
  { path: 'friend', component: FriendsComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'notifications', component: NotificationsComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'focal-points', component: FocalPointsComponent},
  { path: 'create-media', component: CreateMediaComponent},
  { path: 'landing-page', component: LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
