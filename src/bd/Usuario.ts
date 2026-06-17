import type { Insertable, Selectable, Updateable } from "kysely";
import z from "zod";
import type { TablaBase } from "./TablaBase";
import { esquemaZod } from "../util";

export interface TablaUsuario extends TablaBase {
  id_de_discord: string;
  nombre: string;
}

export type Usuario = Selectable<TablaUsuario>;
export type CrearUsuario = Insertable<TablaUsuario>;
export type ActualizarUsuario = Updateable<TablaUsuario>;

export const EsquemaCrearUsuario = esquemaZod<CrearUsuario>()(
  z.object({
    id_de_discord: z
      .string("Debe ser una cadena")
      .min(18, "Debe tener al menos 18 caracteres")
      .max(20, "Debe tener máximo 20 caracteres"),
    nombre: z
      .string("Debe ser una cadena")
      .min(2, "Debe tener al menos 2 caracteres")
      .max(32, "Debe tener máximo 32 caracteres"),
  }),
);

export const EsquemaActualizarUsuario = esquemaZod<ActualizarUsuario>()(
  EsquemaCrearUsuario.partial(),
);
