import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshopComponent } from './viewshop.component';

describe('ViewshopComponent', () => {
  let component: ViewshopComponent;
  let fixture: ComponentFixture<ViewshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

