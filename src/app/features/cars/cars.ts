import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';

import { CarsList } from '../../core/carsListService/cars-list';
import { DynamicTable } from '../../shared/table/table';
import { TableColumn, TableRow } from '../../shared/table/table.model';

interface Car {
  id: string;
  brand: {
    id: string;
    name: string;
  };
  model: {
    id: string;
    name: string;
  };
  total: number;
  imageUrl: string;
}

@Component({
  imports: [DynamicTable, MatIconModule],
  selector: 'app-cars',
  styleUrl: './cars.css',
  templateUrl: './cars.html',
})
export class Cars {
  cars: Car[] = [];

  rows: TableRow[] = this.cars.map((car) => ({
    id: car.id,
    brand: car.brand.name,
    model: car.model.name,
    total: car.total,
    imageUrl: car.imageUrl,
  }));

  columns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'brand', label: 'Marca' },
    { key: 'model', label: 'Modelo' },
    { key: 'total', label: 'Cantidad' },
    { key: 'imageUrl', label: 'Imagen' },
  ];
}
