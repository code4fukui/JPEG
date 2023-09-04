import { encode as _encode } from "./lib/encoder.js";
import { decode } from "./lib/decoder.js";

export const JPEG = {
  encode: (imgd, q) => _encode(imgd, q).data,
  decode,
};
