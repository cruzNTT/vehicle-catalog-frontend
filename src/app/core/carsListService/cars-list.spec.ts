import { TestBed } from '@angular/core/testing';
import { CarsList } from './cars-list';

describe('CarsList', () => {
  let service: CarsList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
