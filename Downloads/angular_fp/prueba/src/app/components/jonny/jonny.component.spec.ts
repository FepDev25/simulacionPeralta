import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonnyComponent } from './jonny.component';

describe('JonnyComponent', () => {
  let component: JonnyComponent;
  let fixture: ComponentFixture<JonnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JonnyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JonnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
