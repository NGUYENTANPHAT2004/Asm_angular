import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedetailproductComponent } from './pagedetailproduct.component';

describe('PagedetailproductComponent', () => {
  let component: PagedetailproductComponent;
  let fixture: ComponentFixture<PagedetailproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagedetailproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagedetailproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
