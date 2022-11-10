import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FocalPointsComponent } from './focal-points/focal-points.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateMediaComponent } from './create-media/create-media.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountRecoveryComponent,
    SidenavComponent,
    TopnavComponent,
    HomeComponent,
    FriendsComponent,
    AboutUsComponent,
    ProfileComponent,
    NotificationsComponent,
    FocalPointsComponent,
    SettingsComponent,
    CreateMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
