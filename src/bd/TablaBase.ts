import type { ColumnType } from "kysely";

export interface TablaBase {
  id: ColumnType<number, never, never>;
  creado_en: ColumnType<string, never, never>;
  actualizado_en: ColumnType<string, never, never>;
}
