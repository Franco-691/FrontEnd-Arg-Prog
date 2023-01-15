import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogpAPComponent } from './logp-ap.component';

describe('LogpAPComponent', () => {
  let component: LogpAPComponent;
  let fixture: ComponentFixture<LogpAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogpAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogpAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
