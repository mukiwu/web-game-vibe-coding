(function () {
  async function loadMenu() {
    try {
      const res = await fetch('menu.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to load menu.json');
      const items = await res.json();
      renderMenu(items);
    } catch (err) {
      console.error('[menu] load error:', err);
    }
  }

  function renderMenu(items) {
    // Tailwind CSS
    const container = document.createElement('nav');
    container.setAttribute('id', 'global-menu');
    container.style.position = 'sticky';
    container.style.top = '0';
    container.style.zIndex = '50';
    container.style.backdropFilter = 'saturate(180%) blur(10px)';
    container.style.width = '100%';
    container.style.alignSelf = 'stretch';
    container.style.left = '0';
    container.style.right = '0';

    container.innerHTML = `
      <div style="background: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(0,0,0,0.06);">
        <div style="max-width: 1200px; margin: 0 auto; padding: 8px 16px; display:flex; align-items:center; gap:12px; flex-wrap: wrap;">
          <a href="#" style="font-weight:700; color:#111827; text-decoration:none; margin-right:8px; white-space:nowrap">🎮 Vibe Coding Game</a>
          <div style="display:flex; gap:8px; flex-wrap: wrap;">
            ${items.map(it => `
              <a href="${it.href}" style="display:inline-flex; align-items:center; gap:6px; padding:6px 10px; border-radius:8px; text-decoration:none; color:#111827; background: rgba(0,0,0,0.04);">
                <span>${it.emoji || '🎯'}</span>
                <span style="font-size: 14px;">${it.title}</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>`;

    const body = document.body;
    if (body.firstChild) {
      body.insertBefore(container, body.firstChild);
    } else {
      body.appendChild(container);
    }

    // To avoid overwriting the existing header, add a top margin as appropriate to the situation.
    document.documentElement.style.scrollPaddingTop = '56px';
  }

  // Load after DOMReady
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMenu);
  } else {
    loadMenu();
  }
})();

