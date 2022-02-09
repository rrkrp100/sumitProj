import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumitComponent } from './sumit.component';

describe('SumitComponent', () => {
  let component: SumitComponent;
  let fixture: ComponentFixture<SumitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
