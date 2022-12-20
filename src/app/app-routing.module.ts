import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', redirectTo:'/course', pathMatch:'full'},
  {path:'course', component:CourseComponent},
  {path:'student', component:StudentComponent},
  {path:"**", component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
  CourseComponent,
  StudentComponent,
  PageNotFoundComponent

]
