import { Component, signal } from '@angular/core';
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
  imports: [DynamicTable],
  selector: 'app-cars',
  styleUrl: './cars.css',
  templateUrl: './cars.html',
})
export class Cars {
  cars: Car[] = [
    {
      id: '66f7056c-ab0e-4b39-b6c8-c0b326874e1d',
      brand: {
        id: 'brand-1',
        name: 'Toyota',
      },
      model: {
        id: 'model-1',
        name: 'Corolla',
      },
      total: 1,
      imageUrl: '/images/car_images/model-1_toyota_corolla.webp',
    },
    {
      id: '66f7056c-ab0e-4b39-b6c8-c0b326874e1d',
      brand: {
        id: 'brand-1',
        name: 'Toyota',
      },
      model: {
        id: 'model-1',
        name: 'Corolla',
      },
      total: 1,
      imageUrl: '/images/car_images/model-1_toyota_corolla.webp',
    },
    {
      id: '66f7056c-ab0e-4b39-b6c8-c0b326874e1d',
      brand: {
        id: 'brand-1',
        name: 'Toyota',
      },
      model: {
        id: 'model-1',
        name: 'Corolla',
      },
      total: 1,
      imageUrl: '/images/car_images/model-1_toyota_corolla.webp',
    }
  ];

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
