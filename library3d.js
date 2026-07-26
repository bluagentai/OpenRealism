// library3d.js — procedural Three.js Long Room: halls, shelves, clickable books.
import * as THREE from 'three';

const WOOD_DK = 0x2a1d13, WOOD_MID = 0x3a2a1a, BRASS = 0xb68235;
const LEATHER = [0x5e3a24, 0x3f4c37, 0x50303f, 0x2b3c4c, 0x70491b, 0x3a322a, 0x5a2c29, 0x314239];
const FOIL = ['#e8d7b4', '#f0e3c6', '#d9c9a6'];
const BD = 3.2, HX = 2.2, CASE_D = 0.42, CASE_H = 3.7, VEST = 3.0;
const ROWS = [0.62, 1.42, 2.22, 3.02];

let renderer, scene, camera, host, books = [], segs = [], doorL, doorR, doorLight, dust;
let targetZ = 2, curZ = 2, swayT = 0, hovered = null, raf = 0, started = false;
const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(-2, -2);

function tex(draw, w, h) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }

function plankTex() {
  return tex((g, w, h) => {
    g.fillStyle = '#241709'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 8; i++) {
      const y = i * h / 8;
      const sh = 18 + (i * 37) % 26;
      g.fillStyle = 'rgb(' + (40 + sh) + ',' + (26 + sh * 0.6 | 0) + ',' + (12 + sh * 0.35 | 0) + ')';
      g.fillRect(0, y + 1, w, h / 8 - 2);
      g.strokeStyle = 'rgba(0,0,0,.55)'; g.strokeRect(-1, y, w + 2, h / 8);
      g.fillStyle = 'rgba(0,0,0,.18)';
      for (let k = 0; k < 40; k++) g.fillRect(Math.random() * w, y + Math.random() * h / 8, Math.random() * 30 + 4, 1);
    }
  }, 256, 256);
}
function spineTex(label, color, fh) {
  return tex((g, w, h) => {
    const c = new THREE.Color(color);
    g.fillStyle = '#' + c.getHexString(); g.fillRect(0, 0, w, h);
    const grad = g.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, 'rgba(0,0,0,.55)'); grad.addColorStop(0.18, 'rgba(255,255,255,.14)');
    grad.addColorStop(0.5, 'rgba(0,0,0,.12)'); grad.addColorStop(0.85, 'rgba(255,255,255,.08)'); grad.addColorStop(1, 'rgba(0,0,0,.6)');
    g.fillStyle = grad; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(222,182,96,.75)';
    [0.06, 0.1, 0.88, 0.92].forEach(f => g.fillRect(3, h * f, w - 6, 2));
    g.save(); g.translate(w / 2, h / 2); g.rotate(-Math.PI / 2);
    g.fillStyle = fh; g.font = '600 ' + (w * 0.44) + 'px "Cormorant Garamond", Georgia, serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    let t = label; while (g.measureText(t).width > h * 0.82 && t.length > 4) t = t.slice(0, -2);
    g.fillText(t, 0, 0); g.restore();
  }, 48, 220);
}
function nameTex(text) {
  return tex((g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.fillStyle = 'rgba(230,190,120,.85)';
    g.font = '600 ' + h * 0.52 + 'px "Cormorant Garamond", Georgia, serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.letterSpacing = h * 0.14 + 'px';
    g.fillText(text.toUpperCase(), w / 2, h / 2);
  }, 1024, 96);
}

function bookcaseWall(group, x, z0, len, side, wingBooks, startIdx, perRow) {
  const wood = new THREE.MeshStandardMaterial({ color: WOOD_DK, roughness: 0.8 });
  const woodMid = new THREE.MeshStandardMaterial({ color: WOOD_MID, roughness: 0.75 });
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.06, CASE_H + 0.5, len), wood);
  back.position.set(x + side * (CASE_D / 2), (CASE_H + 0.5) / 2, z0 - len / 2); group.add(back);
  let bi = startIdx;
  const nBays = Math.round(len / BD);
  for (let b = 0; b < nBays; b++) {
    const zc = z0 - b * BD - BD / 2;
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, CASE_H + 0.4, 0.16), woodMid);
    post.position.set(x, (CASE_H + 0.4) / 2, z0 - b * BD); group.add(post);
    if (b === nBays - 1) { const p2 = post.clone(); p2.position.z = z0 - len; group.add(p2); }
    for (const ry of ROWS) {
      const board = new THREE.Mesh(new THREE.BoxGeometry(CASE_D, 0.05, BD - 0.14), woodMid);
      board.position.set(x, ry - 0.03, zc); group.add(board);
      // books on this row
      let zc2 = zc + (BD - 0.3) / 2;
      const zEnd = zc - (BD - 0.3) / 2;
      let n = 0;
      while (zc2 > zEnd && bi < wingBooks.length && n < perRow) {
        const bk = wingBooks[bi];
        const hh = hash(bk.short + bk.author);
        const bw = 0.030 + (hh % 100) / 100 * 0.030;
        const bh = 0.30 + ((hh >> 4) % 100) / 100 * 0.12;
        const col = LEATHER[hh % LEATHER.length];
        const lean = (hh % 13 === 0) ? (side * 0.09) : 0;
        // spine texture goes on the face pointing at the aisle: +x for the left wall, -x for the right
        const spineMat = new THREE.MeshStandardMaterial({ map: spineTex(bk.short, col, FOIL[(hh >> 3) % 3]), roughness: 0.55 });
        const covMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.62 });
        const darkMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(col).multiplyScalar(0.6), roughness: 0.75 });
        const mats = [
          side < 0 ? spineMat : darkMat,
          side > 0 ? spineMat : darkMat,
          new THREE.MeshStandardMaterial({ color: 0xe7dcc2, roughness: 0.9 }),
          darkMat,
          covMat,
          covMat
        ];
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.24, bh, bw), mats);
        m.rotation.x = lean;
        m.position.set(x - side * (0.02 + (hh % 5) * 0.008), ry + bh / 2, zc2 - bw / 2);
        m.userData.i = bk.i; m.userData.baseX = m.position.x;
        group.add(m); books.push(m);
        zc2 -= bw + 0.004 + (hh % 3) * 0.004;
        bi++; n++;
      }
    }
  }
  return bi;
}

function sconce(group, x, z, side) {
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.3), new THREE.MeshStandardMaterial({ color: BRASS, metalness: 0.8, roughness: 0.35 }));
  arm.rotation.z = Math.PI / 2; arm.position.set(x - side * 0.32, 2.6, z); group.add(arm);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffd9a0 }));
  bulb.position.set(x - side * 0.5, 2.62, z); group.add(bulb);
  const glow = new THREE.PointLight(0xffb469, 5.5, 9, 2);
  glow.position.copy(bulb.position); glow.position.x -= side * 0.1; group.add(glow);
}

function archWall(group, z, glowColor, numeral) {
  const wall = new THREE.Mesh(new THREE.BoxGeometry(HX * 2 + 1, 5.4, 0.2), new THREE.MeshStandardMaterial({ color: 0x17100b, roughness: 0.9 }));
  wall.position.set(0, 2.7, z - 0.1); group.add(wall);
  const arch = tex((g, w, h) => {
    g.clearRect(0, 0, w, h);
    const grad = g.createRadialGradient(w / 2, h * 0.62, 10, w / 2, h * 0.62, w * 0.5);
    grad.addColorStop(0, 'rgba(255,214,150,.95)'); grad.addColorStop(1, 'rgba(255,190,110,0)');
    g.fillStyle = grad;
    g.beginPath(); g.moveTo(w * 0.2, h); g.lineTo(w * 0.2, h * 0.42);
    g.arc(w / 2, h * 0.42, w * 0.3, Math.PI, 0); g.lineTo(w * 0.8, h); g.closePath(); g.fill();
  }, 256, 384);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 2.9), new THREE.MeshBasicMaterial({ map: arch, transparent: true, color: glowColor }));
  door.position.set(0, 1.5, z + 0.02); group.add(door);
  const pl = new THREE.PointLight(glowColor, 7, 10, 2); pl.position.set(0, 1.7, z + 1); group.add(pl);
  if (numeral) {
    const n = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.7), new THREE.MeshBasicMaterial({ map: nameTex(numeral), transparent: true, opacity: 0.55 }));
    n.position.set(0, 3.9, z + 0.03); group.add(n);
  }
}

function build(data) {
  const wings = data.wings;
  const floorT = plankTex(); floorT.wrapS = floorT.wrapT = THREE.RepeatWrapping;
  let z = 0;
  const all = data.all;
  for (const w of wings.concat([{ id: 'gb', title: 'Faith & Reason', bays: 2, numeral: 'V' }])) {
    const g = new THREE.Group();
    const isGB = w.id === 'gb';
    const len = (w.bays || 2) * BD;
    const wingBooks = isGB ? [] : all.filter(b => b.wingId === w.id);
    const half = Math.ceil(wingBooks.length / 2);
    if (!isGB) {
      const perRow = Math.ceil(half / (w.bays * ROWS.length));
      bookcaseWall(g, -HX, z, len, -1, wingBooks.slice(0, half), 0, perRow);
      bookcaseWall(g, HX, z, len, 1, wingBooks.slice(half), 0, perRow);
    } else {
      const wood = new THREE.MeshStandardMaterial({ color: 0x1d1410, roughness: 0.85 });
      for (const sx of [-HX, HX]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.1, 5, len), wood); p.position.set(sx, 2.5, z - len / 2); g.add(p); }
    }
    // floor + ceiling
    const ft = floorT.clone(); ft.needsUpdate = true; ft.repeat.set(2, len / 1.6);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(HX * 2 + 1.4, len + VEST), new THREE.MeshStandardMaterial({ map: ft, roughness: 0.75 }));
    floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, z - (len + VEST) / 2); g.add(floor);
    // axis along Z (corridor); thetaStart π/2 + rotation.x π/2 puts the open half strictly overhead
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(HX + 0.7, HX + 0.7, len + VEST, 28, 1, true, -Math.PI / 2, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0x1a120c, roughness: 0.95, side: THREE.BackSide }));
    barrel.rotation.set(Math.PI / 2, 0, 0);
    barrel.position.set(0, 3.6, z - (len + VEST) / 2); g.add(barrel);
    // cornice hall names
    if (!isGB) for (const sx of [-1, 1]) {
      const n = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.26), new THREE.MeshBasicMaterial({ map: nameTex(w.title), transparent: true }));
      n.position.set(sx * (HX - 0.05), 3.55, z - Math.min(2.4, len * 0.25));
      n.rotation.y = sx > 0 ? -Math.PI / 2 : Math.PI / 2; g.add(n);
    }
    // sconces
    for (let b = 0; b < (w.bays || 2); b++) for (const s of [-1, 1])
      if ((b + (s > 0 ? 1 : 0)) % 2 === 0) sconce(g, s * HX, z - b * BD - BD / 2, s);
    // end arch / doors
    if (!isGB) archWall(g, z - len - VEST + 0.4, 0xffc880, w.numeral);
    else {
      const doorMat = new THREE.MeshStandardMaterial({ color: 0x241812, roughness: 0.6 });
      const hingeZ = z - len - 0.4;
      doorL = new THREE.Group(); doorL.position.set(-0.95, 0, hingeZ);
      const dl = new THREE.Mesh(new THREE.BoxGeometry(0.95, 3.4, 0.1), doorMat); dl.position.set(0.475, 1.7, 0); doorL.add(dl);
      doorR = new THREE.Group(); doorR.position.set(0.95, 0, hingeZ);
      const dr = new THREE.Mesh(new THREE.BoxGeometry(0.95, 3.4, 0.1), doorMat); dr.position.set(-0.475, 1.7, 0); doorR.add(dr);
      g.add(doorL); g.add(doorR);
      const vn = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), new THREE.MeshBasicMaterial({ map: nameTex('V'), transparent: true, opacity: 0.4 }));
      vn.position.set(0, 2.6, hingeZ + 0.08); g.add(vn);
      doorLight = new THREE.PointLight(0xffc880, 0, 8, 2); doorLight.position.set(0, 1.8, hingeZ - 1); g.add(doorLight);
      const wallMat = new THREE.MeshStandardMaterial({ color: 0x120d09, roughness: 0.95 });
      for (const sx of [-1.65, 1.65]) { const wl = new THREE.Mesh(new THREE.BoxGeometry(HX * 2 - 1.7, 3.6, 0.14), wallMat); wl.position.set(sx, 1.8, hingeZ); g.add(wl); }
      const top = new THREE.Mesh(new THREE.BoxGeometry(HX * 2 + 1, 2.2, 0.14), wallMat); top.position.set(0, 4.5, hingeZ); g.add(top);
    }
    scene.add(g);
    segs.push({ id: w.id, start: z, len: len + (isGB ? 0.6 : VEST) });
    z -= len + VEST;
  }
  // dust
  const pts = new Float32Array(900);
  for (let i = 0; i < 300; i++) { pts[i * 3] = (Math.random() - 0.5) * 4; pts[i * 3 + 1] = Math.random() * 3.4; pts[i * 3 + 2] = z * Math.random(); }
  dust = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(pts, 3)),
    new THREE.PointsMaterial({ color: 0xffdca0, size: 0.02, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
  scene.add(dust);
}

function init() {
  host = document.querySelector('[data-three3d]');
  if (!host || window.__lw3dStarted) return; window.__lw3dStarted = true; started = true;
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b0806, 0.052);
  scene.background = new THREE.Color(0x0b0806);
  camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.05, 60);
  camera.up.set(0, -1, 0); // roll view 180° — counter the flipped framebuffer on this machine
  camera.position.set(0, 1.6, 2);
  let tries = 0;
  function makeRenderer() {
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    } catch (e) {
      if (++tries < 8) { setTimeout(makeRenderer, 1800); return; }
      const once = () => { removeEventListener('pointerdown', once); tries = 0; makeRenderer(); };
      addEventListener('pointerdown', once);
      if (host && !host.querySelector('[data-glmsg]')) {
        const m = document.createElement('div');
        m.setAttribute('data-glmsg', '');
        m.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#9b8a6a;font:14px Georgia,serif;text-align:center;max-width:320px';
        m.textContent = 'The 3D hall needs WebGL — it appears to be unavailable in this browser. Click anywhere to retry.';
        host.appendChild(m);
      }
      console.warn('WebGL unavailable, will retry on interaction', e); return;
    }
    const old = host.querySelector('[data-glmsg]'); if (old) old.remove();
    finishInit();
  }
  makeRenderer();
}
function finishInit() {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  // own compositor layer — works around Chromium backdrop-filter-over-WebGL flip bug
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.transform = 'translateZ(0)';
  renderer.domElement.style.willChange = 'transform';
  host.appendChild(renderer.domElement);
  scene.add(new THREE.AmbientLight(0x2a1c10, 2.2));
  const hemi = new THREE.HemisphereLight(0x40301c, 0x0d0a06, 0.7); scene.add(hemi);
  build(window.__LW_DATA);
  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
  renderer.domElement.addEventListener('pointermove', (e) => {
    mouse.x = (e.clientX / innerWidth) * 2 - 1; mouse.y = -(e.clientY / innerHeight) * 2 + 1;
  });
  renderer.domElement.addEventListener('click', () => {
    if (hovered) dispatchEvent(new CustomEvent('lw-open-book', { detail: { i: hovered.userData.i } }));
  });
  addEventListener('pagehide', () => { try { cancelAnimationFrame(raf); renderer.dispose(); } catch (e) {} });
  raf = requestAnimationFrame(tick);
}

let lastRay = 0;
function tick(t) {
  raf = requestAnimationFrame(tick);
  curZ += (targetZ - curZ) * 0.07;
  swayT += 0.008;
  const sx = Math.sin(curZ * 0.42) * 0.07;
  camera.position.set(sx, 1.6 + Math.sin(curZ * 0.9) * 0.015, curZ);
  camera.lookAt(sx * 0.3, 1.52, curZ - 5);
  if (dust) { dust.rotation.y = Math.sin(swayT * 0.1) * 0.02; dust.position.y = Math.sin(swayT * 0.4) * 0.05; }
  if (t - lastRay > 90) {
    lastRay = t;
    ray.setFromCamera(mouse, camera);
    const hits = ray.intersectObjects(books, false);
    const h = hits.length && hits[0].distance < 7 ? hits[0].object : null;
    if (h !== hovered) {
      if (hovered) hovered.position.x = hovered.userData.baseX;
      hovered = h;
      renderer.domElement.style.cursor = h ? 'pointer' : 'default';
      if (h) h.position.x = h.userData.baseX + (h.userData.baseX > 0 ? -0.07 : 0.07);
    }
  }
  renderer.render(scene, camera);
}

window.__lw3d = {
  update(id, p, inHall, speed) {
    if (!started || !segs.length) return;
    const s = segs.find(x => x.id === id);
    if (s) targetZ = s.start - Math.max(0, Math.min(1, p)) * (s.len - 1.4);
    if (id === 'gb' && doorL) {
      const open = Math.max(0, (p - 0.45) / 0.55) * 1.5;
      doorL.rotation.y = -open; doorR.rotation.y = open;
      if (doorLight) doorLight.intensity = open * 9;
    }
  }
};
addEventListener('lw-books', init0);
function init0() { if (window.__LW_DATA) init(); }
if (window.__LW_DATA) init();
