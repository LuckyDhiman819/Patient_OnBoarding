import { Component, OnInit } from '@angular/core';
import { Doctors } from 'src/app/models/doctors';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctor:Doctors[] = [];
  constructor(public doctorServics:DoctorsService) { }

  ngOnInit(): void {

    this.doctor = this.doctorServics.getDoctorsDetails();

  }

}
