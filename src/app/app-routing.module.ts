import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmitFormComponent } from './components/admit-form/admit-form.component';

const routes: Routes = [
  { path:"admitForm",component: AdmitFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
