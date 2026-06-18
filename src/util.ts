import type { GenericSchema } from "valibot";
import type z from "zod";

export function esquemaZod<T>() {
  return <S extends z.ZodType<T>>(esquema: S): S => esquema;
}

export type EsquemaPara<T> = GenericSchema<unknown, T>;
