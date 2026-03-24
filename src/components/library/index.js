export function Library (word) {
    if (word.length ==0 ) return null
    return archive[word] ?? null
}

const archive = {
    "skater": { // just for testing
        content: "Esto es un texto de prueba",
        images: [
            'skate-1.jpeg',
            'quarter-1.jpeg',
            'quarter-2.jpeg' 
        ]
    },
    "spot": {
        content: "Cualquier baranda, cajon, quarter o cambio en la superficie que pueda ser utilizado para hacer un truco.",
        images: []
    },
    "linea": {
        content: "Secuencia de trucos usando varios spots",
        images: []
    },
    "cajon": {
        content: "Si tiene borde de metal, no es un asiento, es un cajon o manualera y se usa para deslizar o para subirse sobre él",
        images: []
    },
    "baranda": {
        content: "Fierros horizontales de metal usados principalmente para deslizar. Tampoco son asientos",
        images: []
    },
    "quarter": {
        content: "Cambio en la geometria del suelo formando una curva circular",
        images: []
    },
    "coping": {
        content: "Fierro circular que suelen tener los quarters en el borde",
        images: []
    },
    "spine": {
        content: "Dos quarters conectados por sus \"espaldas\" con un coping",
        images: []
    },
    "miniramp": {
        content: "Dos cuarters enfrentados en forma de U",
        images: []
    },
    "plano": {
        content: "Cambio recto en el nivel del suelo sin curva",
        images: []
    },
    "spike": {
        content: "Dos planos posicionados de espaldas entre ellos de tal manera que forman una punta",
        images: []
    }
}



