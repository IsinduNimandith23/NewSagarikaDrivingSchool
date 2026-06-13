import { Jimp } from 'jimp';
import { statSync } from 'node:fs';

// Build the favicon from the orange-outline emblem. The source PNG ships with a
// gray checkerboard baked into the background (it isn't actually transparent),
// so we strip that, trim the long ground-line tails, and pad to a tight square.
const SRC = 'public/favicon_emblem.png';
const OUT = 'public/favicon.png';
const SIZE = 256;       // output square size
const MARGIN = 1.02;    // ~1% margin so the emblem nearly fills the square
const TAIL = 120;       // min column height to keep (drops thin ground-line tails)

const img = await Jimp.read(SRC);
const { width: w, height: h, data } = img.bitmap;

// The checkerboard squares are light (gray ~198 and white); the emblem is black
// + orange (orange has low green/blue), so "all channels light" == background.
const isLight = (r, g, b) => r > 175 && g > 175 && b > 175;
for (let i = 0; i < data.length; i += 4) {
  if (isLight(data[i], data[i + 1], data[i + 2])) data[i + 3] = 0;
}

// Content bounds. Columns are trimmed with a tall threshold so the thin ground
// line poking out to the sides doesn't stretch the icon; rows use a small
// threshold to keep the full figure height (and the line itself).
const colC = new Int32Array(w), rowC = new Int32Array(h);
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (data[(y * w + x) * 4 + 3] > 0) { colC[x]++; rowC[y]++; }
  }
}
let minX = w, minY = h, maxX = -1, maxY = -1;
for (let x = 0; x < w; x++) if (colC[x] >= TAIL) { if (x < minX) minX = x; if (x > maxX) maxX = x; }
for (let y = 0; y < h; y++) if (rowC[y] >= 4) { if (y < minY) minY = y; if (y > maxY) maxY = y; }

const cw = maxX - minX + 1, ch = maxY - minY + 1;
img.crop({ x: minX, y: minY, w: cw, h: ch });

const side = Math.round(Math.max(cw, ch) * MARGIN);
const canvas = new Jimp({ width: side, height: side, color: 0x00000000 });
canvas.composite(img, Math.round((side - cw) / 2), Math.round((side - ch) / 2));
canvas.resize({ w: SIZE, h: SIZE });
await canvas.write(OUT);

console.log(`emblem ${cw}x${ch} -> ${SIZE}x${SIZE} (${statSync(OUT).size} bytes) ${OUT}`);
