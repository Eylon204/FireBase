import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EylonComponent } from './eylon.component';

describe('EylonComponent', () => {
  let component: EylonComponent;
  let fixture: ComponentFixture<EylonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EylonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EylonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
