import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateshopComponent } from './updateshop.component';

describe('UpdateshopComponent', () => {
  let component: UpdateshopComponent;
  let fixture: ComponentFixture<UpdateshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
