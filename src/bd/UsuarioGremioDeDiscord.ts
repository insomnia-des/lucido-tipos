import type { Insertable, Selectable, Updateable } from "kysely";
import * as v from "valibot";
import type { EsquemaPara } from "../util";
import type { TablaBase } from "./TablaBase";

export interface TablaUsuarioGremioDeDiscord extends TablaBase {
	id_de_usuario: number;
	id_de_gremio: number;
	activo: boolean;
}

export type UsuarioGremioDeDiscord = Selectable<TablaUsuarioGremioDeDiscord>;
export type CrearUsuarioGremioDeDiscord = Insertable<TablaUsuarioGremioDeDiscord>;
export type ActualizarUsuarioGremioDeDiscord = Updateable<TablaUsuarioGremioDeDiscord>;

export const EsquemaCrearUsuarioGremioDeDiscord = v.object({
	id_de_usuario: v.number(),
	id_de_gremio: v.number(),
	activo: v.boolean(),
}) satisfies EsquemaPara<CrearUsuarioGremioDeDiscord>;

export const EsquemaActualizarUsuarioGremioDeDiscord = v.partial(
	EsquemaCrearUsuarioGremioDeDiscord,
) satisfies EsquemaPara<ActualizarUsuarioGremioDeDiscord>;
