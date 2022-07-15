import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentloginComponent } from './components/studentlogin/studentlogin.component';
import { TeacherloginComponent } from './components/teacherlogin/teacherlogin.component';
import { EditComponent } from './services/edit/edit.component';
import { StudentComponent } from './views/student/student.component';
import { TeacherComponent } from './views/teacher/teacher.component';

const routes: Routes = [
  {
    path: "teacherloginpage",
    component: TeacherloginComponent,
    pathMatch: "full"
  }
  ,
  {
    path: "studentloginpage",
    component: StudentloginComponent,
    pathMatch: "full"
  }
  ,
  {
    path: "teacherlogin",
    component: TeacherComponent,
    pathMatch: "full"
  },
  {
    path:"studentlogin/:id",
    component:StudentComponent,
    pathMatch:"full"
  }
  ,
  {
    path: 'editstudentpage',
    component: EditComponent ,
    pathMatch: "full"
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
