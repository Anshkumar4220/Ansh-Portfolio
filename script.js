// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('show'); }});
},{threshold:0.18});
document.querySelectorAll('[data-anim]').forEach(el=>io.observe(el));

// Lightbox
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbVid = document.getElementById('lb-video');

function openLightboxImage(src){
  lb.style.display = 'grid';
  lbVid.style.display = 'none'; lbVid.src = '';
  lbImg.style.display = 'block'; lbImg.src = src;
  document.body.style.overflow = 'hidden';
}
function openLightboxVideo(src){
  lb.style.display = 'grid';
  lbImg.style.display = 'none'; lbImg.src = '';
  lbVid.style.display = 'block';
  lbVid.src = src + (src.includes('?')?'&':'?') + 'autoplay=1';
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  lb.style.display = 'none'; lbImg.src=''; lbVid.src='';
  document.body.style.overflow = '';
}
window.closeLightbox = closeLightbox;

document.querySelectorAll('.work-card').forEach(card=>{
  card.addEventListener('click', ()=>{
    const type = card.getAttribute('data-type');
    const src  = card.getAttribute('data-src');
    if(type==='video') openLightboxVideo(src);
    else openLightboxImage(src);
  });
});