import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiosProfileComponent } from './bios-profile.component';

describe('BiosProfileComponent', () => {
  let component: BiosProfileComponent;
  let fixture: ComponentFixture<BiosProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiosProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiosProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
