/* ============================================================
CONFIG.JS - Can Bellès (pàgina principal)
============================================================ */

const CONFIG = {

// 1. NEGOCI
COOK:           "cookies_garnatxa",
NOM:            "La Garnatxa",
LOGO:           "logo/logoGNX.webp",
LOGO_T:         "logo/logoGNX.png",
SLOGAN:         "de ca l'Isidret",
TELEFON:        "930000000",            TELEFON_LABEL:   "Telèfon",     TELEFON_ICO: "📞",
MOBIL:          "000 00 00 00",
WHATSAPP:       "https://wa.me/",       WHATSAPP_LABEL:  "💬 Escríbenos por WhatsApp",
EMAIL:          "info@lagarnatxa.com",   EMAIL_LABEL:     "e-Mail",       EMAIL_ICO: "✉️",
ADRECA:         "C/Amalia Soler, 179  08720  Vilafranca del Penedès",
ADRECA_LABEL: "Adreça",
ADRECA_ICO: "📍",
HORA_0:         "Horari",   HR: "🕐",
HORA_1:         "De dilluns a dissabte de 13:00h a 15:30h.",
HORA_2:         "Divendres i dissabte de  13:00h a 15:30h - 20:45 a 23:30h",
HORA_3:         "Diumenge: Tancat",
INSTAGRAM:      "https://www.instagram.com/la_garnatxa/",
FACEBOOK:       "",
EMAIL_SUPORT:   "info@alterwebstudio.com",
//-------------------------------------------------------------------------------------------------------------------------

// 2. RUTES
REPO_URL:       "https://alterweb-studio.github.io/lagarnatxa/",
BASE_URL:       "./",
BASE_WORKER:    "https://.altervector.workers.dev",
URL_OFICIAL:    "https://alterweb-studio.github.io/lagarnatxa/",
ASSETS:         "https://altervector.github.io/assets/",
URL_MAPS:       "https://maps.app.goo.gl/bPUYSe6y6vyTsYwK7",
URL_RESSENYES:  "https://maps.app.goo.gl/bPUYSe6y6vyTsYwK7",

// 3. IMATGES 
BACKGROUND:      "", // ← canviar en el css .html{}
BLOC_HERO:       "images/garnatxa/hero-garnatxa.webp", 
QR:              "qr/qr-.png",
//-------------------------------------------------------------------------------------------------------------------------

// 4. TEXTOS---------------------------------------------------------------------------------------------------------------
NAV_INICI:        "Inici",
NAV_MENUS:        "Menús",
NAV_CARTA:        "Carta",
NAV_VINS:         "Vins i Caves",
NAV_COMANDES:     "Per emportar",
NAV_RESERVES:     "Reserves",

            //

HERO_BOTO:      "Qui som...",



QUI_SOM:            "Qui som...",
QUI_DESC1:          "Can Bellés és el fruit del projecte d'una empresa familiar que va obrir les portes l'any 2007 amb l'objectiu d'oferir als nostres clients un menjar de qualitat en un ambient agradable.",
QUI_DESC2:          "En la nostra carta trobareu plats típics de la cuina casolana mediterrània, que imprimeixen el caràcter de les nostres tapes, arrossos, carns i peixos a la brasa i les nostres postres casolanes.",
QUI_DESC3:          "Si ens vols venir a conéixer, estem al carrer",


COMANDES:           "Comandes per emportar",
COMANDES1:          "Vols gaudir de la nostra carta fora del Restaurant?",
COMANDES2:          "Cap problema, fes ara la teva comanda i passa a recollir-la quan et vagi millor.",
COMANDES3:          "Els teus plats preferits estaran preparats i llestos per endur-te’ls i gaudir-los allà on vulguis.",
COMANDES4:          "No fem entregues a domicili.",
//-------------------------------------------------------------------------------------------------------------------------




// 5. SERVEIS (graella)
QUE_FEM_SRV:        "La nostra cuina..",
QUE_FEM1:            "Des del nostre petit racó al cor del Penedès, a Can Bellés fem una aposta clara per la cuina tradicional catalana i el producte de proximitat.",
QUE_FEM2:            "Amb la cuina de brasa com a bandera, oferim als nostres comensals una experiència gastronòmica de sabors arrelats a la nostra tradició.",
//-------------------------------------------------------------------------------------------------------------------------

// 6. MAPS MENUS-------------------------------------------------------------------------------------------------------------------------
MENUS_CANBELLES: [
{ id: "carta",    titol: "La nostra Carta",          desc: "",                                                                                                                        img: "images/belles/carta.png",       accio: "obrirModalCarta()" },
{ id: "vins",     titol: "Els nostres Vins i Caves", desc: "",                                                                                                                        img: "images/belles/vins.jpg",        accio: "obrirModalVins()" },
{ id: "menus",    titol: "Menú Diari",               desc: "Oferim un menú diari variat amb productes de temporada.<br>Primer plat, segón plat i postres amb begudes i pa inclosos.", img: "images/belles/carta.png",       accio: "obrirModalMenuDiari()" },
{ id: "",         titol: "Menú Cap de Setmana",      desc: "Consulta el horari i menú de cap de setmana.",                                                                            img: "images/belles/menucds.png",     accio: "obrirModalMenuCDS()" },
{ id: "",         titol: "Menús per a Grups",        desc: "A Can Bellés disposem de menús per a grups de totes les mides que s’adapten a les seves necesitats.",                     img: "images/belles/menugrups.png",   accio: "obrirModalMenuGrups()" },
],

CAPTURES: {
carta:     "images/belles/captures/carta.png",
vins:      "images/belles/captures/vins.png",
menuDiari: "images/belles/captures/menu.png",
menuCDS:   "images/belles/captures/menu.png",
menuGrups: "images/belles/captures/menu.png",
},
//------------------------------------------------------------------------------------------------------------------------

// 7. ON SOM-----------------------------------------------------------------------------------------------------------   
ON_SOM:            "On som...",
ON_SOM_TIT:        "T'esperem a ",

//-------------------------------------------------------------------------------------------------------------------------

// 8. SEGURETAT
SITIOS_SEGUROS: ["alterwebstudio.com", "pages.dev", "alterweb-studio.github.io", "localhost", "127.0.0.1"],
};
