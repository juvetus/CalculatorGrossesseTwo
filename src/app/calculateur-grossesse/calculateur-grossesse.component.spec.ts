import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateurGrossesseComponent } from './calculateur-grossesse.component';

describe('CalculateurGrossesseComponent', () => {
  let component: CalculateurGrossesseComponent;
  let fixture: ComponentFixture<CalculateurGrossesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateurGrossesseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateurGrossesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
