import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapirComponent } from './sapir.component';

describe('SapirComponent', () => {
  let component: SapirComponent;
  let fixture: ComponentFixture<SapirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
