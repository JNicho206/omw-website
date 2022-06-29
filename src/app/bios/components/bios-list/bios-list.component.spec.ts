import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiosListComponent } from './bios-list.component';

describe('BiosListComponent', () => {
  let component: BiosListComponent;
  let fixture: ComponentFixture<BiosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
