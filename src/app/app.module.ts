import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationListComponent } from './formation-list/formation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
