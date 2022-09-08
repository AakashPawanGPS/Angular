import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqrtPipe } from './app.sqrt';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { DiDemoComponent } from './di-demo/di-demo.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { MiddleComponent } from './middle/middle.component';
import { CountService } from './services/count.service';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    PipedemoComponent,
    DiDemoComponent,
    LeftComponent,
    RightComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
