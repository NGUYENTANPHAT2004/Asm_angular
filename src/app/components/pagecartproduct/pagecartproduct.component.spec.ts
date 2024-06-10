import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecartproductComponent } from './pagecartproduct.component';

describe('PagecartproductComponent', () => {
  let component: PagecartproductComponent;
  let fixture: ComponentFixture<PagecartproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagecartproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagecartproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
