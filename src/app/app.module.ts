import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

import { SearchFieldComponent } from './search-field/search-field.component';
import { LocationInfoComponent } from './location-info/location-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    LocationInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
