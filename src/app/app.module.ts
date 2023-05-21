import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SqliteService } from './services/sqlite.service';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { DatePipe } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './_helpers/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { RegisterrPage } from './registerr/registerr.page';
import { RegisterlComponent } from './registerl/registerl.component';
import { UserfirstpageComponent } from './userfirstpage/userfirstpage.component';



@NgModule({
  declarations: [AppComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    LoginComponent,
    RegisterlComponent,
    UserfirstpageComponent,
    BoardUserComponent],
  imports: [BrowserModule, IonicModule.forRoot(),FormsModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},httpInterceptorProviders,SQLite, SqliteService,Base64ToGallery,Camera,DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
