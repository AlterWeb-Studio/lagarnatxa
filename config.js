/* ============================================================
   CONFIG.JS — La Garnatxa de ca l'Isidret
   Esquelet comú (mateix ordre a totes les webs):
   1 Negoci · 2 Rutes · 3 Imatges · 4 Navbar · 5 Hero · 6 Qui som
   7 Contingut del projecte · 8 On som · 9 Seguretat · 10 Altres
   ============================================================ */

const CONFIG = {

// ═══ 1. NEGOCI ═══════════════════════════════════════════════════════════
COOK:           "cookies_garnatxa",
NOM:            "La Garnatxa",
LOGO:           "logo/logoGNX.webp",
LOGO_T:         "logo/logoGNX.png",
SLOGAN:         "de ca l'Isidret",
TELEFON:        "938171996",        TELEFON_LABEL:  "Telèfon",     TELEFON_ICO: "📞",
MOBIL:          "000 00 00 00",     // trobat a l'Instagram: 657 85 75 17 (activar si és correcte)
WHATSAPP:       "https://wa.me/",   // trobat a l'Instagram: "https://wa.me/34657857517"
WHATSAPPLABEL:  "💬 Escríbenos por WhatsApp",
EMAIL:          "info@lagarnatxa.com",   EMAIL_LABEL: "e-Mail",   EMAIL_ICO: "✉️",   // a Facebook: lagarnatxa1@gmail.com
ADRECA:         "Ctra. Barcelona, 49  08793 Avinyó Nou, Barcelona",
    ADRECA_LABEL:   "Adreça",
    ADRECA_ICO:     "📍",
HORA_0:         "Horari",   HR: "🕐",
HORA_1:         "De dimarts a dijous de 08:30h a 17:00h.",
HORA_2:         "Divendres i dissabte de  08:30h a 23:30h.",
HORA_3:         "Diumenge de 08:30h a 17:00h.",
INSTAGRAM:      "https://www.instagram.com/la_garnatxa/",
FACEBOOK:       "",                 // trobat: "https://www.facebook.com/lagarnatxadecalisidret/"
EMAIL_SUPORT:   "info@alterwebstudio.com",

// ═══ 2. RUTES ════════════════════════════════════════════════════════════
REPO_URL:       "https://alterweb-studio.github.io/lagarnatxa/",
BASE_URL:       "./",
BASE_WORKER:    "https://garnatxa.altervector.workers.dev",
URL_OFICIAL:    "https://alterweb-studio.github.io/lagarnatxa/",
ASSETS:         "https://avsets.pages.dev/",
URL_MAPS:       "https://maps.app.goo.gl/bPUYSe6y6vyTsYwK7",
URL_RESSENYES:  "https://maps.app.goo.gl/bPUYSe6y6vyTsYwK7",

// ═══ 3. IMATGES ══════════════════════════════════════════════════════════
BACKGROUND:     "",   // ← es canvia al CSS (html{})
BLOC_HERO:      "images/garnatxa/hero-garnatxa.webp",
QR:             "qr/qr-.png",

// ═══ 4. NAVBAR ═══════════════════════════════════════════════════════════
NAV_INICI:      "Inici",
NAV_MENUS:      "Menús",
NAV_CARTA:      "Carta",
NAV_VINS:       "Vins i Caves",
NAV_COMANDES:   "Per emportar",
NAV_RESERVES:   "Reserves",

// ═══ 5. HERO ═════════════════════════════════════════════════════════════
HERO_EYEBROW:   "",
HERO_TITOL:     "",
HERO_BOTO_PRI:  "",
HERO_BOTO_SEC:  "",
HERO_BOTO:      "Qui som...",

// ═══ 6. QUI SOM ══════════════════════════════════════════════════════════
QUI_SOM:        "Benvinguts a La Garnatxa de Ca l'Isidret",
QUI_SOM_TIT:    "",
QUI_SOM_DESC1:  "Des de l'any 2001, som un bar-restaurant de cuina mediterrània i tradicional compromès amb el producte de proximitat i la feina ben feta.",
QUI_SOM_DESC2:  "Un espai acollidor i familiar, pensat tant per a àpats diaris com per a trobades i celebracions especials.",
QUI_SOM_DESC3:  "Us convidem a descobrir la nostra proposta gastronòmica en un entorn on us sentireu com a casa.",
QUI_SOM_DESC4:  "L'equip de La Garnatxa de Ca l'Isidret",

// ═══ 7. CONTINGUT DEL PROJECTE (diferent a cada web) ═════════════════════

// ── 7.1 La nostra cuina ──
QUE_FEM_SRV:    "La nostra cuina..",
QUE_FEM1:       "La nostra cuina destaca pel peix, el marisc i, molt especialment, els arrossos, amb una proposta diferent cada dia.",
QUE_FEM2:       "Completem la carta amb tapes d'elaboració pròpia —com el pop, les tallarines o els cargols a la llauna— i carns a la brasa de qualitat.",
QUE_FEM3:       "Oferim menú diari i menú especial de cap de setmana, sempre basats en productes de temporada i elaborats des de zero.",

// ── 7.2 Cards de menús (carta, vins, menús...) ──
MENUS_CANBELLES: [   // nom heretat de Can Bellès — pendent de reanomenar (cal tocar main.js)
{ id: "carta",    titol: "La nostra Carta",          desc: "",                                                                                                            img: "images/garnatxa/carta.png",     accio: "obrirModalCarta()" },
{ id: "vins",     titol: "Els nostres Vins i Caves", desc: "",                                                                                                            img: "images/garnatxa/vins.png",      accio: "obrirModalVins()" },
{ id: "menus",    titol: "Menú Diari",               desc: "Menú diari variat amb productes de temporada.<br>Primer plat, segón plat amb pa, beguda i postres inclosos.", img: "images/garnatxa/menu.png",      accio: "obrirModalMenuDiari()" },
{ id: "",         titol: "Menú Cap de Setmana",      desc: "Consulta el horari i menú de cap de setmana.",                                                                img: "images/garnatxa/menucds.png",   accio: "obrirModalMenuCDS()" },
{ id: "",         titol: "Menús per a Grups",        desc: "Disposem de menús per a grups de totes les mides que s’adapten a les seves necesitats.",                      img: "images/garnatxa/menugrups.png", accio: "obrirModalMenuGrups()" },
],

// ── 7.3 Captures dels modals ──
CAPTURES: {   // ⚠ encara apunten a les imatges de Can Bellès
carta:     "images/belles/captures/carta.png",
vins:      "images/belles/captures/vins.png",
menuDiari: "images/belles/captures/menu.png",
menuCDS:   "images/belles/captures/menu.png",
menuGrups: "images/belles/captures/menu.png",
},

// ── 7.4 Per emportar ──
COMANDES:       "Servei per emportar",
COMANDES1:      "Prefereixes gaudir de la nostra cuina a casa o a la feina?",
COMANDES2:      "Encarrega els teus plats i passa a recollir-los quan millor et convingui.",
COMANDES3:      "T'ho preparem tot al moment, a punt per portar i gaudir on tu vulguis.",
COMANDES4:      "",

// ═══ 8. ON SOM ═══════════════════════════════════════════════════════════
ON_SOM:         "On som...",
ON_SOM_TIT:     "T'esperem a ",

// ═══ 9. SEGURETAT ════════════════════════════════════════════════════════
SITIOS_SEGUROS: ["alterwebstudio.com", "pages.dev", "alterweb-studio.github.io"],//, "localhost", "127.0.0.1"

// ═══ 10. ALTRES ══════════════════════════════════════════════════════════
// (res en aquest projecte)
};  