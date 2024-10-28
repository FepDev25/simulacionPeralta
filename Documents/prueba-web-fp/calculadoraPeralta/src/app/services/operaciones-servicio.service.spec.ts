import { TestBed } from '@angular/core/testing';

import { OperacionesServicioService } from './operaciones-servicio.service';

describe('OperacionesServicioService', () => {
  let service: OperacionesServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperacionesServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
