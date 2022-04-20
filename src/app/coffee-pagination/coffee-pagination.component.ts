import { Component, Input, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
@Component({
  selector: 'app-coffee-pagination',
  templateUrl: './coffee-pagination.component.html',
  styleUrls: ['./coffee-pagination.component.css']
})
export class CoffeePaginationComponent implements OnInit {

  coffee$: any;
  
  currentPage : number;
  pageSize: number;
  itemsPerPage: number;
  items_total : any;
  numbers : Array<any>;
  currentItems : any;
  arrayKeys : any;
  arrayName : any;

  constructor(private store: Store<{ coffee: any }>) { 
    this.currentPage = 1;
    this.pageSize = 10;
    this.itemsPerPage = 10;
    this.numbers = Array(5).fill(4);
    this.arrayKeys = ['Blend Name', 'Origin', 'Notes', 'Variety', 'Intensifier'];
    this.arrayName = 'currentItems';
  }
  
  ngOnInit(): void {
    this.coffee$ = this.store.pipe(select('coffee'));
    this.coffee$?.subscribe((valueChange: any) => {
      if(valueChange?.coffeeList) {
        this.items_total = valueChange.coffeeList;
        this.currentItems = this.items_total?.slice(0,10);
      }
    })
  }

  changePage(i:number)
  {
    console.log(i,  this.items_total);
    this.currentItems = this.items_total?.slice((i-1)*10,i*10);
  }

}
