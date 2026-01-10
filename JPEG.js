import { encode as _encode } from "./lib/encoder.js";
import { decode } from "./lib/decoder.js";

export const JPEG = {
  encode: (imgd, q) => _encode(imgd, q).data,
  decode,
  canDecode(bin) {
    return bin && bin.length > 0 && bin[0] == 0xff;
  }
};
