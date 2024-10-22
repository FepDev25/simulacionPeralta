import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamiComponent } from './sami.component';

describe('SamiComponent', () => {
  let component: SamiComponent;
  let fixture: ComponentFixture<SamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
