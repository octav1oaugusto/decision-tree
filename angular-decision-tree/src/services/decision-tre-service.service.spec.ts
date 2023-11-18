import { TestBed } from '@angular/core/testing';
import { DecisionTreServiceService } from './decision-tre-service.service';



describe('DecisionTreServiceService', () => {
  let service: DecisionTreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecisionTreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
