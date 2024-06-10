import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductowComponent } from './productow.component';

describe('ProductowComponent', () => {
  let component: ProductowComponent;
  let fixture: ComponentFixture<ProductowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
