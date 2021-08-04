import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'add-student' },
  {path:'add-student', component: AddStudentComponent},
  {path:'edit-student', component: EditStudentComponent},
  {path: 'student-list', component: StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
