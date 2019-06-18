import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfhourlyerrorComponent } from './halfhourlyerror.component';

describe('HalfhourlyerrorComponent', () => {
  let component: HalfhourlyerrorComponent;
  let fixture: ComponentFixture<HalfhourlyerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfhourlyerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfhourlyerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
