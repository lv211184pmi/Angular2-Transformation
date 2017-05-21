import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FilmItemsComponent } from './film-items/film-items.component';
import { FilmItemsService } from './film-items/film-items.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmItemsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
