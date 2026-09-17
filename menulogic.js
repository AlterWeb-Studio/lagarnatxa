/* ============================================================
   MENULOGIC.JS — Can Bellés
   Depèn de: config.js

   QUÈ FA AQUEST FITXER:
   1. Crea el modal tipus "full de paper" i l'afegeix a l'HTML
   2. Exposa 5 funcions públiques (una per card) que obren
      el modal mostrant una imatge de captura (Carta, Vins,
      Menú Diari, Menú Cap de Setmana, Menús per a Grups)

   Versió provisional — sense Airtable ni login.
   El dia que hi hagi dades reals, es reemplaça obrirModalImatge()
   per la lògica de càrrega + pintarMenu(), com a Àgora.
   ============================================================ */

(function() {

    /* ════════════════════════════════════════════════════════
       BLOC 1 — CREACIÓ DEL MODAL (s'executa en carregar)
       Comprova si ja existeix abans de crear-lo (protecció
       anti-duplicat) i el penja al final del body.
       ════════════════════════════════════════════════════════ */
    if (!document.getElementById('modal-menu')) {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="modal-menu" style="display:none; position:fixed; top:0; left:0;
                width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:9999;
                align-items:flex-start; justify-content:center; padding:40px 20px;
                overflow-y:auto;">
                <div id="modal-menu-paper" style="
                    background: #ffffff;
                    width: 100%;
                    max-width: 550px;
                    border-radius: 8px;
                    padding: 30px 24px;
                    box-shadow: -1px 2px 8px rgba(0, 0, 0, 0.8);
                    font-family: 'Segoe UI', sans-serif;
                    position: relative;">
                    <button onclick="tancarModalMenu()" style="position:absolute;
                        top:12px; right:16px; background:none; border:none;
                        font-size:22px; cursor:pointer; color:#e53012;
                        font-family:sans-serif;">✕</button>
                    <!-- Recipient buit — s'omple dinàmicament per obrirModalImatge() -->
                    <div id="modal-menu-contingut"></div>
                </div>
            </div>
        `);
    }


    /* ════════════════════════════════════════════════════════
       BLOC 2 — TANCAR MODAL (pública)
       Pública perquè la crida el botó ✕ de l'HTML.
       ════════════════════════════════════════════════════════ */
    window.tancarModalMenu = function() {
        document.getElementById('modal-menu').style.display = 'none';
    };


    /* ════════════════════════════════════════════════════════
       BLOC 3 — OBRIR MODAL AMB IMATGE (privada)
       Rep la ruta de la imatge (relativa a CONFIG.ASSETS) i
       un títol. Injecta l'HTML al recipient i mostra el modal.
       ════════════════════════════════════════════════════════ */
    const obrirModalImatge = (imgPath, titol) => {
        document.getElementById('modal-menu-contingut').innerHTML = `
            <h2 style="text-align:center; margin-bottom:16px; color:#1f1f1f;
                font-size:1.2rem; letter-spacing:1px; text-transform:uppercase;">
                ${titol}
            </h2>
            <img src="${CONFIG.ASSETS}${imgPath}" alt="${titol}"
                style="width:100%; border-radius:6px; display:block;">
        `;
        document.getElementById('modal-menu').style.display = 'flex';
    };


    /* ════════════════════════════════════════════════════════
       BLOC 4 — FUNCIONS PÚBLIQUES (portes d'entrada)
       Cada una delega a obrirModalImatge amb la imatge i
       el títol corresponent. Les criden les 5 cards del main.js.
       ════════════════════════════════════════════════════════ */
    window.obrirModalCarta     = () => obrirModalImatge(CONFIG.CAPTURES.carta,     'La Carta');
    window.obrirModalVins      = () => obrirModalImatge(CONFIG.CAPTURES.vins,      'Vins i Caves');
    window.obrirModalMenuDiari = () => obrirModalImatge(CONFIG.CAPTURES.menuDiari, 'Menú Diari');
    window.obrirModalMenuCDS   = () => obrirModalImatge(CONFIG.CAPTURES.menuCDS,   'Menú Cap de Setmana');
    window.obrirModalMenuGrups = () => obrirModalImatge(CONFIG.CAPTURES.menuGrups, 'Menús per a Grups');

})();