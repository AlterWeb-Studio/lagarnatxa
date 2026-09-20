/* ============================================================
   MAIN.JS
   Construeix tota la pàgina a partir de CONFIG
   ============================================================ */

(function() {

    const inicialitzar = async () => {

                                    /* ── 1. NAVBAR ─────────────────────────────────────── 
                                    const navbar = document.getElementById('navbar');
                                    if (navbar) {
                                        navbar.innerHTML = `
                                            <nav class="navbar">
                                                <div class="navbar-logo">
                                                    <img src="${CONFIG.ASSETS}${CONFIG.LOGO_T}" alt="${CONFIG.NOM}">
                                                </div>
                                                <button class="navbar-hamburguesa">☰</button>
                                                <ul class="navbar-menu">
                                                    <li><a href="#inici">${CONFIG.NAV_INICI}</a></li>
                                                    <li><a href="#qui-som">${CONFIG.NAV_NOSALTRES}</a></li>
                                                    <li><a href="#serveis">${CONFIG.NAV_SERVEIS}</a></li>
                                                    <li><a href="#perque">${CONFIG.NAV_PXQ}</a></li>
                                                    <li><a href="#contacte">${CONFIG.NAV_CONTACTE}</a></li>
                                                </ul>
                                            </nav>
                                        `;
                                    }*/

                /* ── 1. NAVBAR 2.0─────────────────────────────────────── */
        const navbar2 = document.getElementById('navbar2');
        if (navbar2) {
            navbar2.innerHTML = `
                <nav class="navbar">
                    <div class="navbar-logo">
                        <img src="${CONFIG.ASSETS}${CONFIG.LOGO_T}" alt="${CONFIG.NOM}">
                    </div>
                    <button class="navbar-hamburguesa">☰</button>
                    <ul class="navbar-menu">
                        <li><a href="index.html#inici">${CONFIG.NAV_INICI}</a></li>

                    </ul>
                </nav>
            `;
        }



        // Long press logo → login (per si un dia hi ha admin)
        const logo = document.querySelector('.navbar-logo img');
        let timerLogo;
        const iniciarPress = (e) => {
            e.preventDefault();
            timerLogo = setTimeout(() => {
                if (typeof window.obrirModalLogin === 'function') window.obrirModalLogin();
            }, 1500);
        };
        const aturarPress = () => clearTimeout(timerLogo);
        logo.addEventListener('mousedown',  iniciarPress);
        logo.addEventListener('mouseup',    aturarPress);
        logo.addEventListener('mouseleave', aturarPress);
        logo.addEventListener('touchstart', iniciarPress, { passive: false });
        logo.addEventListener('touchend',   aturarPress);
        logo.addEventListener('contextmenu', (e) => e.preventDefault());

                        /*<span class="hero-eyebrow">Taller de Motocicletes</span>
                        <h1 class="hero-titol">${CONFIG.NOM}</h1>
                        <p class="hero-slogan">${CONFIG.SLOGAN}</p>*/
        /* ── 2. HERO ───────────────────────────────────────── */
        const hero = document.getElementById('hero');
        if (hero) {
            hero.innerHTML = `
                  <section class="hero" id="Inici">
                    <img class="hero-imatge" src="${CONFIG.ASSETS}${CONFIG.BLOC_HERO}"
                        alt="${CONFIG.NOM}">
                    <div class="hero-overlay"></div>
                    <!--div class="hero-contingut">
                        <p class="hero-slogan">${CONFIG.SLOGAN}</p>
                        <h1 class="hero-titol">Restaurant</h1>
                        <h1 class="hero-titol">${CONFIG.NOM}</h1>
                        <a href="#qui-som" class="hero-boto-principal">${CONFIG.HERO_BOTO}</a>
                    </div-->
                </section>
            `;
        }


        /* ── 3. STATS ──────────────────────────────────────── 
        const stats = document.getElementById('stats');
        if (stats) {
            stats.innerHTML = `
                <div class="stats-franja">
                    <div class="stat-item">
                        <div class="stat-numero">${CONFIG.ANYS_EXPERIENCIA}</div>
                        <div class="stat-label">${CONFIG.ANYS_EXPERIENCIA2}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-numero">${CONFIG.MOTOS_REPARADES}</div>
                        <div class="stat-label">${CONFIG.MOTOS_REPARADES2}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-numero">${CONFIG.CLIENTS}</div>
                        <div class="stat-label">${CONFIG.CLIENTS2}</div>
                    </div>

                    <a href="${CONFIG.URL_RESSENYES}" target="_blank" rel="noopener" class="stat-item stat-google">
                        <div class="stat-numero">${CONFIG.ESTRELLES}⭐</div>
                        <div class="stat-label">${CONFIG.ESTRELLES2}</div>
                     <div class="stat-cta">Ver reseñas</div>
</a>

                </div>
            `;
        }*/


        /* ── 4. SECCIONS ───────────────────────────────────── */
        const seccions = document.getElementById('seccions');
        if (seccions) {

            // Construeix les targetes de serveis a partir de CONFIG.SERVEIS
           /* const cardsMenus = CONFIG.MENUS_CANBELLES.map(m => `
                <div class="servei-card" onclick="${m.accio}" style="cursor:pointer; padding:0; overflow:hidden;">
                    <img src="${CONFIG.ASSETS}${m.img}" alt="${m.titol}" style="width:100%; height:160px; object-fit:cover; display:block;">
                    <div style="padding:14px 16px 16px;">
                        <div class="servei-titol">${m.titol}</div>
                        ${m.desc ? `<div class="servei-desc">${m.desc}</div>` : ''}
                    </div>
                </div>
            `).join('');*/

            const cardsMenus = CONFIG.MENUS_CANBELLES.map(m => `
                <div class="servei-card" id="${m.id || ''}" onclick="${m.accio}" style="cursor:pointer; padding:0; overflow:hidden;">
                    <img src="${CONFIG.ASSETS}${m.img}" alt="${m.titol}" style="width:100%; height:160px; object-fit:cover; display:block;">
                     <div style="padding:14px 16px 16px;">
                        <div class="servei-titol">${m.titol}</div>
                         ${m.desc ? `<div class="servei-desc">${m.desc}</div>` : ''}
                </div>
                </div>
            `).join('');


            seccions.innerHTML = `

                <!-- QUI SOM -->
                <section class="seccio" id="qui-som">
                    <h2 class="seccio-titol">${CONFIG.QUI_SOM}</h2>
                    <p class="seccio-text">${CONFIG.QUI_DESC1}</p>
                    <p class="seccio-text">${CONFIG.QUI_DESC2}</p>
                    <p class="seccio-text">
                        ${CONFIG.QUI_DESC3}
                        <a href="${CONFIG.URL_MAPS}" target="_blank">${CONFIG.ADRECA}</a>.
                    </p>
                    <a href="tel:${CONFIG.TELEFON}" class="hero-boto-principal btn-balla"
                        style="display:inline-block; margin-top: 8px;">
                        ${CONFIG.TELEFON_ICO} Trucan's
                    </a>
                </section>

                <!-- SERVEIS -->
                <section class="seccio">
                    <h2 class="seccio-titol">${CONFIG.QUE_FEM_SRV}</h2>
                    <p class="seccio-text">${CONFIG.QUE_FEM1}</p>
                    <p class="seccio-text">${CONFIG.QUE_FEM2}</p>
                   <div class="serveis-grid">
                        ${cardsMenus}
                    </div>
                </section>

                 <!-- PER EMPORTAR -->
                <section class="seccio" id="per-emportar">
                    <h2 class="seccio-titol">${CONFIG.COMANDES}</h2>
                    <p class="seccio-text">${CONFIG.COMANDES1}</p>
                    <p class="seccio-text">${CONFIG.COMANDES2}</p>
                    <p class="seccio-text">${CONFIG.COMANDES3}</p>
                    <p class="seccio-text">${CONFIG.COMANDES4}</p>
                    <a href="tel:${CONFIG.TELEFON}" class="hero-boto-principal btn-balla"
                        style="display:inline-block; margin-top: 8px;">
                        ${CONFIG.TELEFON_ICO} Trucan's
                    </a>
                </section>

                <!-- CONTACTE -->
                <section class="seccio" id="contacte">
                    <h2 class="seccio-titol">${CONFIG.ON_SOM_TIT}</h2>
                    <div class="contacte-grid">
                        <div class="contacte-item">
                            <div class="contacte-ico">${CONFIG.ADRECA_ICO}</div>
                            <div>
                                <div class="contacte-label">${CONFIG.ADRECA_LABEL}</div>
                                <div class="contacte-valor">
                                    <a href="${CONFIG.URL_MAPS}" target="_blank">${CONFIG.ADRECA} (Maps)</a>
                                </div>
                            </div>
                        </div>
                        <div class="contacte-item">
                            <div class="contacte-ico">${CONFIG.TELEFON_ICO}</div>
                            <div>
                                <div class="contacte-label">${CONFIG.TELEFON_LABEL}</div>
                                <div class="contacte-valor">
                                    <a href="tel:${CONFIG.TELEFON}">${CONFIG.TELEFON}</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="contacte-item">
                            <div class="contacte-ico">${CONFIG.EMAIL_ICO}</div>
                            <div>
                                <div class="contacte-label">${CONFIG.EMAIL_LABEL}</div>
                                <div class="contacte-valor">
                                    <a href="mailto:${CONFIG.EMAIL}">${CONFIG.EMAIL}</a>
                                </div>
                            </div>
                        </div>
                        <div class="contacte-item">
                            <div class="contacte-ico">${CONFIG.HR}</div>
                            <div>
                                <div class="contacte-label">${CONFIG.HORA_0}</div>
                                <div class="contacte-valor">
                                    ${CONFIG.HORA_1}<br>
                                    ${CONFIG.HORA_2}<br>
                                    ${CONFIG.HORA_3}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }


        /* ── 5. FOOTER ─────────────────────────────────────── */
        const footer = document.getElementById('footer');
        if (footer) {
            footer.innerHTML = `
                <footer class="footer">
                    <p class="footer-nom">${CONFIG.NOM}</p>
                    <p class="footer-slogan">${CONFIG.SLOGAN}</p>
                    <div class="footer-xarxes">
                        

                        <a href="${CONFIG.INSTAGRAM}" target="_blank">
                            <img src="${CONFIG.ASSETS}icon/Icoinsta.png" alt="Instagram" class="icona-app"> Instagram
                        </a>

                        <a href="${CONFIG.URL_RESSENYES}" target="_blank">
                                <img src="${CONFIG.ASSETS}icon/google.png" alt="Google" class="icona-app">Google (Reseñas)
                        </a>

                    </div>
                            <p class="footer-qr">
                                <a href="${CONFIG.ASSETS}${CONFIG.QR}">
                                    <img src="${CONFIG.ASSETS}${CONFIG.QR}" alt="QR">
                                </a>
                            </p>


                    <p style="font-size:13px; color: var(--gris);">
                        <a href="${CONFIG.URL_MAPS}" target="_blank">${CONFIG.ADRECA}</a>
                    </p>
                <div class="footer-legal">
                    <a href="aviso-legal.html">Aviso Legal</a>
                    <a href="privacitat.html">Política de privacidad</a>
                    <a href="cookies.html">Uso de Cookies</a>
                </div>
                    <p class="footer-poweredby">
                        Powered by <a href="https://www.alterwebstudio.com" target="_blank">AlterWeb Studio</a>
                    </p>
                        <!-- #visites s'omple via Worker (BLOC 6) -->
                        <span id="visites"></span>

                </footer>
            `;
        }


        /* ── 6. NAVBAR SCROLL ──────────────────────────────── */
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.navbar');
            if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
        });

        document.addEventListener('contextmenu', (e) => e.preventDefault());

                fetch(`${CONFIG.BASE_WORKER}/visites`)
                .then(r => r.json())       // converteix resposta a objecte JS
                .then(data => {
                const el = document.getElementById('visites');
                if (el && data.visites) {
                    el.textContent = `${data.visites} visites`;
                }
                })
                .catch(() => {}); // Si el Worker no respon → no passa res, el span queda buit

var barraFixa = document.createElement('div');
barraFixa.className = 'barra-fixa-mobil';

var botoTrucar = document.createElement('a');
botoTrucar.href = 'tel:' + CONFIG.TELEFON;
botoTrucar.className = 'boto-fix trucar';
botoTrucar.textContent = 'Reserves';

var botoWhats = document.createElement('a');
botoWhats.href = CONFIG.WHATSAPP;
botoWhats.target = '_blank';
botoWhats.rel = 'noopener';
botoWhats.className = 'boto-fix whatsapp';
botoWhats.textContent = 'WhatsApp';

barraFixa.appendChild(botoTrucar);
/*barraFixa.appendChild(botoWhats);*/
document.body.appendChild(barraFixa);





    }; // fi inicialitzar

    if (document.readyState === "complete" || document.readyState === "interactive") {
        inicialitzar();
    } else {
        document.addEventListener("DOMContentLoaded", inicialitzar);
    }

})();
