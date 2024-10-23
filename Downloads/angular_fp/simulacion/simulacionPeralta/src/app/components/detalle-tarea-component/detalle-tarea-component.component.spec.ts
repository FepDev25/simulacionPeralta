import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareaComponentComponent } from './detalle-tarea-component.component';

describe('DetalleTareaComponentComponent', () => {
  let component: DetalleTareaComponentComponent;
  let fixture: ComponentFixture<DetalleTareaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTareaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTareaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
