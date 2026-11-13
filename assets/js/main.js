/* ============================================================
   VC LATE NIGHT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initBar();
  initPlayer();
});

function initBar() {
  const bar = document.querySelector('.bar');
  if (!bar) return;
  const onScroll = () => bar.classList.toggle('bar--solid', window.scrollY > 60);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* Picking a title opens a full-screen player.
 *
 * An earlier version swapped the iframe into the tile itself, which meant
 * watching a sketch in a 300px box in a row — nobody does that, and no
 * streaming UI works that way. Selecting a title should give you the title.
 *
 * Still nothing loads until something is picked: the iframe is created on
 * open and destroyed on close, so no player code is fetched for videos
 * nobody watched, and closing actually stops playback rather than leaving
 * audio running behind the page.
 */
function initPlayer() {
  const modal = document.querySelector('.player');
  if (!modal) return;

  const stage = modal.querySelector('.player-stage');
  const label = modal.querySelector('.player-title');
  let lastFocus = null;

  const open = (id, title, portrait) => {
    if (!id) return;
    lastFocus = document.activeElement;
    label.textContent = title || '';
    stage.classList.toggle('player-stage--portrait', !!portrait);
    stage.innerHTML =
      '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1&rel=0" title="' + (title || 'VC Late Night') + '" allowfullscreen ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.player-close').focus();
  };

  const close = () => {
    modal.hidden = true;
    stage.innerHTML = '';           // destroys the iframe, stopping playback
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  document.querySelectorAll('[data-yt]').forEach(el => {
    const go = () => open(
      el.getAttribute('data-yt'),
      el.getAttribute('data-title'),
      el.hasAttribute('data-portrait')
    );
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
    });
  });

  modal.querySelector('.player-close').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
}
