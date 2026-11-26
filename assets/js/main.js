document.addEventListener('DOMContentLoaded', () => {
  /* ===== Menú móvil ===== */
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');

  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));

  menu.querySelectorAll('.navbar__link').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) setMenu(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  /* ===== Año del footer ===== */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ===== ¿Está abierto? (L–V 9:00–18:00, hora de la CDMX) ===== */
  const status = document.getElementById('open-status');
  if (!status) return;

  const OPEN = 9;
  const CLOSE = 18;
  const DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

  const nowInMexicoCity = () => {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Mexico_City',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23',
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    return { day, hour: Number(get('hour')) + Number(get('minute')) / 60 };
  };

  const isWorkday = (d) => d >= 1 && d <= 5;

  const render = () => {
    let now;
    try {
      now = nowInMexicoCity();
    } catch {
      return; // se queda el texto por defecto
    }
    const { day, hour } = now;

    if (isWorkday(day) && hour >= OPEN && hour < CLOSE) {
      status.textContent = 'Abierto ahora · cerramos a las 6 pm';
      status.className = 'ticket__status is-open';
      return;
    }

    let msg;
    if (isWorkday(day) && hour < OPEN) {
      msg = 'Cerrado · abrimos hoy a las 9 am';
    } else {
      let next = (day + 1) % 7;
      while (!isWorkday(next)) next = (next + 1) % 7;
      msg = next === (day + 1) % 7
        ? 'Cerrado · abrimos mañana a las 9 am'
        : `Cerrado · abrimos el ${DAYS[next]} a las 9 am`;
    }
    status.textContent = msg;
    status.className = 'ticket__status is-closed';
  };

  render();
  setInterval(render, 60 * 1000);
});
