import type z from "zod";

export function esquemaZod<T>() {
  return <S extends z.ZodType<T>>(esquema: S): S => esquema;
}
