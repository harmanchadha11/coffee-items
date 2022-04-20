import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import { fillCoffeeList} from "../coffee-state/coffee-action";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'harman-coffee';
  items = [];
  pageOfItems : Array<any> = [];

  constructor(private store: Store<{ coffee: any }>, private http: HttpClient) {
    this.fill();
  }

  public fill() {
    return this.http.get<any>('https://random-data-api.com/api/coffee/random_coffee?size=50').subscribe( result => {
      this.store.dispatch(fillCoffeeList({coffeeList: result}));
    })
  }

  ngOnInit(): void {
  }
  
}
