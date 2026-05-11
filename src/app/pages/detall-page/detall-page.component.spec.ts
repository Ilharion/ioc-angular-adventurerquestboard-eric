import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallPageComponent } from './detall-page.component';

describe('DetallPageComponent', () => {
  let component: DetallPageComponent;
  let fixture: ComponentFixture<DetallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
