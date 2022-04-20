import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePaginationComponent } from './coffee-pagination.component';

describe('CoffeePaginationComponent', () => {
  let component: CoffeePaginationComponent;
  let fixture: ComponentFixture<CoffeePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
