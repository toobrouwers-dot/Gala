const db = {
    phases: ["🚗 Heenreis", "👔 Aankomst", "🥂 Proosten", "🍽️ Diner", "💃 Feest"],
    challenges: {
        "🚗 Heenreis": [
            "Spot een limo: jullie date moet 30 sec poseren als royalty — foto verplicht.",
            "Iemand zegt 'zijn we er al': die persoon geeft zijn/haar date direct een compliment.",
            "Zwijg 30 seconden terwijl je je date aankijkt. Wie als eerste lacht betaalt het eerste drankje.",
            "Selfie in de auto: wie het gekst of stijfst staat mag 2 slokken uitdelen.",
            "Iemand zingt mee met de radio: iedereen doet mee tot het refrein of drinkt.",
            "Wie als eerste nerveus klinkt mag 2 slokken uitdelen aan wie hij/zij maar wil."
        ],
        "👔 Aankomst": [
            "Stropdas scheef? Twee slokken — en iemand anders mag 'm recht zetten.",
            "Parfum overdosis gespot: 1 slok troostprijs voor de neuzen eromheen.",
            "Wissel een accessoire met je date voor de komende 30 minuten.",
            "Iemand zegt 'ik zie er goed uit': drink op dat zelfvertrouwen.",
            "Geef je date een nep-introductie met een indrukwekkende verzonnen titel.",
            "Eerste koppel dat binnenkomt mag het eerste rondje aanwijzen."
        ],
        "🥂 Proosten": [
            "Proost zonder oogcontact: 1 slok straf — dat hoort zo.",
            "Glazen klinken mis: iedereen herproost en drinkt.",
            "Speech langer dan 2 minuten: 1 slok per extra minuut.",
            "Iemand morst: hij/zij deelt 2 slokken uit als afleiding.",
            "Glas leeg vóór de toast: bijvullen én 1 slok bonus.",
            "Proost op de mooiste date van de avond — jouw date, uiteraard."
        ],
        "🍽️ Diner": [
            "Bestek valt: iedereen drinkt.",
            "Iemand bestelt hetzelfde als zijn/haar date: samen drinken en buigen.",
            "Stilte langer dan 5 sec: 1 slok — dat kan toch echt beter.",
            "Tafelgenoot pakt z'n telefoon: jij wijst aan wie er drinkt.",
            "Iemand ruilt eten met de date: allebei een slok.",
            "Dessert binnengebracht: proost op de kok."
        ],
        "💃 Feest": [
            "Iemand doet de worm op de dansvloer: iedereen drinkt en applaudisseert.",
            "DJ draait een pijnlijk foute plaat: wisseldrink met de persoon naast je.",
            "Schoenen uit op de dansvloer: 5 slokken dansboete.",
            "Iemand danst solo in een cirkel: getuigen drinken 1 slok.",
            "Langzame dans: wie weigert mee te dansen drinkt 2 slokken eenzaamheidsboete.",
            "Barman doet een truc of knipoogt: proost op hem/haar!"
        ]
    },
    quests: [
        { id: 1,  title: "Slow Dance Zoekers",  desc: "Overtuig de DJ voor een slow nummer en dans er samen op",                         pts: 80  },
        { id: 2,  title: "Fotobom Duo",          desc: "Fotobomb samen 3 foto's van andere koppels zonder gepakt te worden",              pts: 60  },
        { id: 3,  title: "Blind Proeven",        desc: "Ogen dicht — laat je date je iets laten proeven en raad wat het is",             pts: 45  },
        { id: 4,  title: "Danswedstrijd",        desc: "Daag een ander koppel uit voor een mini-danswedstrijd op de dansvloer",          pts: 90  },
        { id: 5,  title: "Diplomatiek Koppel",   desc: "Praat met een onbekend koppel en stel ze daarna voor aan een ander koppel",      pts: 70  },
        { id: 6,  title: "Dansmarathon",         desc: "Dans drie nummers achter elkaar zonder de dansvloer te verlaten",                 pts: 75  },
        { id: 7,  title: "Groepsfoto Chaos",     desc: "Zorg dat 8 of meer mensen een gek gezicht trekken op één groepsfoto",           pts: 100 },
        { id: 8,  title: "Mystery Bestelling",   desc: "Bestel allebei een drankje voor de ander aan de bar zonder te overleggen",       pts: 50  },
        { id: 9,  title: "Koppeldetective",      desc: "Bedenk samen een geheime backstory voor een ander koppel en vertel die aan iemand", pts: 65  },
        { id: 10, title: "30 Seconden",          desc: "Houd 30 seconden oogcontact met je date zonder te lachen of te praten",          pts: 30  },
        { id: 11, title: "Oor-Serenade",         desc: "Fluister je date drie dingen in het oor die je vanavond mooi aan ze vindt",      pts: 35  },
        { id: 12, title: "Complimentenstorm",    desc: "Geef 5 echte complimenten aan 5 verschillende mensen die je niet kent",          pts: 55  },
        { id: 13, title: "Danssolo",             desc: "Dans 60 seconden solo in het midden van de dansvloer terwijl je date toekijkt",  pts: 40  },
        { id: 14, title: "Koppelruil Moment",    desc: "Dans één nummer met iemand anders zijn/haar date, terwijl jullie dates ook dansen", pts: 85  }
    ],
    bingoItems: [
        "Iemand doet de worm",
        "Koppel met matching outfits",
        "Stropdas scheef",
        "Iemand danst solo",
        "Slow dance op de dansvloer",
        "Iemand morst iets",
        "Glas kapot",
        "Foto gemaakt met een vreemde",
        "Iemand huilt van lachen",
        "Stiletto's in de hand",
        "Twee mensen proesten tegelijk",
        "Iemand zingt mee met de DJ",
        "Fotobooth rij",
        "Selfie-stick gespot",
        "Date kust op de wang",
        "Iemand valt (bijna of echt)",
        "Barman geeft ongewraagd advies",
        "Iemand bestelt water",
        "Schoenen gaan uit op de dansvloer",
        "Groepsfoto van meer dan 10 mensen",
        "Iemand danst op een tafel",
        "Ober vergeet een bestelling",
        "Geheime blik tussen een koppel",
        "Iemand zingt een serenade voor zijn/haar date"
    ]
};
