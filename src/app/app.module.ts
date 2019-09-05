import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { TopNavToolbarComponent } from './top-nav-toolbar/top-nav-toolbar.component';
import { ContentTabComponent } from './content-tab/content-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavToolbarComponent,
    ContentTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
