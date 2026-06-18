import type { Insertable, Selectable, Updateable } from "kysely";
import * as v from "valibot";
import type { TablaBase } from "./TablaBase";
import type { EsquemaPara } from "../util";
import { idDeDiscord, urlDeImagenDeDiscord } from "../esquemasComunes";

export interface TablaGremioDeDiscord extends TablaBase {
  id_de_discord: string;
  nombre: string;
  descripcion: string | null;
  url_del_icono: string | null;
  url_del_cartel: string | null;
}

export type GremioDeDiscord = Selectable<TablaGremioDeDiscord>;
export type CrearGremioDeDiscord = Insertable<TablaGremioDeDiscord>;
export type ActualizarGremioDeDiscord = Updateable<TablaGremioDeDiscord>;

export const EsquemaCrearGremioDeDiscord = v.object({
  id_de_discord: idDeDiscord,
  nombre: v.pipe(v.string(), v.minLength(2), v.maxLength(32)),
  descripcion: v.nullish(v.pipe(v.string(), v.minLength(1), v.maxLength(120))),
  url_del_icono: v.nullish(urlDeImagenDeDiscord),
  url_del_cartel: v.nullish(urlDeImagenDeDiscord),
}) satisfies EsquemaPara<CrearGremioDeDiscord>;

export const EsquemaActualizarGremioDeDiscord = v.partial(
  EsquemaCrearGremioDeDiscord,
) satisfies EsquemaPara<ActualizarGremioDeDiscord>;
