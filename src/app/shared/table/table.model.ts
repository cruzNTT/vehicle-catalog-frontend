export type TableCell = string | number | boolean | null | undefined;
export type TableRow = Record<string, TableCell>;
export interface TableColumn {
  key: string;
  label: string;
}
