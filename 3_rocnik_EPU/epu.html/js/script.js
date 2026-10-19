// Nastavenie odsadenia stránky podľa výšky fixnej hlavičky
 
const hlavicka = document.querySelector('header');
 
function nastavVyskuHlavicky() {
  document.documentElement.style.setProperty(
    '--vyska-hlavicky',
    hlavicka.offsetHeight + 'px'
  );
}
 
nastavVyskuHlavicky();
 
window.addEventListener(
  'resize',
  nastavVyskuHlavicky
);
 
 
// ========================================
// 1. PREPNUTIE SVETLÉHO / TMAVÉHO REŽIMU
// ========================================
 
const tlacidloTema = document.querySelector('#tema');
 
tlacidloTema.addEventListener('click', function () {
 
  const tmavy =
    document.body.classList.toggle('tmavy-rezim');
 
  tlacidloTema.textContent =
    tmavy
      ? '☀️ Svetlý režim'
      : '🌙 Tmavý režim';
 
  tlacidloTema.setAttribute(
    'aria-pressed',
    String(tmavy)
  );
 
});
 
 
// ========================================
// 2. KOŠÍK
// ========================================
 
let pocetProduktov = 0;
 
document
  .querySelectorAll('.pridat')
  .forEach(function (tlacidlo) {
 
    tlacidlo.addEventListener(
      'click',
      function () {
 
        pocetProduktov++;
 
        document.querySelector('#kosik').textContent =
          '🛒 Košík: ' + pocetProduktov;
 
      }
    );
 
  });
 
 
// ========================================
// 3. ZOBRAZENIE DETAILOV PRODUKTOV
// ========================================
 
document
  .querySelectorAll('.zobrazit')
  .forEach(function (tlacidlo) {
 
    tlacidlo.addEventListener(
      'click',
      function () {
 
        const detail =
          document.getElementById(
            tlacidlo.getAttribute('aria-controls')
          );
 
        detail.hidden = !detail.hidden;
 
        tlacidlo.textContent =
          detail.hidden
            ? 'Viac informácií'
            : 'Menej informácií';
 
        tlacidlo.setAttribute(
          'aria-expanded',
          String(!detail.hidden)
                  );
 
      }
    );
 
  });