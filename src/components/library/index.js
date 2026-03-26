export function Library (word) {
    if (word.length ==0 ) return null
    return archive[word] ?? null
}

export const archive = {
    "skater": { // just for testing
        content: "Cualquier baranda, cajon, quarter o cambio en la superficie que pueda ser utilizado para hacer un truco.",
        images: [
            'skate-1.jpeg',
            'quarter-1.jpeg',
            'quarter-2.jpg' 
        ]
    },
    "spot": {
        content: "Cualquier baranda, cajon, quarter o cambio en la superficie que pueda ser utilizado para hacer un truco.",
        images: [
            'spot-1.jpeg',
            'spot-2.jpg',
            'spot-3.jpeg',
            'spot-4.jpg',
            'spot-5.jpg'
        ]
    },
    "linea": {
        content: "Secuencia de trucos usando varios spots",
        images: []
    },
    "cajon": {
        content: "Si tiene borde de metal, no es un asiento, es un cajon o manualera y se usa para deslizar o para subirse sobre él",
        images: [
            'cajon-1.jpg',
            'cajon-2.jpg',
            'cajon-3.jpg',
            'cajon-4.jpeg',
        ]
    },
    "manualera": {
        content: "Igual a un cajon pero mas ancho y usualmente un poco mas bajo. Pensado especificamente para practicar manuals (truco donde se busca mantener el equilibrio usando solo 2 ruedas)",
        images: [
            'manualera-1.jpeg',
            'manualera-2.jpeg',
            'manualera-3.jpeg',
            'manualera-4.jpeg',
        ]
    },
    "baranda": {
        content: "Fierros tubulares o cuadrados de metal usados principalmente para deslizar. Tampoco son asientos",
        images: [
            'baranda-1.jpeg',
            'baranda-2.jpeg',
            'baranda-3.jpg',
            'baranda-4.jpg',
        ]
    },
    "quarter": {
        content: "Cambio en la geometria del suelo formando una curva circular",
        images: [
            'quarter-1.jpeg',
            'quarter-2.jpg',
            'quarter-3.jpeg',
            'quarter-4.jpeg',
            'quarter-5.jpeg',
        ]
    },
    "coping": {
        content: "Fierro tubular que suelen tener los quarters en el borde",
        images: [
            'coping-1.jpeg',
            'coping-2.jpeg',
            'coping-3.jpeg',
            'coping-4.jpeg',
        ]
    },
    "spine": {
        content: "Dos quarters conectados por sus \"espaldas\" con un coping",
        images: [
            'spine-1.jpg',
            'spine-2.jpg',
            'spine-3.jpg',
            'spine-4.jpeg',
        ]
    },
    "ramp": {
        content: "Dos quarters enfrentados en forma de U",
        images: [
            'ramp-1.jpeg',
            'ramp-2.jpeg',
            'ramp-3.jpg',
            'ramp-4.jpg',
            'ramp-5.jpg',
        ]
    },
    "miniramp": {
        content: "Una ramp en version pequeña. Generalmente con unan curva menos abrupta donde podemos tomar confianza antes pasar a una ramp mas desafiante",
        images: [
            'miniramp-1.jpeg',
            'miniramp-2.jpg',
            'miniramp-3.jpg',
            'miniramp-4.jpg',
        ]
    },
    "flat": {
        content: "Tambien llamano plano o hit. Cambio recto en el nivel del suelo sin curva",
        images: [
            'plano-1.jpg',
            'plano-2.jpg',
            'plano-3.jpg',
            'plano-4.jpg',
        ]
    },
    "A-Frame": {
        content: "Dos flat posicionados de espaldas entre ellos de tal manera que forman una punta",
        images: [
            'aframe-1.jpeg',
            'aframe-2.jpeg',
            'aframe-3.jpeg',
            'aframe-4.jpg',
        ]
    },
    "Hit to Hit": {
        content: "como un a frame pero un una separacion (gap) entre ellos",
        images: [
            'hittohit-1.jpg',
            'hittohit-2.png',
            'hittohit-3.jpeg',
            'hittohit-4.jpeg',
        ]
    },
}



