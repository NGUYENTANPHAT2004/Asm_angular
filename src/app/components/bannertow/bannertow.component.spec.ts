import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannertowComponent } from './bannertow.component';

describe('BannertowComponent', () => {
  let component: BannertowComponent;
  let fixture: ComponentFixture<BannertowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannertowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannertowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
