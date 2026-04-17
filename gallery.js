/* gallery.js — 3-Room VR Gallery with click-to-purchase */

const artworks = {
  'artwork-1': { title: 'Golden Bond', creator: 'Mia', medium: 'Acrylic on canvas', dimensions: '24×30 inches', year: '2024', price: 450, status: 'available', room: 'encouragement', description: 'A richly detailed work in Prismacolor pencil on high quality brown paper. The warm earth tones of the paper become part of the piece itself, grounding the composition in natural warmth and texture.', bgStyle: 'linear-gradient(135deg,#2a1205,#e0756066)', accentColor: '#e07560', stripeLink: 'https://buy.stripe.com/YOUR_LINK_1' },
  'artwork-2': { title: 'Grateful Sight', creator: 'Tamara R.', medium: 'Mixed media', dimensions: '18×24 inches', year: '2024', price: 280, status: 'available', room: 'encouragement', description: 'A luminous acrylic on canvas exploring the beauty found when we slow down and truly see. Layers of color build a scene that rewards the time you spend with it.', bgStyle: 'linear-gradient(135deg,#2a1a05,#c9a96e55)', accentColor: '#c9a96e', stripeLink: 'https://buy.stripe.com/YOUR_LINK_2' },
  'artwork-3': { title: 'She Believed', creator: 'Mia', medium: 'Acrylic & gold leaf', dimensions: '20×20 inches', year: '2024', price: 520, status: 'available', room: 'encouragement', description: 'Gold leaf applied over layers of raw acrylic. A piece about the moment self-doubt gives way to quiet certainty.', bgStyle: 'linear-gradient(135deg,#1a1005,#c9a96e77)', accentColor: '#c9a96e', stripeLink: 'https://buy.stripe.com/YOUR_LINK_3' },
  'artwork-4': { title: 'Keep Going', creator: 'Aisha K.', medium: 'Watercolor', dimensions: '12×16 inches', year: '2024', price: 145, status: 'available', room: 'encouragement', description: 'Painted on the hardest day of Aisha\'s year, this piece became her proof that creativity persists even when everything feels impossible.', bgStyle: 'linear-gradient(135deg,#200a0a,#e0756044)', accentColor: '#e07560', stripeLink: 'https://buy.stripe.com/YOUR_LINK_4' },
  'artwork-5': { title: 'Rooted', creator: 'Mia', medium: 'Ink on paper', dimensions: '16×20 inches', year: '2024', price: 320, status: 'available', room: 'grounded', description: 'An exploration of rootedness, the invisible systems beneath us that hold everything up. Drawn in one continuous session, eyes half-closed, breath slow.', bgStyle: 'linear-gradient(135deg,#0a140a,#8aab9655)', accentColor: '#8aab96', stripeLink: 'https://buy.stripe.com/YOUR_LINK_5' },
  'artwork-6': { title: 'Still Water', creator: 'Jessica M.', medium: 'Watercolor', dimensions: '12×16 inches', year: '2024', price: 180, status: 'available', room: 'grounded', description: 'Painted after a morning meditation practice, this piece captures the quality of stillness that comes when you stop trying to control everything.', bgStyle: 'linear-gradient(135deg,#050f14,#4a8a8a55)', accentColor: '#4a8a8a', stripeLink: 'https://buy.stripe.com/YOUR_LINK_6' },
  'artwork-7': { title: 'Breathe', creator: 'Mia', medium: 'Acrylic', dimensions: '18×24 inches', year: '2023', price: 395, status: 'available', room: 'grounded', description: 'Soft sage layers built up slowly over three days. The piece was finished on an exhale. It asks nothing of the viewer except that they slow down.', bgStyle: 'linear-gradient(135deg,#0a1408,#8aab9666)', accentColor: '#8aab96', stripeLink: 'https://buy.stripe.com/YOUR_LINK_7' },
  'artwork-8': { title: 'The Earth Holds You', creator: 'Mia', medium: 'Mixed media on canvas', dimensions: '24×30 inches', year: '2024', price: 480, status: 'available', room: 'grounded', description: 'Textured earth tones with embedded natural materials. A reminder that the ground beneath us is always there, even when we forget to feel it.', bgStyle: 'linear-gradient(135deg,#120e05,#7a6a4a55)', accentColor: '#a08a6a', stripeLink: 'https://buy.stripe.com/YOUR_LINK_8' },
  'artwork-9': { title: 'Golden Hour, Interior', creator: 'Mia', medium: 'Acrylic on canvas', dimensions: '30×40 inches', year: '2024', price: 950, status: 'available', room: 'luxury', description: 'The flagship piece. Warm interior light rendered in layers of cadmium gold and burnt sienna. A statement work for a space that deserves to be transformed.', bgStyle: 'linear-gradient(135deg,#0d0a02,#c9a96e66)', accentColor: '#c9a96e', stripeLink: 'https://buy.stripe.com/YOUR_LINK_9' },
  'artwork-10': { title: 'Orbit & Grace', creator: 'Mia', medium: 'Acrylic, gold leaf', dimensions: '36×36 inches', year: '2024', price: 1200, status: 'available', room: 'luxury', description: 'A large-scale meditation on cycles and feminine power. Gold leaf applied in the final layer catches light differently throughout the day. Collectors piece.', bgStyle: 'linear-gradient(135deg,#020710,#2a1a6e66)', accentColor: '#8080dd', stripeLink: 'https://buy.stripe.com/YOUR_LINK_10' },
  'artwork-11': { title: 'The Reset', creator: 'Mia', medium: 'Mixed media', dimensions: '24×32 inches', year: '2023', price: 780, status: 'available', room: 'luxury', description: 'The piece that started the RaiCreates brand. Deep jewel tones over black gesso. Raw, intentional, and completely unrepeatable.', bgStyle: 'linear-gradient(135deg,#0a0212,#6a1a7a66)', accentColor: '#aa60cc', stripeLink: 'https://buy.stripe.com/YOUR_LINK_11' },
  'artwork-12': { title: 'Sovereign', creator: 'Mia', medium: 'Oil on canvas', dimensions: '20×30 inches', year: '2024', price: 1500, status: 'available', room: 'luxury', description: 'Twelve layers of oil paint built over six weeks. Deep navy, midnight black, and 24-karat gold detail. Certificate of authenticity included.', bgStyle: 'linear-gradient(135deg,#020508,#c9a96e88)', accentColor: '#c9a96e', stripeLink: 'https://buy.stripe.com/YOUR_LINK_12' }
};

const rooms = {
  encouragement: { label: 'Room 1', name: 'Encouragement', tagline: 'You are capable of more than you know.', skyColor: '#100603', floorColor: '#140a05', wallColor: '#1a0d07', accentColor: '#e07560', lightColors: ['#e07560','#c9a96e','#ff9955'], artworkIds: ['artwork-1','artwork-2','artwork-3','artwork-4'], ambientColor: '#3a1a08' },
  grounded:      { label: 'Room 2', name: 'Grounded',      tagline: 'Breathe. You are exactly where you need to be.', skyColor: '#030a05', floorColor: '#060d06', wallColor: '#08100a', accentColor: '#8aab96', lightColors: ['#8aab96','#6a9a80','#aaccaa'], artworkIds: ['artwork-5','artwork-6','artwork-7','artwork-8'], ambientColor: '#0e1e12' },
  luxury:        { label: 'Room 3', name: 'Luxury Gallery', tagline: 'Collector-quality works for extraordinary spaces.', skyColor: '#020203', floorColor: '#060606', wallColor: '#090909', accentColor: '#c9a96e', lightColors: ['#c9a96e','#fff0cc','#d4af6a'], artworkIds: ['artwork-9','artwork-10','artwork-11','artwork-12'], ambientColor: '#150f04' }
};

let currentRoom = 'encouragement';

function filterGallery(category) {
  document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.art-card').forEach(card => {
    const cat = card.dataset.category, status = card.dataset.status;
    let show = true;
    if (category === 'mia') show = cat === 'mia';
    else if (category === 'community') show = cat === 'community';
    else if (category === 'available') show = status === 'available';
    else if (category === 'sold') show = status === 'sold';
    card.style.display = show ? '' : 'none';
  });
}

function sortGallery(value) {
  const grid = document.getElementById('galleryGrid');
  const cards = Array.from(grid.querySelectorAll('.art-card'));
  cards.sort((a, b) => { const pa = parseInt(a.dataset.price), pb = parseInt(b.dataset.price); return value === 'price-low' ? pa - pb : value === 'price-high' ? pb - pa : 0; });
  cards.forEach(c => grid.appendChild(c));
}

function getNextRoom(k) { const keys = Object.keys(rooms); return keys[(keys.indexOf(k)+1)%keys.length]; }
function getPrevRoom(k) { const keys = Object.keys(rooms); return keys[(keys.indexOf(k)-1+keys.length)%keys.length]; }

function openVR(startRoom) {
  currentRoom = startRoom || 'encouragement';
  buildVRScene(currentRoom);
  document.getElementById('vrModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchRoom(roomKey) {
  currentRoom = roomKey;
  document.querySelectorAll('.vr-room-btn').forEach(b => b.classList.toggle('active', b.dataset.room === roomKey));
  buildVRScene(roomKey);
}

function buildVRScene(roomKey) {
  const room = rooms[roomKey];
  const container = document.getElementById('vrContainer');

  const positions = [
    {pos:'-3.5 1.6 -7.8', rot:'0 0 0'},
    {pos:'0 1.6 -7.8',    rot:'0 0 0'},
    {pos:'3.5 1.6 -7.8',  rot:'0 0 0'},
    {pos:'-7.8 1.6 -4',   rot:'0 90 0'}
  ];

  const paintings = room.artworkIds.map((id, i) => {
    const art = artworks[id]; if (!art || !positions[i]) return '';
    const {pos, rot} = positions[i];
    const label = art.title.length > 18 ? art.title.substring(0,18)+'...' : art.title;
    const priceLabel = art.status === 'available' ? '$'+art.price.toLocaleString() : 'SOLD';
    return `
      <a-entity position="${pos}" rotation="${rot}">
        <a-plane width="1.85" height="1.55" color="#080604"></a-plane>
        <a-plane width="1.78" height="1.48" color="${art.accentColor}" opacity="0.55" position="0 0 0.004"></a-plane>
        <a-plane width="1.55" height="1.25" color="${art.accentColor}" opacity="0.2" position="0 0 0.008">
          <a-plane width="1.2" height="0.9" color="${art.accentColor}" opacity="0.3" position="0 0.05 0.005"></a-plane>
        </a-plane>
        <a-entity light="type:spot;color:${room.lightColors[0]};intensity:0.8;distance:3;angle:28" position="0 2.8 0.6" rotation="-75 0 0"></a-entity>
        <a-plane width="1.55" height="0.3" color="#06050300" position="0 -0.86 0.012" opacity="0.98" color="#090705">
          <a-text value="${label}" position="0 0.05 0.01" align="center" color="#f5efe6" width="1.45" wrap-count="24"></a-text>
          <a-text value="${priceLabel}" position="0 -0.07 0.01" align="center" color="${art.status==='available'?art.accentColor:'#555'}" width="0.85"></a-text>
        </a-plane>
        <a-plane width="1.85" height="1.9" opacity="0.001" position="0 -0.1 0.025" class="clickable" data-artwork-id="${id}"></a-plane>
      </a-entity>`;
  }).join('');

  const nextRoom = getNextRoom(roomKey), prevRoom = getPrevRoom(roomKey);

  const extras = roomKey === 'luxury'
    ? `<a-box position="-6.2 0.5 -3" width="0.55" height="1" depth="0.55" color="#080808"></a-box>
       <a-cylinder position="-6.2 1.05 -3" radius="0.3" height="0.06" color="${room.accentColor}" opacity="0.6"></a-cylinder>
       <a-box position="6.2 0.5 -3" width="0.55" height="1" depth="0.55" color="#080808"></a-box>
       <a-cylinder position="6.2 1.05 -3" radius="0.3" height="0.06" color="${room.accentColor}" opacity="0.6"></a-cylinder>
       <a-entity light="type:point;color:#fff8e0;intensity:0.3;distance:5" position="-6.2 2.5 -3"></a-entity>
       <a-entity light="type:point;color:#fff8e0;intensity:0.3;distance:5" position="6.2 2.5 -3"></a-entity>`
    : roomKey === 'grounded'
    ? `<a-entity position="-6.5 0 -3">
         <a-cylinder radius="0.07" height="1.6" color="#3a2a15" position="0 0.8 0"></a-cylinder>
         <a-sphere radius="0.55" color="#4a7a5a" position="0 1.75 0" opacity="0.85"></a-sphere>
       </a-entity>
       <a-entity position="6.8 0 -5.5">
         <a-cylinder radius="0.05" height="1.2" color="#3a2a15" position="0 0.6 0"></a-cylinder>
         <a-sphere radius="0.4" color="#5a8a6a" position="0 1.4 0" opacity="0.85"></a-sphere>
       </a-entity>`
    : `<a-text value="YOU GOT THIS" position="-5 3.6 -6" rotation="0 18 0" color="${room.accentColor}" opacity="0.12" width="3"></a-text>
       <a-text value="BELIEVE" position="5 3.3 -6" rotation="0 -18 0" color="${room.accentColor}" opacity="0.1" width="2"></a-text>`;

  const vrHTML = `
    <a-scene embedded vr-mode-ui="enabled:true"
      loading-screen="backgroundColor:${room.skyColor};dotsColor:${room.accentColor}"
      fog="type:exponential;color:${room.skyColor};density:0.025"
      renderer="antialias:true;colorManagement:true">
      <a-assets></a-assets>
      <a-sky color="${room.skyColor}"></a-sky>
      <a-entity light="type:ambient;color:${room.ambientColor};intensity:1"></a-entity>
      <a-entity light="type:point;color:${room.lightColors[0]};intensity:1.4;distance:18" position="0 4.5 -4"></a-entity>
      <a-entity light="type:point;color:${room.lightColors[1]||room.lightColors[0]};intensity:0.6;distance:10" position="-5 3 0"></a-entity>
      <a-entity light="type:point;color:${room.lightColors[2]||room.lightColors[0]};intensity:0.6;distance:10" position="5 3 0"></a-entity>
      <a-plane rotation="-90 0 0" width="22" height="22" color="${room.floorColor}" roughness="0.85" metalness="0.15"></a-plane>
      <a-plane rotation="-90 0 0" width="20" height="0.04" color="${room.accentColor}" opacity="0.2" position="0 0.01 -4"></a-plane>
      <a-plane rotation="90 0 0" width="22" height="22" color="${room.skyColor}" position="0 5.2 0"></a-plane>
      <a-plane position="0 2.6 -8.1" width="22" height="5.5" color="${room.wallColor}" roughness="0.95"></a-plane>
      <a-plane position="0 5.0 -8.05" width="20" height="0.05" color="${room.accentColor}" opacity="0.5"></a-plane>
      <a-plane position="0 0.55 -8.05" width="20" height="0.05" color="${room.accentColor}" opacity="0.4"></a-plane>
      <a-plane position="-8.1 2.6 -4" rotation="0 90 0" width="14" height="5.5" color="${room.wallColor}" roughness="0.95"></a-plane>
      <a-plane position="-8.05 5.0 -4" rotation="0 90 0" width="12" height="0.05" color="${room.accentColor}" opacity="0.4"></a-plane>
      <a-plane position="8.1 2.6 -4" rotation="0 -90 0" width="14" height="5.5" color="${room.wallColor}" roughness="0.95"></a-plane>
      <a-plane position="8.05 5.0 -4" rotation="0 -90 0" width="12" height="0.05" color="${room.accentColor}" opacity="0.4"></a-plane>
      <a-plane position="0 4.4 -8.0" width="4.5" height="0.55" color="${room.wallColor}" opacity="0.95">
        <a-text value="${room.name.toUpperCase()}" position="0 0.08 0.01" align="center" color="${room.accentColor}" width="4"></a-text>
        <a-text value="${room.tagline}" position="0 -0.1 0.01" align="center" color="#b0a89e" width="4.2" wrap-count="55"></a-text>
      </a-plane>
      <a-entity position="5.8 0 -0.5" rotation="0 -55 0">
        <a-plane width="1.5" height="2.6" color="${room.wallColor}" position="0 1.3 0" opacity="0.92">
          <a-plane width="1.3" height="0.06" color="${room.accentColor}" opacity="0.7" position="0 1.18 0.01"></a-plane>
          <a-text value="${rooms[nextRoom].label}" position="0 0.5 0.01" align="center" color="${room.accentColor}" width="1.2"></a-text>
          <a-text value="${rooms[nextRoom].name}" position="0 0.22 0.01" align="center" color="#f5efe6" width="1.4"></a-text>
          <a-text value="Enter  →" position="0 -0.05 0.01" align="center" color="#9e9589" width="0.95"></a-text>
        </a-plane>
        <a-plane width="1.5" height="2.6" opacity="0.001" position="0 1.3 0.12" class="clickable room-portal" data-room="${nextRoom}"></a-plane>
      </a-entity>
      <a-entity position="-5.8 0 -0.5" rotation="0 55 0">
        <a-plane width="1.5" height="2.6" color="${room.wallColor}" position="0 1.3 0" opacity="0.92">
          <a-plane width="1.3" height="0.06" color="${room.accentColor}" opacity="0.7" position="0 1.18 0.01"></a-plane>
          <a-text value="${rooms[prevRoom].label}" position="0 0.5 0.01" align="center" color="${room.accentColor}" width="1.2"></a-text>
          <a-text value="${rooms[prevRoom].name}" position="0 0.22 0.01" align="center" color="#f5efe6" width="1.4"></a-text>
          <a-text value="← Enter" position="0 -0.05 0.01" align="center" color="#9e9589" width="0.95"></a-text>
        </a-plane>
        <a-plane width="1.5" height="2.6" opacity="0.001" position="0 1.3 0.12" class="clickable room-portal" data-room="${prevRoom}"></a-plane>
      </a-entity>
      ${paintings}
      ${extras}
      <a-entity id="rig" position="0 0 4.5">
        <a-camera look-controls="pointerLockEnabled:false;magicWindowTrackingEnabled:true" wasd-controls="enabled:true;acceleration:18" cursor="fuse:false;rayOrigin:mouse">
          <a-cursor color="${room.accentColor}" fuse="false" raycaster="objects:.clickable"
            animation__enter="property:scale;to:1.4 1.4 1.4;dur:120;startEvents:mouseenter"
            animation__leave="property:scale;to:1 1 1;dur:120;startEvents:mouseleave">
          </a-cursor>
        </a-camera>
      </a-entity>
    </a-scene>`;

  container.innerHTML = vrHTML;

  setTimeout(() => {
    const scene = container.querySelector('a-scene');
    if (!scene) return;
    scene.addEventListener('click', (e) => {
      const t = e.target;
      if (t.dataset && t.dataset.artworkId) { openVRArtworkPanel(t.dataset.artworkId); return; }
      if (t.dataset && t.dataset.room && rooms[t.dataset.room]) { switchRoom(t.dataset.room); }
    });
  }, 900);
}

function openVRArtworkPanel(id) {
  const art = artworks[id]; if (!art) return;
  const existing = document.getElementById('vrArtPanel');
  if (existing) existing.remove();
  const panel = document.createElement('div');
  panel.id = 'vrArtPanel';
  panel.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:rgba(10,8,5,0.97);border-top:1px solid '+art.accentColor+';padding:1.4rem 2rem;z-index:3000;display:flex;align-items:center;gap:1.5rem;transform:translateY(100%);transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);backdrop-filter:blur(20px);';
  const isAvail = art.status === 'available';
  panel.innerHTML = `
    <div style="width:66px;height:66px;border-radius:8px;background:${art.bgStyle};border:1px solid ${art.accentColor}44;flex-shrink:0;"></div>
    <div style="flex:1;min-width:0;">
      <p style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:${art.accentColor};margin-bottom:3px;font-family:sans-serif;">${rooms[art.room].name}</p>
      <h3 style="font-family:Georgia,serif;font-size:1.25rem;font-weight:300;color:#f5efe6;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${art.title}</h3>
      <p style="font-size:12px;color:#b0a89e;font-family:sans-serif;">By ${art.creator} &bull; ${art.medium} &bull; ${art.dimensions}</p>
    </div>
    <div style="text-align:right;flex-shrink:0;">
      <p style="font-family:Georgia,serif;font-size:2rem;font-weight:300;color:${isAvail?art.accentColor:'#555'};line-height:1;">${isAvail?'$'+art.price.toLocaleString():'SOLD'}</p>
      ${isAvail
        ? `<button onclick="vrPurchase('${id}')" style="margin-top:8px;background:${art.accentColor};color:#0d0d0d;border:none;border-radius:100px;padding:10px 22px;font-family:sans-serif;font-size:13px;font-weight:600;cursor:pointer;letter-spacing:0.04em;display:block;">Purchase Now</button>
           <p style="font-size:10px;color:#666;margin-top:5px;font-family:sans-serif;text-align:center;">Secure checkout via Stripe</p>`
        : `<p style="font-size:11px;color:#666;margin-top:8px;font-family:sans-serif;">Sold. <a href="mailto:hello@raicreates.com" style="color:${art.accentColor};">Commission similar</a></p>`}
    </div>
    <button onclick="closeVRArtPanel()" style="position:absolute;top:12px;right:14px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);color:#f5efe6;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:15px;line-height:30px;text-align:center;font-family:sans-serif;">×</button>`;
  document.getElementById('vrModal').appendChild(panel);
  requestAnimationFrame(() => { panel.style.transform = 'translateY(0)'; });
}

function closeVRArtPanel() {
  const p = document.getElementById('vrArtPanel');
  if (p) { p.style.transform = 'translateY(100%)'; setTimeout(() => p.remove(), 400); }
}

function vrPurchase(id) {
  const art = artworks[id]; if (!art) return;
  if (art.stripeLink && !art.stripeLink.includes('YOUR_LINK')) {
    window.open(art.stripeLink, '_blank');
  } else {
    closeVRArtPanel(); closeVR();
    setTimeout(() => openArtwork(id), 600);
  }
}

function closeVR() {
  document.getElementById('vrModal').classList.remove('open');
  document.body.style.overflow = '';
  closeVRArtPanel();
  setTimeout(() => { document.getElementById('vrContainer').innerHTML = ''; }, 500);
}

function openArtwork(id) {
  const art = artworks[id]; if (!art) return;
  const modal = document.getElementById('artworkModal');
  const backdrop = document.getElementById('artworkBackdrop');
  const imgEl = document.getElementById('modalImg');
  const infoEl = document.getElementById('modalInfo');
  imgEl.style.cssText = `background:${art.bgStyle};width:100%;height:100%;display:flex;align-items:center;justify-content:center;`;
  const buyBtn = art.status === 'available'
    ? `<button class="btn btn-primary btn-lg" onclick="initiateCheckout('${id}')" style="margin-top:1.5rem;width:100%;">Purchase — $${art.price.toLocaleString()}</button>`
    : `<div style="margin-top:1.5rem;padding:1rem;background:var(--dark);border-radius:8px;text-align:center;color:var(--text-faint);font-size:0.88rem;">Sold. <a href="mailto:hello@raicreates.com" style="color:var(--gold);">Commission a similar piece</a></div>`;
  infoEl.innerHTML = `
    <p style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);margin-bottom:0.5rem;">${rooms[art.room]?rooms[art.room].name:''}</p>
    <p style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:${art.status==='available'?'var(--sage)':'var(--text-faint)'};margin-bottom:1rem;">${art.status==='available'?'Available':'Sold'}</p>
    <h2 style="font-family:var(--font-display);font-size:2rem;font-weight:300;color:var(--cream);margin-bottom:0.25rem;">${art.title}</h2>
    <p style="color:var(--text-faint);font-size:0.85rem;margin-bottom:1.5rem;">By ${art.creator}, ${art.year}</p>
    <p style="color:var(--text-muted);line-height:1.8;margin-bottom:1.5rem;">${art.description}</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
      <div><p style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-faint);">Medium</p><p style="color:var(--cream);font-size:0.9rem;margin-top:0.2rem;">${art.medium}</p></div>
      <div><p style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-faint);">Size</p><p style="color:var(--cream);font-size:0.9rem;margin-top:0.2rem;">${art.dimensions}</p></div>
    </div>
    <p style="font-family:var(--font-display);font-size:2.5rem;font-weight:300;color:var(--gold);">$${art.price.toLocaleString()}</p>
    ${buyBtn}
    <p style="font-size:0.75rem;color:var(--text-faint);margin-top:0.75rem;text-align:center;">Secure checkout via Stripe. Ships within 7 days.</p>`;
  modal.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArtwork() {
  document.getElementById('artworkModal').classList.remove('open');
  document.getElementById('artworkBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(id, price) {
  const toast = document.getElementById('cartToast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

async function initiateCheckout(artworkId) {
  var art = artworks[artworkId];
  if (!art) return;
  if (art.stripeLink && !art.stripeLink.includes('YOUR_LINK')) {
    window.open(art.stripeLink, '_blank');
  }
}
