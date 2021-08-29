import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmitFormComponent } from './components/admit-form/admit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeAppointmentComponent,
    AdmitFormComponent
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
