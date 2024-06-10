import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageallproductComponent } from './pageallproduct.component';

describe('PageallproductComponent', () => {
  let component: PageallproductComponent;
  let fixture: ComponentFixture<PageallproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageallproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageallproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
