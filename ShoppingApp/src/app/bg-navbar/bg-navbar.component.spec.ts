import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgNavbarComponent } from './bg-navbar.component';

describe('BgNavbarComponent', () => {
  let component: BgNavbarComponent;
  let fixture: ComponentFixture<BgNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
