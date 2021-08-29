import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admit-form',
  templateUrl: './admit-form.component.html',
  styleUrls: ['./admit-form.component.css']
})
export class AdmitFormComponent implements OnInit {

  admitForm?: FormGroup;
  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.admitForm= this.formBuilder.group({
      name : ['',Validators.required],
      gender : ['',Validators.required],
      mobileNumber : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      address : ['',Validators.required],
      ward : ['',Validators.required],
      reason : ['',Validators.required],
      admitDateAndTime : ['',Validators.required]
    })
  }

  sendAdmitForm(){
    console.log(this.admitForm?.value);
  }

}
