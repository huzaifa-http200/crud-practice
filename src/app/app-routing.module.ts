import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './pages/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'pages' },
  {path: 'pages',   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
},
  // {path:'add-student', component: AddStudentComponent},
  // {path:'edit-student', component: EditStudentComponent},
  // {path: 'student-list', component: StudentListComponent},
  // {path:'', component:PagesComponent},
  // {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
