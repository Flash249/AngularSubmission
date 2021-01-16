import { ProductInfo } from './Exercise4ProductInformation';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise4SearchReflectComponent } from './exercise4-search-reflect/exercise4-search-reflect.component';
import { Exercise4ProductInformationComponent } from './exercise4-product-information/exercise4-product-information.component';
import { Exercise6HomeComponent } from './exercise6-home/exercise6-home.component';
import { Exercise5ChildComponentComponent } from './exercise5-child-component/exercise5-child-component.component';
import { Exercise5ParentComponentComponent } from './exercise5-parent-component/exercise5-parent-component.component';
import { Exercise1TypescriptExampleComponent } from './exercise1-typescript-example/exercise1-typescript-example.component';
import { Exercise3CustomPipeComponent, test } from './exercise3-custom-pipe/exercise3-custom-pipe.component';
import { Exercise2StudentMarksComponent } from './exercise2-student-marks/exercise2-student-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise4SearchReflectComponent,
    Exercise4ProductInformationComponent,
    Exercise6HomeComponent,
    Exercise5ChildComponentComponent,
    Exercise5ParentComponentComponent,
    Exercise1TypescriptExampleComponent,
    Exercise3CustomPipeComponent,
    test,
    Exercise2StudentMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductInfo,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
