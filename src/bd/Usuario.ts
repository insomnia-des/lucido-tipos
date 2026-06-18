import type { Insertable, Selectable, Updateable } from "kysely";
import * as v from "valibot";
import type { TablaBase } from "./TablaBase";
import { type EsquemaPara } from "../util";
import { idDeDiscord } from "../esquemasComunes";

export interface TablaUsuario extends TablaBase {
  id_de_discord: string;
  nombre: string;
}

export type Usuario = Selectable<TablaUsuario>;
export type CrearUsuario = Insertable<TablaUsuario>;
export type ActualizarUsuario = Updateable<TablaUsuario>;

export const EsquemaCrearUsuario = v.object({
  id_de_discord: idDeDiscord,
  nombre: v.pipe(v.string(), v.minLength(2), v.maxLength(32)),
}) satisfies EsquemaPara<CrearUsuario>;

export const EsquemaActualizarUsuario = v.partial(
  EsquemaCrearUsuario,
) satisfies EsquemaPara<ActualizarUsuario>;
