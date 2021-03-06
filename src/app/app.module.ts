import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmitFormComponent } from './components/admit-form/admit-form.component';
import { HomeComponent } from './components/home/home.component';

import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';



@NgModule({
  declarations: [
    AppComponent,

    MakeAppointmentComponent,
    AdmitFormComponent,
    HomeComponent,
    AdminSignupComponent,
    PatientSignupComponent,
    PatientLoginComponent,
    AdminLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
