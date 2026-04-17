const db = {
    phases: ["🚗 Heenreis", "👔 Verkleden", "🥂 Proosten", "🍽️ Diner", "💃 Feest"],
    challenges: {
        "🚗 Heenreis": [
            "Spot een limo: iedereen 2 slokken.",
            "Iemand zegt 'zijn we er al': iedereen drinkt.",
            "Stilte langer dan 30 sec: slok.",
            "Selfie in de auto: proost!",
            "Iemand checkt zijn haar: 1 slok.",
            "Iemand vergeet iets mee te nemen: 2 slokken.",
            "GPS zegt 'maak een u-bocht': iedereen lacht en drinkt."
        ],
        "👔 Verkleden": [
            "Spiegel-selfie: proost!",
            "Parfum overload: 1 slok.",
            "Stropdas knopen mislukt: 2 slokken.",
            "Iemand zegt 'ik zie er goed uit': drink.",
            "Schoenen passen niet: iedereen drinkt.",
            "Iemand laat iets vallen terwijl ie zich aankleedt: slok.",
            "Iemand staat al klaar terwijl de rest nog bezig is: die persoon drinkt."
        ],
        "🥂 Proosten": [
            "Iemand zegt 'Gezellig': drink.",
            "Glas leeg? Bonus slok.",
            "Glazen klinken mis: iedereen herproost.",
            "Speech duurt langer dan 2 minuten: slok per extra minuut.",
            "Iemand morst: 2 slokken.",
            "Iemand zegt 'op de bruid en bruidegom': shotje.",
            "Twee mensen proesten tegelijk: zij moeten samen een extra slok doen."
        ],
        "🍽️ Diner": [
            "Stilte aan tafel langer dan 5 sec: slok.",
            "Bestek valt: iedereen drinkt.",
            "Iemand bestelt hetzelfde als jij: samen drinken.",
            "Ober komt op het slechtst mogelijke moment: slok.",
            "Tafelgenoot pakt z'n telefoon: jij kiest wie drinkt.",
            "Iemand ruilt z'n eten met iemand anders: allebei een slok.",
            "Iemand vraagt om ketchup: drie slokken (schande)."
        ],
        "💃 Feest": [
            "Iemand doet de worm op de dansvloer: iedereen drinkt.",
            "Schoenen uit: 5 slokken.",
            "Iemand doet een sprinkler: 3 slokken.",
            "Barman knipoogt: proost!",
            "Iemand valt op de dansvloer: iedereen drinkt.",
            "Slechte DJ-keuze: wisseldrink met je buur.",
            "Iemand danst alleen in een cirkel: slok."
        ]
    },
    quests: [
        { id: 1,  title: "Social Butterfly",     desc: "Praat met iemand die je nog niet kende",                        pts: 50  },
        { id: 2,  title: "Paparazzi",             desc: "Maak een stiekeme foto van het koppel",                         pts: 30  },
        { id: 3,  title: "Dance King",            desc: "Laat 3 mensen meedansen",                                       pts: 100 },
        { id: 4,  title: "Rondje Geven",          desc: "Geef een rondje voor je hele tafel",                            pts: 80  },
        { id: 5,  title: "Proost Record",         desc: "Proost met 5 verschillende mensen in 10 minuten",               pts: 70  },
        { id: 6,  title: "Mystery Drankje",       desc: "Laat de barman iets verrassends inschenken en drink het op",    pts: 40  },
        { id: 7,  title: "Dubbele Bodem",         desc: "Finish je glas in één keer",                                    pts: 25  },
        { id: 8,  title: "Groepsfoto Chaos",      desc: "Zorg dat iedereen een gek gezicht trekt op een groepsfoto",    pts: 90  },
        { id: 9,  title: "Dansduel",              desc: "Daag iemand uit voor een dansduel op de dansvloer",             pts: 75  },
        { id: 10, title: "Stapel Glazen",         desc: "Verzamel 5 lege glazen op één tafel",                          pts: 60  },
        { id: 11, title: "Bierkaart Expert",      desc: "Bestel iets van de kaart dat je nog nooit gehad hebt",         pts: 35  },
        { id: 12, title: "Ober Vriend",           desc: "Leer de naam van je ober en noem hem/haar bij naam",           pts: 20  },
        { id: 13, title: "Fotobom Meester",       desc: "Fotobom 3 foto's van andere mensen",                           pts: 55  },
        { id: 14, title: "Luidste Proost",        desc: "Zorg dat iedereen aan jouw tafel tegelijk proost",             pts: 45  },
        { id: 15, title: "Bierpong Legende",      desc: "Organiseer een spontaan bierpong-potje",                       pts: 120 }
    ],
    bingoItems: [
        "Limo gespot",
        "Stropdas scheef",
        "Iemand valt",
        "Lege fles op tafel",
        "Selfie-stick",
        "Iemand huilt van lachen",
        "Slechte DJ-keuze",
        "Ober loopt mis",
        "Iemand danst alleen",
        "Rondje voor iedereen",
        "Biertoren besteld",
        "Iemand morst",
        "Bitterbal gevallen",
        "Shot zonder reden",
        "Glas gaat kapot",
        "Toiletpauze in groep",
        "Selfie met de ober",
        "Fout dansje op goede muziek",
        "Barman doet een truc",
        "Iemand bestelt water (boo)",
        "Tafel vol lege glazen",
        "Twee mensen proesten tegelijk",
        "Iemand doet de worm",
        "Iemand valt van z'n stoel"
    ]
};
