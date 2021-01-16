import { Exercise2StudentMarksComponent } from './exercise2-student-marks/exercise2-student-marks.component';
import { Exercise5ParentComponentComponent } from './exercise5-parent-component/exercise5-parent-component.component';
import { Exercise6HomeComponent } from './exercise6-home/exercise6-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exercise4ProductInformationComponent } from './exercise4-product-information/exercise4-product-information.component';
import { Exercise1TypescriptExampleComponent } from './exercise1-typescript-example/exercise1-typescript-example.component';
import { Exercise3CustomPipeComponent } from './exercise3-custom-pipe/exercise3-custom-pipe.component';

const routes: Routes = [
  {path: 'home', component: Exercise6HomeComponent},
  {path: 'Exercise5InputOutput', component: Exercise5ParentComponentComponent},
  {path: 'Exercise4ProductInformation', component: Exercise4ProductInformationComponent},
  {path: 'Exercise1TypescriptExample', component: Exercise1TypescriptExampleComponent},
  {path: 'Exercise3CustomPipe', component: Exercise3CustomPipeComponent},
  {path: 'Exercise2AverageMarks', component: Exercise2StudentMarksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
