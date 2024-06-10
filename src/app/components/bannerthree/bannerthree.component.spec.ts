import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerthreeComponent } from './bannerthree.component';

describe('BannerthreeComponent', () => {
  let component: BannerthreeComponent;
  let fixture: ComponentFixture<BannerthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerthreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
