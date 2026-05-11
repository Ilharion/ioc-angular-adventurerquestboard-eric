import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferitsPageComponent } from './preferits-page.component';

describe('PreferitsPageComponent', () => {
  let component: PreferitsPageComponent;
  let fixture: ComponentFixture<PreferitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferitsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
