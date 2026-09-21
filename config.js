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
ASSETS:         "https://avsets.pages.dev/",
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



QUI_SOM:            "Benvinguts a La Garnatxa de Ca l'Isidret",
QUI_DESC1:          "A La Garnatxa de Ca l'Isidret reobrim les portes amb la il·lusió d'oferir-vos una experiència gastronòmica autèntica, basada en la cuina mediterrània i casolana. Una cuina que recupera els sabors de sempre, elaborada amb productes frescos i de proximitat, i amb aquell toc especial que neix de la passió per la bona cuina.",
QUI_DESC2:          "Hi trobareu plats tradicionals reinterpretats amb cura i respecte: tapes, arrossos, carns a la brasa i guisats que ens recorden la cuina de les àvies. I per completar l'experiència, els nostres postres casolans i una selecció de vins pensada per acompanyar cada plat i realçar-ne els sabors.",
QUI_DESC3:          "El nostre espai és acollidor i està pensat perquè us hi sentiu com a casa, tant si veniu amb família o amics com si voleu celebrar una ocasió especial. A La Garnatxa de Ca l'Isidret, cada detall compta. Us convidem a descobrir la nostra manera d'entendre la gastronomia i a gaudir d'una cuina feta amb sabor, calidesa i dedicació.",
QUI_DESC4:         "L'equip de La Garnatxa de Ca l'Isidret",


COMANDES:           "Comandes per emportar",
COMANDES1:          "Vols gaudir de la nostra carta fora del Restaurant?",
COMANDES2:          "Cap problema, fes ara la teva comanda i passa a recollir-la quan et vagi millor.",
COMANDES3:          "Els teus plats preferits estaran preparats i llestos per endur-te’ls i gaudir-los allà on vulguis.",
COMANDES4:          "No fem entregues a domicili.",
//-------------------------------------------------------------------------------------------------------------------------




// 5. SERVEIS (graella)
QUE_FEM_SRV:        "La nostra cuina..",
QUE_FEM1:            "A La Garnatxa oferim una cuina basada en productes de proximitat i plats elaborats des de zero. Cada dia proposem un arròs diferent, amb combinacions, textures i estils que permeten gaudir de propostes variades.",
QUE_FEM2:            "Som un bar-restaurant de tota la vida que, des de l'any 2001, ofereix una carta on el peix i el marisc tenen un paper destacat, sempre amb el nostre estil propi. Els arrossos són una de les nostres especialitats, juntament amb una àmplia varietat de tapes, com el pop a la gallega, les tallarines, els cargols a la llauna o les llàgrimes de pollastre.",
QUE_FEM3:            "Treballem també amb productes de temporada, peixos i carns de qualitat i una cuina feta amb cura. Entre els nostres serveis, oferim menú diari, que sempre inclou alguna proposta d'arròs, i menú especial els caps de setmana.",
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
