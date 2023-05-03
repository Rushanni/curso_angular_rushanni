import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponenteComponent } from './my-componente.component';

describe('MyComponenteComponent', () => {
  let component: MyComponenteComponent;
  let fixture: ComponentFixture<MyComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
