import { Component, input } from '@angular/core';
import { TableColumn, TableRow } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
})
export class DynamicTable {
  /**
   * Dynamic table for a CRUD
   * 
   */
  readonly columns = input.required<TableColumn[]>();
  readonly rows = input.required<TableRow[]>();

  /**
   * @default "List"
   */
  tableTitle = input('List');
}
