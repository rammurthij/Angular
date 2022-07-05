import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CustomerlistComponent,
    CustomerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
