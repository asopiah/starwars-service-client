import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClrDatagridModule, ClrIconModule, ClrInputModule} from "@clr/angular";
import { PeopleComponent } from './components/people/people.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClrIconModule,
    GraphQLModule,
    HttpClientModule,
    ClrDatagridModule,
    FormsModule,
    ClrInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
