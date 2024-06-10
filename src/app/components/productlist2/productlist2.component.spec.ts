import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlist2Component } from './productlist2.component';

describe('Productlist2Component', () => {
  let component: Productlist2Component;
  let fixture: ComponentFixture<Productlist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Productlist2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Productlist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
