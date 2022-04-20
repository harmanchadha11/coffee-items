import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import {reducer} from "../coffee-state/coffee-reducer";
import {HttpClientModule} from "@angular/common/http";
import { CoffeePaginationComponent } from './coffee-pagination/coffee-pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    CoffeePaginationComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ coffee: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
