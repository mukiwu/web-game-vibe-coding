(function () {
  function ensureRemixIcon() {
    if (!document.querySelector('link[href*="remixicon"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css';
      document.head.appendChild(link);
    }
  }

  function renderFooter() {
    if (document.getElementById('global-footer')) return;

    const container = document.createElement('div');
    container.setAttribute('id', 'global-footer');
    container.style.marginTop = '2rem';
    container.style.textAlign = 'center';

    container.innerHTML = `
      <div style="background:#ffffff; border-radius:12px; box-shadow:0 10px 15px rgba(0,0,0,0.1); padding:16px; max-width:480px; margin:0 auto 24px;">
        <div style="color:#6b7280; margin-bottom:8px;">Created with ❤️ by MUKI Vibe Coding</div>
        <div style="display:flex; justify-content:center; gap:16px;">
          <a href="https://muki.tw" target="_blank" style="color:#3b82f6; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
            <i class="ri-global-line"></i>
            MUKI space*
          </a>
          <a href="https://github.com/mukiwu/web-game-vibe-coding" target="_blank" style="color:#3b82f6; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
            <i class="ri-github-fill"></i>
            GitHub
          </a>
        </div>
      </div>`;

    document.body.appendChild(container);
  }

  function init() {
    ensureRemixIcon();
    renderFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


