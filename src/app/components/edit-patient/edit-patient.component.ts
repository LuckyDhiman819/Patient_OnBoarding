import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  errMessage : string = "";
  patientEditForm : FormGroup;
  old_password?:String;
  new_password?:String;
  confirm_password?:String;
  name?:String = "lucky";
  email?:String = "lucky@gmail.com";
  gender?:String = "male";
  phone?:String = "7988857819";

  details = false;
  lable = "Edit";
  readonly = true;


  constructor(public formBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    //Model Driven FormBuilder



    this.patientEditForm = this.formBuilder.group({
      patient_name : ['',[Validators.required, Validators.minLength(5)]],
      password : ['',[Validators.required,Validators.minLength(5)]],
      confirm_password : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      gender : ['', Validators.required],
      phone : ['', Validators.required]
    })

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveEmployee(){
    console.log(this.patientEditForm.value)
    // this.employeeDetailService.createEmployee(this.adminSignUpForm.value).subscribe();
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;

  }

  show(){
    this.details = true;  
    this.readonly = false;
  }
  readOnly(){
    this.readonly = true;
  }

}
