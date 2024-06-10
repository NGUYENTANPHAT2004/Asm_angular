import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoneComponent } from './cartone.component';

describe('CartoneComponent', () => {
  let component: CartoneComponent;
  let fixture: ComponentFixture<CartoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
