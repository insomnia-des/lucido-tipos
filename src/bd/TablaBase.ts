import type { ColumnType } from "kysely";

export interface TablaBase {
  id: ColumnType<number, never, never>;
  creado_en: ColumnType<Date, never, never>;
  actualizado_en: ColumnType<Date, never, never>;
}
