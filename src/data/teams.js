// Estrutura do album Panini Copa do Mundo FIFA 2026.
// Cada figurinha: { num, label, shiny? }
// Estado no localStorage: { [id]: count }
//   0 = faltando, 1 = tenho, 2+ = repetidas (count - 1 extras)

export const CONFEDERATIONS = {
  "FIFA": {
    "name": "Introdução",
    "color": "#1d4ed8"
  },
  "CONMEBOL": {
    "name": "América do Sul",
    "color": "#15803d"
  },
  "CONCACAF": {
    "name": "América do Norte/Central",
    "color": "#b45309"
  },
  "UEFA": {
    "name": "Europa",
    "color": "#1e40af"
  },
  "CAF": {
    "name": "África",
    "color": "#b91c1c"
  },
  "AFC": {
    "name": "Ásia",
    "color": "#7e22ce"
  },
  "OFC": {
    "name": "Oceania",
    "color": "#0e7490"
  }
}

export const TEAMS = [
  {
    "code": "FIFA",
    "name": "Introdução",
    "confederation": "FIFA",
    "color": "#1d4ed8",
    "stickers": [
      {
        "num": 1,
        "label": "Logo Copa do Mundo FIFA 2026",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Troféu FIFA",
        "shiny": true
      },
      {
        "num": 3,
        "label": "Sede: Estados Unidos",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Sede: Canadá",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Sede: México",
        "shiny": false
      },
      {
        "num": 6,
        "label": "SoFi Stadium – Los Angeles",
        "shiny": false
      },
      {
        "num": 7,
        "label": "MetLife Stadium – Nova York",
        "shiny": false
      },
      {
        "num": 8,
        "label": "AT&T Stadium – Dallas",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Levi's Stadium – San Francisco",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Gillette Stadium – Boston",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Mercedes-Benz Stadium – Atlanta",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Arrowhead Stadium – Kansas City",
        "shiny": false
      },
      {
        "num": 13,
        "label": "NRG Stadium – Houston",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Empower Field – Denver",
        "shiny": false
      },
      {
        "num": 15,
        "label": "Hard Rock Stadium – Miami",
        "shiny": false
      },
      {
        "num": 16,
        "label": "Seattle – Lumen Field",
        "shiny": false
      },
      {
        "num": 17,
        "label": "BC Place – Vancouver",
        "shiny": false
      },
      {
        "num": 18,
        "label": "BMO Field – Toronto",
        "shiny": false
      },
      {
        "num": 19,
        "label": "Estádio Azteca – Cidade do México",
        "shiny": false
      },
      {
        "num": 20,
        "label": "Estádio Akron – Guadalajara",
        "shiny": false
      },
      {
        "num": 21,
        "label": "Estadio BBVA – Monterrey",
        "shiny": false
      },
      {
        "num": 22,
        "label": "Mascote Oficial",
        "shiny": true
      },
      {
        "num": 23,
        "label": "Bola Oficial",
        "shiny": true
      }
    ],
    "flagCode": null,
    "icon": "trophy"
  },
  {
    "code": "ARG",
    "name": "Argentina",
    "confederation": "CONMEBOL",
    "color": "#74ACDF",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Emiliano Martínez",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Nahuel Molina",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Cristian Romero",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Lisandro Martínez",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Nicolás Tagliafico",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Rodrigo De Paul",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Enzo Fernández",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Alexis Mac Allister",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Lionel Messi",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Lautaro Martínez",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Julián Álvarez",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Paulo Dybala",
        "shiny": false
      }
    ],
    "flagCode": "ar"
  },
  {
    "code": "BRA",
    "name": "Brasil",
    "confederation": "CONMEBOL",
    "color": "#009C3B",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Alisson Becker",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Danilo",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Marquinhos",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Éder Militão",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Guilherme Arana",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Casemiro",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Bruno Guimarães",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Lucas Paquetá",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Raphinha",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Vinícius Júnior",
        "shiny": true
      },
      {
        "num": 13,
        "label": "Rodrygo",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Endrick",
        "shiny": false
      }
    ],
    "flagCode": "br"
  },
  {
    "code": "COL",
    "name": "Colômbia",
    "confederation": "CONMEBOL",
    "color": "#FCD116",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Camilo Vargas",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Davinson Sánchez",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Yerry Mina",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Johan Mojica",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Wilmar Barrios",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Mateus Uribe",
        "shiny": false
      },
      {
        "num": 9,
        "label": "James Rodríguez",
        "shiny": true
      },
      {
        "num": 10,
        "label": "Cucho Hernández",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Luis Díaz",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Rafael Santos Borré",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Jhon Córdoba",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Jhon Arias",
        "shiny": false
      }
    ],
    "flagCode": "co"
  },
  {
    "code": "URU",
    "name": "Uruguai",
    "confederation": "CONMEBOL",
    "color": "#5AAAD7",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Sergio Rochet",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Nahitan Nández",
        "shiny": false
      },
      {
        "num": 5,
        "label": "José María Giménez",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Ronald Araújo",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Mathías Olivera",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Federico Valverde",
        "shiny": true
      },
      {
        "num": 9,
        "label": "Rodrigo Bentancur",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Nicolás de la Cruz",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Darwin Núñez",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Facundo Torres",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Maximiliano Araújo",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Brian Rodríguez",
        "shiny": false
      }
    ],
    "flagCode": "uy"
  },
  {
    "code": "ECU",
    "name": "Equador",
    "confederation": "CONMEBOL",
    "color": "#FFD100",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Alexander Domínguez",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Ángelo Preciado",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Piero Hincapié",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Félix Torres",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Pervis Estupiñán",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Carlos Gruezo",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Moisés Caicedo",
        "shiny": true
      },
      {
        "num": 10,
        "label": "Jeremy Sarmiento",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Gonzalo Plata",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Enner Valencia",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Leonardo Campana",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Kevin Rodríguez",
        "shiny": false
      }
    ],
    "flagCode": "ec"
  },
  {
    "code": "PAR",
    "name": "Paraguai",
    "confederation": "CONMEBOL",
    "color": "#D52B1E",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Gastón Olvido",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Omar Alderete",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Gustavo Gómez",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Júnior Alonso",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Santiago Arzamendia",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Mathías Villasanti",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Ángel Cardozo Lucena",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Miguel Almirón",
        "shiny": true
      },
      {
        "num": 11,
        "label": "Alejandro Romero Gamarra",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Antonio Sanabria",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Alberto Espínola",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Robert Morales",
        "shiny": false
      }
    ],
    "flagCode": "py"
  },
  {
    "code": "BOL",
    "name": "Bolívia",
    "confederation": "CONMEBOL",
    "color": "#007A3D",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Carlos Lampe",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Adrián Jusino",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Luis Haquin",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Héctor Cuellar",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Marcelo Martins",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Leonel Justiniano",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Ramiro Vaca",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Rodrigo Ramallo",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Henry Vaca",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Víctor Ábrego",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Miguel Terceros",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Bruno Miranda",
        "shiny": false
      }
    ],
    "flagCode": "bo"
  },
  {
    "code": "VEN",
    "name": "Venezuela",
    "confederation": "CONMEBOL",
    "color": "#CF142B",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Wuilker Faríñez",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Alexander González",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Yordan Osorio",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Nahuel Ferraresi",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Luca Orellano",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Yangel Herrera",
        "shiny": true
      },
      {
        "num": 9,
        "label": "Tomás Rincón",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Yeferson Soteldo",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Salomón Rondón",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Jhon Murillo",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Adalberto Peñaranda",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Yaser Asprilla",
        "shiny": false
      }
    ],
    "flagCode": "ve"
  },
  {
    "code": "CHI",
    "name": "Chile",
    "confederation": "CONMEBOL",
    "color": "#D52B1E",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Claudio Bravo",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Mauricio Isla",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Gary Medel",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Paulo Díaz",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Marcos Acuña",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Charles Aránguiz",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Arturo Vidal",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Erick Pulgar",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Alexis Sánchez",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Eduardo Vargas",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Ben Brereton Díaz",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Marcelino Núñez",
        "shiny": false
      }
    ],
    "flagCode": "cl"
  },
  {
    "code": "USA",
    "name": "Estados Unidos",
    "confederation": "CONCACAF",
    "color": "#0A3161",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Matt Turner",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Sergiño Dest",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Walker Zimmerman",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Miles Robinson",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Antonee Robinson",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Tyler Adams",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Weston McKennie",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Yunus Musah",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Christian Pulisic",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Timothy Weah",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Ricardo Pepi",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Folarin Balogun",
        "shiny": false
      }
    ],
    "flagCode": "us"
  },
  {
    "code": "MEX",
    "name": "México",
    "confederation": "CONCACAF",
    "color": "#006847",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Guillermo Ochoa",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Jorge Sánchez",
        "shiny": false
      },
      {
        "num": 5,
        "label": "César Montes",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Johan Vásquez",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Gerardo Arteaga",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Edson Álvarez",
        "shiny": true
      },
      {
        "num": 9,
        "label": "Héctor Herrera",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Orbelín Pineda",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Hirving Lozano",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Santiago Giménez",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Raúl Jiménez",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Henry Martín",
        "shiny": false
      }
    ],
    "flagCode": "mx"
  },
  {
    "code": "CAN",
    "name": "Canadá",
    "confederation": "CONCACAF",
    "color": "#FF0000",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Maxime Crépeau",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Richie Laryea",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Kamal Miller",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Alistair Johnston",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Alphonso Davies",
        "shiny": true
      },
      {
        "num": 8,
        "label": "Stephen Eustaquio",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Tajon Buchanan",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Jonathan David",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Cyle Larin",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Lucas Cavallini",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Junior Hoilett",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Liam Millar",
        "shiny": false
      }
    ],
    "flagCode": "ca"
  },
  {
    "code": "CRC",
    "name": "Costa Rica",
    "confederation": "CONCACAF",
    "color": "#002B7F",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Keylor Navas",
        "shiny": true
      },
      {
        "num": 4,
        "label": "Serge Aurier",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Francisco Calvo",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Juan Pablo Vargas",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Bryan Oviedo",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Celso Borges",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Bryan Ruiz",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Yeltsin Tejeda",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Joel Campbell",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Álvaro Zamora",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Anthony Contreras",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Jewison Bennette",
        "shiny": false
      }
    ],
    "flagCode": "cr"
  },
  {
    "code": "PAN",
    "name": "Panamá",
    "confederation": "CONCACAF",
    "color": "#D21034",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Luis Mejía",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Éric Davis",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Fidel Escobar",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Andrés Andrade",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Harold Cummings",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Adalberto Carrasquilla",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Alberto Quintero",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Aníbal Godoy",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Ismael Díaz",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Rolando Blackburn",
        "shiny": false
      },
      {
        "num": 13,
        "label": "José Fajardo",
        "shiny": false
      },
      {
        "num": 14,
        "label": "César Yanis",
        "shiny": false
      }
    ],
    "flagCode": "pa"
  },
  {
    "code": "HON",
    "name": "Honduras",
    "confederation": "CONCACAF",
    "color": "#0073CF",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "José García",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Denil Maldonado",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Maynor Figueroa",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Getsel Montes",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Andy Najar",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Diego Rodríguez",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Jorge Álvarez",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Alberth Elis",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Romell Quioto",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Antony Lozano",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Luis Palma",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Jonathan Rubio",
        "shiny": false
      }
    ],
    "flagCode": "hn"
  },
  {
    "code": "JAM",
    "name": "Jamaica",
    "confederation": "CONCACAF",
    "color": "#000000",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Andre Blake",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Liam Moore",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Damion Lowe",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Ethan Pinnock",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Kemar Lawrence",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Bobby Reid",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Daniel Johnson",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Ravel Morrison",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Michail Antonio",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Demarai Gray",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Shamar Nicholson",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Cory Burke",
        "shiny": false
      }
    ],
    "flagCode": "jm"
  },
  {
    "code": "SUR",
    "name": "Suriname",
    "confederation": "CONCACAF",
    "color": "#377E3F",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Marciano Menzel",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Ridgeciano Haps",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Damil Dankerlui",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Gleofilo Vlijter",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Nigel Hasselbaink",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Ryan Donk",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Stefano Rijssel",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Stanley Moonilal",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Myenty Abena",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Shaquille Pinas",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Tjaronn Chery",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Sheraldo Becker",
        "shiny": false
      }
    ],
    "flagCode": "sr"
  },
  {
    "code": "TRI",
    "name": "Trinidad e Tobago",
    "confederation": "CONCACAF",
    "color": "#CE1126",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Marvin Phillip",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Alvin Jones",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Sheldon Bateau",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Justin Garcia",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Triston Hodge",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Kevin Molino",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Levi Garcia",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Mathew Woo Ling",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Ryan Telfer",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Noah Powder",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Jomal Williams",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Marcus Joseph",
        "shiny": false
      }
    ],
    "flagCode": "tt"
  },
  {
    "code": "ESP",
    "name": "Espanha",
    "confederation": "UEFA",
    "color": "#C60B1E",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Unai Simón",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Dani Carvajal",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Aymeric Laporte",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Pau Cubarsí",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Marc Cucurella",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Rodri",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Pedri",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Fabián Ruiz",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Lamine Yamal",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Nico Williams",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Álvaro Morata",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Dani Olmo",
        "shiny": false
      }
    ],
    "flagCode": "es"
  },
  {
    "code": "ENG",
    "name": "Inglaterra",
    "confederation": "UEFA",
    "color": "#003399",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Jordan Pickford",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Kyle Walker",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Harry Maguire",
        "shiny": false
      },
      {
        "num": 6,
        "label": "John Stones",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Luke Shaw",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Declan Rice",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Jude Bellingham",
        "shiny": true
      },
      {
        "num": 10,
        "label": "Phil Foden",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Bukayo Saka",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Marcus Rashford",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Harry Kane",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Cole Palmer",
        "shiny": false
      }
    ],
    "flagCode": "gb-eng"
  },
  {
    "code": "FRA",
    "name": "França",
    "confederation": "UEFA",
    "color": "#002395",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Mike Maignan",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Jules Koundé",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Dayot Upamecano",
        "shiny": false
      },
      {
        "num": 6,
        "label": "William Saliba",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Théo Hernández",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Aurélien Tchouaméni",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Antoine Griezmann",
        "shiny": true
      },
      {
        "num": 10,
        "label": "Ousmane Dembélé",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Kylian Mbappé",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Marcus Thuram",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Randal Kolo Muani",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Bradley Barcola",
        "shiny": false
      }
    ],
    "flagCode": "fr"
  },
  {
    "code": "GER",
    "name": "Alemanha",
    "confederation": "UEFA",
    "color": "#000000",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Manuel Neuer",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Joshua Kimmich",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Antonio Rüdiger",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Jonathan Tah",
        "shiny": false
      },
      {
        "num": 7,
        "label": "David Raum",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Florian Wirtz",
        "shiny": true
      },
      {
        "num": 9,
        "label": "Jamal Musiala",
        "shiny": true
      },
      {
        "num": 10,
        "label": "Ilkay Gündogan",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Leroy Sané",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Kai Havertz",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Niclas Füllkrug",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Chris Führich",
        "shiny": false
      }
    ],
    "flagCode": "de"
  },
  {
    "code": "POR",
    "name": "Portugal",
    "confederation": "UEFA",
    "color": "#006600",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Diogo Costa",
        "shiny": false
      },
      {
        "num": 4,
        "label": "João Cancelo",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Rúben Dias",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Pepe",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Nuno Mendes",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Vitinha",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Bruno Fernandes",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Bernardo Silva",
        "shiny": true
      },
      {
        "num": 11,
        "label": "Cristiano Ronaldo",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Rafael Leão",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Gonçalo Ramos",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Pedro Neto",
        "shiny": false
      }
    ],
    "flagCode": "pt"
  },
  {
    "code": "NED",
    "name": "Holanda",
    "confederation": "UEFA",
    "color": "#FF6600",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Bart Verbruggen",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Denzel Dumfries",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Virgil van Dijk",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Nathan Aké",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Ian Maatsen",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Frenkie de Jong",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Tijjani Reijnders",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Teun Koopmeiners",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Cody Gakpo",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Xavi Simons",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Memphis Depay",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Donyell Malen",
        "shiny": false
      }
    ],
    "flagCode": "nl"
  },
  {
    "code": "CRO",
    "name": "Croácia",
    "confederation": "UEFA",
    "color": "#FF0000",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Dominik Livaković",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Josip Šutalo",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Joško Gvardiol",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Duje Ćaleta-Car",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Borna Sosa",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Luka Modrić",
        "shiny": true
      },
      {
        "num": 9,
        "label": "Mateo Kovačić",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Marcelo Brozović",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Ivan Perišić",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Andrej Kramarić",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Bruno Petković",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Lovro Majer",
        "shiny": false
      }
    ],
    "flagCode": "hr"
  },
  {
    "code": "AUT",
    "name": "Áustria",
    "confederation": "UEFA",
    "color": "#ED2939",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Patrick Pentz",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Stefan Posch",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Maximilian Wöber",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Kevin Danso",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Phillip Mwene",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Konrad Laimer",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Marcel Sabitzer",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Florian Grillitsch",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Christoph Baumgartner",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Marko Arnautović",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Michael Gregoritsch",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Patrick Wimmer",
        "shiny": false
      }
    ],
    "flagCode": "at"
  },
  {
    "code": "SUI",
    "name": "Suíça",
    "confederation": "UEFA",
    "color": "#FF0000",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Yann Sommer",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Silvan Widmer",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Manuel Akanji",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Nico Elvedi",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Ricardo Rodríguez",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Granit Xhaka",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Remo Freuler",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Denis Zakaria",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Xherdan Shaqiri",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Breel Embolo",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Ruben Vargas",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Noah Okafor",
        "shiny": false
      }
    ],
    "flagCode": "ch"
  },
  {
    "code": "DEN",
    "name": "Dinamarca",
    "confederation": "UEFA",
    "color": "#C60C30",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Kasper Schmeichel",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Joakim Mæhle",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Joachim Andersen",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Simon Kjær",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Viktor Kristiansen",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Christian Eriksen",
        "shiny": true
      },
      {
        "num": 9,
        "label": "Pierre-Emile Højbjerg",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Mathias Jensen",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Rasmus Højlund",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Mikkel Damsgaard",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Andreas Skov Olsen",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Jesper Lindstrøm",
        "shiny": false
      }
    ],
    "flagCode": "dk"
  },
  {
    "code": "SRB",
    "name": "Sérvia",
    "confederation": "UEFA",
    "color": "#C6363C",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Vanja Milinković-Savić",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Strahinja Pavlović",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Nikola Milenković",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Miloš Veljković",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Andrija Živković",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Sergej Milinković-Savić",
        "shiny": true
      },
      {
        "num": 9,
        "label": "Nemanja Gudelj",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Saša Lukić",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Dušan Vlahović",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Aleksandar Mitrović",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Filip Kostić",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Luka Jović",
        "shiny": false
      }
    ],
    "flagCode": "rs"
  },
  {
    "code": "SCO",
    "name": "Escócia",
    "confederation": "UEFA",
    "color": "#003380",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Angus Gunn",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Aaron Hickey",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Grant Hanley",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Scott McKenna",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Andrew Robertson",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Scott McTominay",
        "shiny": true
      },
      {
        "num": 9,
        "label": "John McGinn",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Callum McGregor",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Ryan Christie",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Lawrence Shankland",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Che Adams",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Ryan Jack",
        "shiny": false
      }
    ],
    "flagCode": "gb-sct"
  },
  {
    "code": "TUR",
    "name": "Turquia",
    "confederation": "UEFA",
    "color": "#E30A17",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Mert Günok",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Zeki Çelik",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Merih Demiral",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Kaan Ayhan",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Ferdi Kadıoğlu",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Hakan Çalhanoğlu",
        "shiny": true
      },
      {
        "num": 9,
        "label": "Salih Özcan",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Okay Yokuşlu",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Arda Güler",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Kerem Aktürkoğlu",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Baris Alper Yilmaz",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Cenk Tosun",
        "shiny": false
      }
    ],
    "flagCode": "tr"
  },
  {
    "code": "POL",
    "name": "Polônia",
    "confederation": "UEFA",
    "color": "#DC143C",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Wojciech Szczęsny",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Bartosz Bereszyński",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Kamil Glik",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Jan Bednarek",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Nicola Zalewski",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Piotr Zieliński",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Krystian Bielik",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Jakub Kiwior",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Robert Lewandowski",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Arkadiusz Milik",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Karol Świderski",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Jakub Piotrowski",
        "shiny": false
      }
    ],
    "flagCode": "pl"
  },
  {
    "code": "ROU",
    "name": "Romênia",
    "confederation": "UEFA",
    "color": "#002B7F",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Florin Niță",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Andrei Rațiu",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Radu Drăgușin",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Andrei Burcă",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Nicușor Bancu",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Nicolás Stanciu",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Razvan Marin",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Marius Marin",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Florinel Coman",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Denis Drăguș",
        "shiny": false
      },
      {
        "num": 13,
        "label": "George Pușcaș",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Ianis Hagi",
        "shiny": false
      }
    ],
    "flagCode": "ro"
  },
  {
    "code": "SVK",
    "name": "Eslováquia",
    "confederation": "UEFA",
    "color": "#0B4EA2",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Marek Rodák",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Peter Pekarík",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Milan Škriniar",
        "shiny": true
      },
      {
        "num": 6,
        "label": "Denis Vavro",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Tomáš Súkenník",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Lukáš Haraslín",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Ondrej Duda",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Juraj Kucka",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Dávid Strelec",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Róbert Boženík",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Tomáš Suslov",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Ivan Schranz",
        "shiny": false
      }
    ],
    "flagCode": "sk"
  },
  {
    "code": "HUN",
    "name": "Hungria",
    "confederation": "UEFA",
    "color": "#CE2939",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Péter Gulácsi",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Attila Fiola",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Willi Orbán",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Ádám Lang",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Endre Botka",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Adam Nagy",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Dominik Szoboszlai",
        "shiny": true
      },
      {
        "num": 10,
        "label": "Roland Sallai",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Martin Ádám",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Barnabás Varga",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Kevin Csoboth",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Callum Styles",
        "shiny": false
      }
    ],
    "flagCode": "hu"
  },
  {
    "code": "GRE",
    "name": "Grécia",
    "confederation": "UEFA",
    "color": "#0D5EAF",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Odysseas Vlachodimos",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Konstantinos Tsimikas",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Kostas Mavropanos",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Panagiotis Retsos",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Dimitris Giannoulis",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Marios Vrousai",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Manolis Siopis",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Anastasios Bakasetas",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Christos Tzolis",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Vangelis Pavlidis",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Fotis Ioannidis",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Giannis Fetfatzidis",
        "shiny": false
      }
    ],
    "flagCode": "gr"
  },
  {
    "code": "UKR",
    "name": "Ucrânia",
    "confederation": "UEFA",
    "color": "#FFD700",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Andriy Lunin",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Oleksandr Karavayev",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Mykola Matviyenko",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Ilya Zabarnyi",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Vitaliy Mykolenko",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Taras Stepanenko",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Mykhailo Mudryk",
        "shiny": true
      },
      {
        "num": 10,
        "label": "Oleksandr Zinchenko",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Artem Dovbyk",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Georgiy Sudakov",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Viktor Tsygankov",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Roman Yaremchuk",
        "shiny": false
      }
    ],
    "flagCode": "ua"
  },
  {
    "code": "MAR",
    "name": "Marrocos",
    "confederation": "CAF",
    "color": "#C1272D",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Yassine Bounou",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Achraf Hakimi",
        "shiny": true
      },
      {
        "num": 5,
        "label": "Romain Saïss",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Nayef Aguerd",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Noussair Mazraoui",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Sofyan Amrabat",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Azzedine Ounahi",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Hakim Ziyech",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Youssef En-Nesyri",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Sofiane Boufal",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Abde Ezzalzouli",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Selim Amallah",
        "shiny": false
      }
    ],
    "flagCode": "ma"
  },
  {
    "code": "NGA",
    "name": "Nigéria",
    "confederation": "CAF",
    "color": "#008751",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Francis Uzoho",
        "shiny": false
      },
      {
        "num": 4,
        "label": "William Troost-Ekong",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Semi Ajayi",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Zaidu Sanusi",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Bright Osayi-Samuel",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Frank Onyeka",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Alex Iwobi",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Samuel Chukwueze",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Victor Osimhen",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Taiwo Awoniyi",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Cyriel Dessers",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Kelechi Iheanacho",
        "shiny": false
      }
    ],
    "flagCode": "ng"
  },
  {
    "code": "SEN",
    "name": "Senegal",
    "confederation": "CAF",
    "color": "#00853F",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Édouard Mendy",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Youssouf Sabaly",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Kalidou Koulibaly",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Pape Abou Cissé",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Formose Mendy",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Idrissa Gueye",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Cheikhou Kouyaté",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Sadio Mané",
        "shiny": true
      },
      {
        "num": 11,
        "label": "Ismaïla Sarr",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Boulaye Dia",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Nicolas Jackson",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Iliman Ndiaye",
        "shiny": false
      }
    ],
    "flagCode": "sn"
  },
  {
    "code": "EGY",
    "name": "Egito",
    "confederation": "CAF",
    "color": "#CE1126",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Mohamed El Shenawy",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Ahmed Hegazi",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Omar Kamal",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Amir Mortada",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Ahmed Fattouh",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Tarek Hamed",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Omar Marmoush",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Mohamed Salah",
        "shiny": true
      },
      {
        "num": 11,
        "label": "Mostafa Mohamed",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Amr El Sulaya",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Trezeguet",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Ramadan Sobhi",
        "shiny": false
      }
    ],
    "flagCode": "eg"
  },
  {
    "code": "CMR",
    "name": "Camarões",
    "confederation": "CAF",
    "color": "#007A5E",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "André Onana",
        "shiny": true
      },
      {
        "num": 4,
        "label": "Collins Fai",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Jean-Charles Castelletto",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Olivier Mbaizo",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Nouhou Tolo",
        "shiny": false
      },
      {
        "num": 8,
        "label": "André-Frank Zambo Anguissa",
        "shiny": true
      },
      {
        "num": 9,
        "label": "Martin Hongla",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Pierre Kunde",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Karl Toko Ekambi",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Vincent Aboubakar",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Bryan Mbeumo",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Clinton N'Jie",
        "shiny": false
      }
    ],
    "flagCode": "cm"
  },
  {
    "code": "CIV",
    "name": "Costa do Marfim",
    "confederation": "CAF",
    "color": "#F77F00",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Badra Ali Sangaré",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Serge Aurier",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Wilfried Singo",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Eric Bailly",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Ghislain Konan",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Jean Michaël Seri",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Franck Kessié",
        "shiny": true
      },
      {
        "num": 10,
        "label": "Ibrahim Sangaré",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Simon Adingra",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Sébastien Haller",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Nicolas Pépé",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Wilfried Zaha",
        "shiny": false
      }
    ],
    "flagCode": "ci"
  },
  {
    "code": "RSA",
    "name": "África do Sul",
    "confederation": "CAF",
    "color": "#007A4D",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Ronwen Williams",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Ramahlwe Mphahlele",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Siyanda Xulu",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Rushine De Reuck",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Innocent Maela",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Ethan Ntsimamba",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Goodman Mosele",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Teboho Mokoena",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Percy Tau",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Lyle Foster",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Bongani Zungu",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Evidence Makgopa",
        "shiny": false
      }
    ],
    "flagCode": "za"
  },
  {
    "code": "MLI",
    "name": "Mali",
    "confederation": "CAF",
    "color": "#14B53A",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Ibrahim Mounkoro",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Hamari Traoré",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Boubacar Kouyaté",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Falaye Sacko",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Yves Bissouma",
        "shiny": true
      },
      {
        "num": 8,
        "label": "Amadou Haidara",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Adama Traoré",
        "shiny": false
      },
      {
        "num": 10,
        "label": "El Bilal Touré",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Moussa Djenepo",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Mohamed Camara",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Nene Dorgeles",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Mamadou Doumbia",
        "shiny": false
      }
    ],
    "flagCode": "ml"
  },
  {
    "code": "COD",
    "name": "Rep. Dem. Congo",
    "confederation": "CAF",
    "color": "#007FFF",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Joël Kiassumbua",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Arthur Masuaku",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Chancel Mbemba",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Marcel Tisserand",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Yoane Wissa",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Silas Wissa",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Neeskens Kebano",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Cédric Bakambu",
        "shiny": true
      },
      {
        "num": 11,
        "label": "Paul-José Mpoku",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Théo Bongonda",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Nathan Zeze",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Dieumerci Mbokani",
        "shiny": false
      }
    ],
    "flagCode": "cd"
  },
  {
    "code": "TAN",
    "name": "Tanzânia",
    "confederation": "CAF",
    "color": "#1EB53A",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Aishi Manula",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Erasto Nyoni",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Joram Mhilu",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Mohamed Hussein",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Kelvin Yondani",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Thomas Ulimwengu",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Mbwana Samatta",
        "shiny": true
      },
      {
        "num": 10,
        "label": "Simon Msuva",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Himid Mao",
        "shiny": false
      },
      {
        "num": 12,
        "label": "John Bocco",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Mrisho Ngasa",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Feisal Salum",
        "shiny": false
      }
    ],
    "flagCode": "tz"
  },
  {
    "code": "JPN",
    "name": "Japão",
    "confederation": "AFC",
    "color": "#BC002D",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Shuichi Gonda",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Hiroki Sakai",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Maya Yoshida",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Takehiro Tomiyasu",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Yuto Nagatomo",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Wataru Endo",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Daichi Kamada",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Kaoru Mitoma",
        "shiny": true
      },
      {
        "num": 11,
        "label": "Junya Ito",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Takumi Minamino",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Ritsu Doan",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Ao Tanaka",
        "shiny": false
      }
    ],
    "flagCode": "jp"
  },
  {
    "code": "KOR",
    "name": "Coreia do Sul",
    "confederation": "AFC",
    "color": "#CD2E3A",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Kim Seung-gyu",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Kim Jin-su",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Kim Min-jae",
        "shiny": true
      },
      {
        "num": 6,
        "label": "Kim Young-gwon",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Seol Young-woo",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Jung Woo-young",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Lee Jae-sung",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Lee Kang-in",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Son Heung-min",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Hwang Hee-chan",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Hwang In-beom",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Cho Gue-sung",
        "shiny": false
      }
    ],
    "flagCode": "kr"
  },
  {
    "code": "IRN",
    "name": "Irã",
    "confederation": "AFC",
    "color": "#239F40",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Alireza Beiranvand",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Sadegh Moharrami",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Roozbeh Cheshmi",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Morteza Pouraliganji",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Ehsan Hajsafi",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Saeid Ezatolahi",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Ahmad Noorollahi",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Ali Karimi",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Sardar Azmoun",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Mehdi Taremi",
        "shiny": true
      },
      {
        "num": 13,
        "label": "Ramin Rezaeian",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Karim Ansarifard",
        "shiny": false
      }
    ],
    "flagCode": "ir"
  },
  {
    "code": "KSA",
    "name": "Arábia Saudita",
    "confederation": "AFC",
    "color": "#006C35",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Mohammed Al-Owais",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Saud Abdulhamid",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Ali Al-Bulaihi",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Abdulelah Al-Amri",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Yasser Al-Shahrani",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Salman Al-Faraj",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Sami Al-Najei",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Feras Al-Brikan",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Saleh Al-Shehri",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Salem Al-Dawsari",
        "shiny": true
      },
      {
        "num": 13,
        "label": "Mohammed Al-Burayk",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Fahad Al-Muwallad",
        "shiny": false
      }
    ],
    "flagCode": "sa"
  },
  {
    "code": "AUS",
    "name": "Austrália",
    "confederation": "AFC",
    "color": "#FFCD00",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Mat Ryan",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Nathaniel Atkinson",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Harry Souttar",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Miloš Degenek",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Aziz Behich",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Jackson Irvine",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Riley McGree",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Ajdin Hrustic",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Mathew Leckie",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Mitchell Duke",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Martin Boyle",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Craig Goodwin",
        "shiny": false
      }
    ],
    "flagCode": "au"
  },
  {
    "code": "BHR",
    "name": "Bahrein",
    "confederation": "AFC",
    "color": "#CE1126",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Sayed Mohammed Jaffer",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Sayed Dhiya Saeed",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Waleed Al-Hayam",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Rashed Al-Rumaihi",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Mahdi Humaidan",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Mohamed Marhoon",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Hamad Al-Dosari",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Ali Haram",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Abdulla Al-Hashash",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Komail Al-Aswad",
        "shiny": true
      },
      {
        "num": 13,
        "label": "Mahdi Abduljabbar",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Mohamed Abdulwahid",
        "shiny": false
      }
    ],
    "flagCode": "bh"
  },
  {
    "code": "IDN",
    "name": "Indonésia",
    "confederation": "AFC",
    "color": "#CE1126",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Ernando Ari",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Pratama Arhan",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Jay Idzes",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Rizky Ridho",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Justin Hubner",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Ivar Jenner",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Marc Klok",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Sandy Walsh",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Rafael Struick",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Ragnar Oratmangoen",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Marcelino Ferdinan",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Egy Maulana Vikri",
        "shiny": false
      }
    ],
    "flagCode": "id"
  },
  {
    "code": "UZB",
    "name": "Uzbequistão",
    "confederation": "AFC",
    "color": "#1EB53A",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Oybek Shayakhmetov",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Jasur Yakhshiboev",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Umarali Rakhmatullayev",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Shokhrukh Norquziyev",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Oston Urunov",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Otabek Shukurov",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Jamshid Iskanderov",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Jaloliddin Masharipov",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Eldor Shomurodov",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Dostonbek Khamdamov",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Abbosbek Fayzullayev",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Khojiakbar Alijonov",
        "shiny": false
      }
    ],
    "flagCode": "uz"
  },
  {
    "code": "IRQ",
    "name": "Iraque",
    "confederation": "AFC",
    "color": "#007A3D",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Jalal Hassan",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Alaa Abdul-Zahra",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Salam Shaker",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Rebin Sulaka",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Ali Adnan",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Saad Natiq",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Amjad Attwan",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Ibrahim Bayesh",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Amir Al-Ammari",
        "shiny": false
      },
      {
        "num": 12,
        "label": "Ayman Hussein",
        "shiny": true
      },
      {
        "num": 13,
        "label": "Mohanad Ali",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Ahmed Yasin",
        "shiny": false
      }
    ],
    "flagCode": "iq"
  },
  {
    "code": "NZL",
    "name": "Nova Zelândia",
    "confederation": "OFC",
    "color": "#000000",
    "stickers": [
      {
        "num": 1,
        "label": "Escudo",
        "shiny": true
      },
      {
        "num": 2,
        "label": "Seleção",
        "shiny": false
      },
      {
        "num": 3,
        "label": "Oliver Sail",
        "shiny": false
      },
      {
        "num": 4,
        "label": "Liberato Cacace",
        "shiny": false
      },
      {
        "num": 5,
        "label": "Michael Boxall",
        "shiny": false
      },
      {
        "num": 6,
        "label": "Bill Tuilagi",
        "shiny": false
      },
      {
        "num": 7,
        "label": "Nando Pijnaker",
        "shiny": false
      },
      {
        "num": 8,
        "label": "Clayton Lewis",
        "shiny": false
      },
      {
        "num": 9,
        "label": "Joe Bell",
        "shiny": false
      },
      {
        "num": 10,
        "label": "Elijah Just",
        "shiny": false
      },
      {
        "num": 11,
        "label": "Chris Wood",
        "shiny": true
      },
      {
        "num": 12,
        "label": "Sarpreet Singh",
        "shiny": false
      },
      {
        "num": 13,
        "label": "Matthew Ridenton",
        "shiny": false
      },
      {
        "num": 14,
        "label": "Callan Elliot",
        "shiny": false
      }
    ],
    "flagCode": "nz"
  }
]

export const ALL_STICKERS = TEAMS.flatMap(team =>
  team.stickers.map(sticker => ({
    ...sticker,
    id: `${team.code}-${sticker.num}`,
    imageKey: `${team.code}-${sticker.num}`,
    teamCode: team.code,
    teamName: team.name,
    teamFlagCode: team.flagCode,
    teamColor: team.color,
    confederation: team.confederation,
  }))
)

export const TOTAL = ALL_STICKERS.length
