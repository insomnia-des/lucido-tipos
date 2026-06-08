import type { ColumnType, Generated } from "kysely";

export interface TablaBase {
  id: Generated<number>;
  creado_en: ColumnType<Date, never, never>;
  actualizado_en: ColumnType<Date, never, never>;
}

