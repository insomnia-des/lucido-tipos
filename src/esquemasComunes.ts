import * as v from "valibot";

export const idDeDiscord = v.pipe(v.string(), v.minLength(18), v.maxLength(20));
export const urlDeImagenDeDiscord = v.pipe(
  v.string(),
  v.startsWith("http"),
  v.url(),
  v.maxLength(2048),
);
