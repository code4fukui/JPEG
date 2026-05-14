# JPEG

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A pure JavaScript JPEG encoder and decoder for Deno.

## Example Usage

### Decoding JPEGs

Will decode a typed array into a `Uint8Array`:

```js
import { JPEG } from "https://code4fukui.github.io/JPEG/JPEG.js";

const jpegData = Deno.readFileSync('grumpycat.jpg');
const rawImageData = JPEG.decode(jpegData);
console.log(rawImageData);
```

#### Decode Options

| Option               | Description                                                                                                                                                                                       | Default     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `colorTransform`     | Transform alternate colorspaces like YCbCr. `undefined` means respect the default behavior encoded in metadata.                                                                                   | `undefined` |
| `useTArray`          | Decode pixels into a typed `Uint8Array` instead of a `Buffer`.                                                                                                                                    | `true`     |
| `formatAsRGBA`       | Decode pixels into RGBA vs. RGB.                                                                                                                                                                  | `true`      |
| `tolerantDecoding`   | Be more tolerant when encountering technically invalid JPEGs.                                                                                                                                     | `true`      |
| `maxResolutionInMP`  | The maximum resolution image that `jpeg-js` should attempt to decode in megapixels. Images larger than this resolution will throw an error instead of decoding.                                   | `100`       |
| `maxMemoryUsageInMB` | The (approximate) maximum memory that `jpeg-js` should allocate while attempting to decode the image in mebibyte. Images requiring more memory than this will throw an error instead of decoding. | `512`       |

### Encoding JPEGs

```js
import { JPEG } from "https://code4fukui.github.io/JPEG/JPEG.js";

const width = 320;
const height = 180;
const frameData = new Uint8Array(width * height * 4);
let i = 0;
while (i < frameData.length) {
  frameData[i++] = 0xff; // red
  frameData[i++] = 0x00; // green
  frameData[i++] = 0x00; // blue
  frameData[i++] = 0xff; // alpha - ignored in JPEGs
}
const rawImageData = {
  data: frameData,
  width: width,
  height: height,
};
const jpegImageData = JPEG.encode(rawImageData, 50);
console.log(jpegImageData);
// write to file
Deno.writeFileSync('image.jpg', jpegImageData);
```

## License

MIT License — see [LICENSE](LICENSE).