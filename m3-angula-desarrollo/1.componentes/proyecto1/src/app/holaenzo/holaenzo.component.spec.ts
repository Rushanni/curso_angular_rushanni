import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaenzoComponent } from './holaenzo.component';

describe('HolaenzoComponent', () => {
  let component: HolaenzoComponent;
  let fixture: ComponentFixture<HolaenzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolaenzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolaenzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
