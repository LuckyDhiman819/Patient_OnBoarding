import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  
  appointmentForm?: FormGroup;
  
  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.appointmentForm= this.formBuilder.group({
      name : ['',Validators.required],
      gender : ['',Validators.required],
      mobileNumber : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      address : ['',Validators.required],
      disease : ['',Validators.required],
      doctor : ['',Validators.required],
      appointmentDateAndTime : ['',Validators.required],
      message : ['']
    })
  }

  sendAppointment(){
    console.log(this.appointmentForm?.value);
  }

}
