import { Component } from '@angular/core';
import { Table } from '../../shared/table/table';

@Component({
  imports: [Table],
  selector: 'app-cars',
  styleUrl: './cars.css',
  templateUrl: './cars.html',
})
export class Cars {}
