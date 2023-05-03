import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinombreesrushanniComponent } from './minombreesrushanni.component';

describe('MinombreesrushanniComponent', () => {
  let component: MinombreesrushanniComponent;
  let fixture: ComponentFixture<MinombreesrushanniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinombreesrushanniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinombreesrushanniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
