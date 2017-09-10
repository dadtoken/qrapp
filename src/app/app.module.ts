import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angular2-qrcode';
import { Ng2FileInputModule } from 'ng2-file-input';
import { PdfmakeModule } from 'ng-pdf-make';

import { AuthenticationService, UserService, AlertService, BusyService, ObjectService, WordService,
  FeedbackService } from './services/index';

import { AppComponent } from './components/app/app.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertComponent } from './directives/alert/alert.component';
import { BusyComponent } from './directives/busy/busy.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ObjectDetailsComponent, ObjectCreateComponent } from './components/object/object.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackAdminComponent } from './components/feedback-admin/feedback-admin.component';


// Define the routes
const ROUTES = [

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'object/details/:id',
    component: ObjectDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'object/add',
    component: ObjectCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'feedback/add',
    component: FeedbackComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'feedback',
    component: FeedbackAdminComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent,
    AlertComponent,
    BusyComponent,
    ObjectCreateComponent,
    ObjectDetailsComponent,
    FeedbackComponent,
    FeedbackAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PdfmakeModule,
    RouterModule.forRoot(ROUTES),
    QRCodeModule,
    Ng2FileInputModule.forRoot(
      {
        dropText:"Zrób zdjęcie i dodaj plik QR kodu",
        browseText:"Wybierz"
      }
    )
  ],
  providers: [
    AuthenticationService,
    AlertService,
    BusyService,
    UserService,
    ObjectService,
    WordService,
    FeedbackService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
