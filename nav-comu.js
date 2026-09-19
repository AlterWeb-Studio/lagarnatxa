/* ============================================================
   NAV-COMU.JS
   Web Component: <nav-comu></nav-comu>
   Fa la franja superior (tel/email) + el navbar.
   Igual a totes les pàgines, es crida amb una sola etiqueta.
   ============================================================ */

class NavComu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <! div class="navbar-logo">
                    <img src="${CONFIG.ASSETS}${CONFIG.LOGO}" alt="${CONFIG.NOM}">
                </div>
                <button class="navbar-hamburguesa">☰</button>
                <ul class="navbar-menu">
                    <li><a href="#Inici">${CONFIG.NAV_INICI}</a></li>
                    <li><a href="#menus">${CONFIG.NAV_MENUS}</a></li>
                    <li><a href="#carta">${CONFIG.NAV_CARTA}</a></li>
                    <li><a href="#vins">${CONFIG.NAV_VINS}</a></li>
                    <li><a href="#per-emportar">${CONFIG.NAV_COMANDES}</a></li>
                    <li><a href="#contacte">${CONFIG.NAV_RESERVES}</a></li>
                </ul>
            </nav>
        `;

        const btnHamburguesa = this.querySelector('.navbar-hamburguesa');
        const menu = this.querySelector('.navbar-menu');
        btnHamburguesa.addEventListener('click', () => menu.classList.toggle('obert'));
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => menu.classList.remove('obert'));
        });

        window.addEventListener('scroll', () => {
            const nav = this.querySelector('.navbar');
            if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
        });
               // ─── BANNER DE COOKIES ────────────────────────────
        // Es penja al final del body, no dins del navbar mateix
        document.body.insertAdjacentHTML('beforeend', '<cookies-banner></cookies-banner>');
    
    }
}
customElements.define('nav-comu', NavComu);
