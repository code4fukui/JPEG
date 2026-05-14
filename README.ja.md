# JPEG

Deno向けのPure JavaScript製JPEGエンコーダおよびデコーダです。

## 使用例

### JPEGのデコード

型付き配列を `Uint8Array` にデコードします:

```js
import { JPEG } from "https://code4fukui.github.io/JPEG/JPEG.js";

const jpegData = Deno.readFileSync('grumpycat.jpg');
const rawImageData = JPEG.decode(jpegData);
console.log(rawImageData);
```

#### デコードオプション

| オプション               | 説明                                                                                                                                                                                       | デフォルト値 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `colorTransform`     | YCbCrなどの代替色空間を変換します。`undefined` の場合は、メタデータにエンコードされているデフォルトの動作に従います。                                                                                   | `undefined` |
| `useTArray`          | ピクセルを `Buffer` ではなく型付き配列の `Uint8Array` にデコードします。                                                                                                                                    | `true`     |
| `formatAsRGBA`       | ピクセルをRGBではなくRGBAとしてデコードします。                                                                                                                                                                  | `true`      |
| `tolerantDecoding`   | 技術的に無効なJPEGに遭遇した場合でも、より寛容にデコードを行います。                                                                                                                                     | `true`      |
| `maxResolutionInMP`  | `jpeg-js` がデコードを試みる画像の最大解像度（メガピクセル単位）。この解像度より大きい画像は、デコードされずにエラーをスローします。                                   | `100`       |
| `maxMemoryUsageInMB` | `jpeg-js` が画像のデコード試行時に割り当てる（おおよその）最大メモリ量（メビバイト単位）。これ以上のメモリを必要とする画像は、デコードされずにエラーをスローします。 | `512`       |

### JPEGのエンコード

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

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
