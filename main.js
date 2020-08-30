const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let WIDTH = canvas.width;
let HEIGHT = canvas.height;
let r, g, b;
let config = {
    lacunarity: 1,
    scale: 200,
    octaves: 16,
    persistance: 0.5
}
async function prep() {
    canvas.width = +document.getElementById("width").value;
    canvas.height = +document.getElementById("height").value;
    config.scale = +document.getElementById("scale").value;
    config.octaves = +document.getElementById("octaves").value;
    config.persistance = +document.getElementById("persistance").value;
    config.lacunarity = +document.getElementById("lacunarity").value;
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    r = await terrain(WIDTH, HEIGHT, config);
    g = await terrain(WIDTH, HEIGHT, config);
    b = await terrain(WIDTH, HEIGHT, config);
    for (let x = 0; x < WIDTH; x++) {
        for (let y = 0; y < WIDTH; y++) {
            let r0 = r[x][y];
            let g0 = g[x][y];
            let b0 = b[x][y];
            r0 = 1 - r0;
            g0 = 1 - g0;
            b0 = 1 - b0;
            ctx.fillStyle = `rgb(${r0 * 255}, ${g0 * 255}, ${b0 * 255})`
            ctx.fillRect(x, y, 1, 1);
        }
    }
}
document.getElementById("genart").onclick = prep;