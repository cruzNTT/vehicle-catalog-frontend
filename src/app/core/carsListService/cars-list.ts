import { Service } from '@angular/core';
import { Cars } from '../../features/cars/cars';

@Service()
export class CarsList {
  cars: Cars[] = [];

  getCars(): Cars[] {
    return this.cars;
  }
}
