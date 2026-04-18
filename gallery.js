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
