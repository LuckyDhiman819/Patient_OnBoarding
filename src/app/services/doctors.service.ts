import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  getDoctorsDetails(){
    return [
        {DoctorName: "Dr. Tufail Ahmed", Department: "Neurosciences/Neurosurgery, Minimal Access Surgery", Qualification: "MS (General Surgery), DNB (General Surgery), FRCS (General Surgery), FRCS (Neurosurgery)", Expertise: "Brain Tumour Surgery, Minimal Invasive Spine Surgery, Trigeminal Neuralgia Surgery, Stereotactic Radio surgery, Paediatric Neurosurgery"},

        {DoctorName: "Dr. Lucky Dhiman", Department: "Bone & Joint/Orthopaedics, Minimal Access Surgery", Qualification: "MS (Ortho), MRCS (UK), Fellow Spine & Scoliosis Surgery, USA", Expertise: "Spine surgery, Minimally invasive spine surgery, Scoliosis surgery"},

        {DoctorName: "Dr. Ketan Shinde", Department: "Physical Medicine & Rehabilitation, Development Disorders", Qualification: "MBBS, MD (Rehabilitation Medicine), DNB (Rehabilitation Medicine), Senior Residency", Expertise: "Neuro Rehabilitation, Geriatric Rehabilitation, Musculoskelatal Rehabilitation, Cardiac Rehabilitation and Secondary Prevention Service, Pulmonary Rehabilitation, Pediatric Rehabilitation, Cancer Rehabilitation"},

        {DoctorName: "Dr. Kafil Rehman", Department: "Diabetes & Bariatric Surgery, Endocrinology & Diabetes", Qualification: "Registered Dietician, CDE; BHSC(Dietetics); Post Graduation in Clinical Nutrition and Dietetics", Expertise: "Carbohydrate Counting for people with Type 1 Diabetes , Gestational Diabetes Mellitus, Diabetes complications and cardiac diseases"},

        {DoctorName: "Dr. Pooja Karri", Department: "Children/Paediatrics, Diabetes & Bariatric Surgery, Endocrinology & Diabetes", Qualification: "MBBS, MD, DNB(Paediatrics), Fellowship in Paediatric and Adolescent endocrinology", Expertise: "Growth and Hormonal disorders in children including: Short stature, Juvenile diabetes, Childhood obesity, Disorders of puberty, Rickets, calcium and bone related disorders, Thyroid and adrenal disorders, Disorders of sexual differentiation"},   

        {DoctorName: "Dr. Mulla Mohammad", Department: "Cosmetology & Plastic Surgery, Plastic & Reconstructive Surgery", Qualification: "MBBS, MS(General Surgery), MCh (Plastic Surgery)", Expertise: "Breast reconstruction & cosmetic breast surgery, Body Contouring, Gynaecomastia, Reconstructive Microvascular surgery, Onco-reconstrcuction."}    
    ]
}
  constructor() { }
}
