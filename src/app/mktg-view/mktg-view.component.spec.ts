import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktgViewComponent } from './mktg-view.component';

describe('MktgViewComponent', () => {
  let component: MktgViewComponent;
  let fixture: ComponentFixture<MktgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktgViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MktgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
