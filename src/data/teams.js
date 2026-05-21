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

// Helper function to generate player stickers for a team
function generateTeamStickers(startNum, teamCode) {
  const stickers = [
    { num: startNum, label: "Logo", shiny: true },
    { num: startNum + 1, label: "Jogador 1" },
    { num: startNum + 2, label: "Jogador 2" },
    { num: startNum + 3, label: "Jogador 3" },
    { num: startNum + 4, label: "Jogador 4" },
    { num: startNum + 5, label: "Jogador 5" },
    { num: startNum + 6, label: "Jogador 6" },
    { num: startNum + 7, label: "Jogador 7" },
    { num: startNum + 8, label: "Jogador 8" },
    { num: startNum + 9, label: "Jogador 9" },
    { num: startNum + 10, label: "Jogador 10" },
    { num: startNum + 11, label: "Jogador 11" },
    { num: startNum + 12, label: "Foto do Time", shiny: true },
    { num: startNum + 13, label: "Jogador 12" },
    { num: startNum + 14, label: "Jogador 13" },
    { num: startNum + 15, label: "Jogador 14" },
    { num: startNum + 16, label: "Jogador 15" },
    { num: startNum + 17, label: "Jogador 16" },
    { num: startNum + 18, label: "Jogador 17" },
    { num: startNum + 19, label: "Jogador 18" },
  ];
  return stickers;
}

export const TEAMS = [
  // === PANINI (1 figurinha) ===
  {
    "code": "PANINI",
    "name": "Panini",
    "confederation": "FIFA",
    "color": "#1d4ed8",
    "stickers": [
      { "num": 1, "label": "Logo Panini", "shiny": true }
    ]
  },
  // === FIFA WORLD CUP HISTORY (19 figurinhas) ===
  {
    "code": "FWC",
    "name": "História da Copa do Mundo",
    "confederation": "FIFA",
    "color": "#1d4ed8",
    "stickers": [
      { "num": 2, "label": "Logo FIFA World Cup 2026", "shiny": true },
      { "num": 3, "label": "Mascote Oficial", "shiny": true },
      { "num": 4, "label": "Troféu", "shiny": true },
      { "num": 5, "label": "Estádio 1 - MetLife Stadium" },
      { "num": 6, "label": "Estádio 2 - SoFi Stadium" },
      { "num": 7, "label": "Estádio 3 - AT&T Stadium" },
      { "num": 8, "label": "Estádio 4 - Hard Rock Stadium" },
      { "num": 9, "label": "Estádio 5 - Mercedes-Benz Stadium" },
      { "num": 10, "label": "Estádio 6 - Lumen Field" },
      { "num": 11, "label": "Estádio 7 - Levi's Stadium" },
      { "num": 12, "label": "Estádio 8 - NRG Stadium" },
      { "num": 13, "label": "Estádio 9 - Lincoln Financial Field" },
      { "num": 14, "label": "Estádio 10 - Arrowhead Stadium" },
      { "num": 15, "label": "Estádio 11 - Gillette Stadium" },
      { "num": 16, "label": "Estádio 12 - Azteca" },
      { "num": 17, "label": "Estádio 13 - Akron" },
      { "num": 18, "label": "Estádio 14 - Monterrey" },
      { "num": 19, "label": "Estádio 15 - BC Place" },
      { "num": 20, "label": "Estádio 16 - BMO Field" }
    ]
  },
  // === ALGERIA (ALG) ===
  {
    "code": "ALG",
    "name": "Argélia",
    "confederation": "CAF",
    "color": "#15803d",
    "stickers": generateTeamStickers(21, "ALG")
  },
  // === ARGENTINA (ARG) ===
  {
    "code": "ARG",
    "name": "Argentina",
    "confederation": "CONMEBOL",
    "color": "#75aadb",
    "stickers": generateTeamStickers(41, "ARG")
  },
  // === AUSTRALIA (AUS) ===
  {
    "code": "AUS",
    "name": "Austrália",
    "confederation": "AFC",
    "color": "#ffcd00",
    "stickers": generateTeamStickers(61, "AUS")
  },
  // === AUSTRIA (AUT) ===
  {
    "code": "AUT",
    "name": "Áustria",
    "confederation": "UEFA",
    "color": "#ed2939",
    "stickers": generateTeamStickers(81, "AUT")
  },
  // === BELGIUM (BEL) ===
  {
    "code": "BEL",
    "name": "Bélgica",
    "confederation": "UEFA",
    "color": "#ed2939",
    "stickers": generateTeamStickers(101, "BEL")
  },
  // === BOSNIA AND HERZEGOVINA (BIH) ===
  {
    "code": "BIH",
    "name": "Bósnia e Herzegovina",
    "confederation": "UEFA",
    "color": "#002395",
    "stickers": generateTeamStickers(121, "BIH")
  },
  // === BRAZIL (BRA) ===
  {
    "code": "BRA",
    "name": "Brasil",
    "confederation": "CONMEBOL",
    "color": "#ffdf00",
    "stickers": generateTeamStickers(141, "BRA")
  },
  // === CANADA (CAN) ===
  {
    "code": "CAN",
    "name": "Canadá",
    "confederation": "CONCACAF",
    "color": "#ff0000",
    "stickers": generateTeamStickers(161, "CAN")
  },
  // === CÔTE D'IVOIRE (CIV) ===
  {
    "code": "CIV",
    "name": "Costa do Marfim",
    "confederation": "CAF",
    "color": "#ff8200",
    "stickers": generateTeamStickers(181, "CIV")
  },
  // === DR CONGO (COD) ===
  {
    "code": "COD",
    "name": "RD Congo",
    "confederation": "CAF",
    "color": "#007fff",
    "stickers": generateTeamStickers(201, "COD")
  },
  // === COLOMBIA (COL) ===
  {
    "code": "COL",
    "name": "Colômbia",
    "confederation": "CONMEBOL",
    "color": "#fcd116",
    "stickers": generateTeamStickers(221, "COL")
  },
  // === CAPE VERDE (CPV) ===
  {
    "code": "CPV",
    "name": "Cabo Verde",
    "confederation": "CAF",
    "color": "#003893",
    "stickers": generateTeamStickers(241, "CPV")
  },
  // === CROATIA (CRO) ===
  {
    "code": "CRO",
    "name": "Croácia",
    "confederation": "UEFA",
    "color": "#ff0000",
    "stickers": generateTeamStickers(261, "CRO")
  },
  // === CURAÇAO (CUW) ===
  {
    "code": "CUW",
    "name": "Curaçao",
    "confederation": "CONCACAF",
    "color": "#002b7f",
    "stickers": generateTeamStickers(281, "CUW")
  },
  // === CZECHIA (CZE) ===
  {
    "code": "CZE",
    "name": "República Tcheca",
    "confederation": "UEFA",
    "color": "#d7141a",
    "stickers": generateTeamStickers(301, "CZE")
  },
  // === ECUADOR (ECU) ===
  {
    "code": "ECU",
    "name": "Equador",
    "confederation": "CONMEBOL",
    "color": "#ffdd00",
    "stickers": generateTeamStickers(321, "ECU")
  },
  // === EGYPT (EGY) ===
  {
    "code": "EGY",
    "name": "Egito",
    "confederation": "CAF",
    "color": "#ce1126",
    "stickers": generateTeamStickers(341, "EGY")
  },
  // === ENGLAND (ENG) ===
  {
    "code": "ENG",
    "name": "Inglaterra",
    "confederation": "UEFA",
    "color": "#ffffff",
    "stickers": generateTeamStickers(361, "ENG")
  },
  // === SPAIN (ESP) ===
  {
    "code": "ESP",
    "name": "Espanha",
    "confederation": "UEFA",
    "color": "#aa151b",
    "stickers": generateTeamStickers(381, "ESP")
  },
  // === FRANCE (FRA) ===
  {
    "code": "FRA",
    "name": "França",
    "confederation": "UEFA",
    "color": "#002654",
    "stickers": generateTeamStickers(401, "FRA")
  },
  // === GERMANY (GER) ===
  {
    "code": "GER",
    "name": "Alemanha",
    "confederation": "UEFA",
    "color": "#000000",
    "stickers": generateTeamStickers(421, "GER")
  },
  // === GHANA (GHA) ===
  {
    "code": "GHA",
    "name": "Gana",
    "confederation": "CAF",
    "color": "#006b3f",
    "stickers": generateTeamStickers(441, "GHA")
  },
  // === HAITI (HAI) ===
  {
    "code": "HAI",
    "name": "Haiti",
    "confederation": "CONCACAF",
    "color": "#00209f",
    "stickers": generateTeamStickers(461, "HAI")
  },
  // === IRAN (IRN) ===
  {
    "code": "IRN",
    "name": "Irã",
    "confederation": "AFC",
    "color": "#da0000",
    "stickers": generateTeamStickers(481, "IRN")
  },
  // === IRAQ (IRQ) ===
  {
    "code": "IRQ",
    "name": "Iraque",
    "confederation": "AFC",
    "color": "#007a3d",
    "stickers": generateTeamStickers(501, "IRQ")
  },
  // === JORDAN (JOR) ===
  {
    "code": "JOR",
    "name": "Jordânia",
    "confederation": "AFC",
    "color": "#007a33",
    "stickers": generateTeamStickers(521, "JOR")
  },
  // === JAPAN (JPN) ===
  {
    "code": "JPN",
    "name": "Japão",
    "confederation": "AFC",
    "color": "#bc002d",
    "stickers": generateTeamStickers(541, "JPN")
  },
  // === SOUTH KOREA (KOR) ===
  {
    "code": "KOR",
    "name": "Coreia do Sul",
    "confederation": "AFC",
    "color": "#cd2e3a",
    "stickers": generateTeamStickers(561, "KOR")
  },
  // === SAUDI ARABIA (KSA) ===
  {
    "code": "KSA",
    "name": "Arábia Saudita",
    "confederation": "AFC",
    "color": "#006c35",
    "stickers": generateTeamStickers(581, "KSA")
  },
  // === MOROCCO (MAR) ===
  {
    "code": "MAR",
    "name": "Marrocos",
    "confederation": "CAF",
    "color": "#c1272d",
    "stickers": generateTeamStickers(601, "MAR")
  },
  // === MEXICO (MEX) ===
  {
    "code": "MEX",
    "name": "México",
    "confederation": "CONCACAF",
    "color": "#006847",
    "stickers": generateTeamStickers(621, "MEX")
  },
  // === NETHERLANDS (NED) ===
  {
    "code": "NED",
    "name": "Holanda",
    "confederation": "UEFA",
    "color": "#ff6600",
    "stickers": generateTeamStickers(641, "NED")
  },
  // === NORWAY (NOR) ===
  {
    "code": "NOR",
    "name": "Noruega",
    "confederation": "UEFA",
    "color": "#ba0c2f",
    "stickers": generateTeamStickers(661, "NOR")
  },
  // === NEW ZEALAND (NZL) ===
  {
    "code": "NZL",
    "name": "Nova Zelândia",
    "confederation": "OFC",
    "color": "#000000",
    "stickers": generateTeamStickers(681, "NZL")
  },
  // === PANAMA (PAN) ===
  {
    "code": "PAN",
    "name": "Panamá",
    "confederation": "CONCACAF",
    "color": "#da121a",
    "stickers": generateTeamStickers(701, "PAN")
  },
  // === PARAGUAY (PAR) ===
  {
    "code": "PAR",
    "name": "Paraguai",
    "confederation": "CONMEBOL",
    "color": "#0038a8",
    "stickers": generateTeamStickers(721, "PAR")
  },
  // === PORTUGAL (POR) ===
  {
    "code": "POR",
    "name": "Portugal",
    "confederation": "UEFA",
    "color": "#006600",
    "stickers": generateTeamStickers(741, "POR")
  },
  // === QATAR (QAT) ===
  {
    "code": "QAT",
    "name": "Catar",
    "confederation": "AFC",
    "color": "#8d1b3d",
    "stickers": generateTeamStickers(761, "QAT")
  },
  // === SOUTH AFRICA (RSA) ===
  {
    "code": "RSA",
    "name": "África do Sul",
    "confederation": "CAF",
    "color": "#007a4d",
    "stickers": generateTeamStickers(781, "RSA")
  },
  // === SCOTLAND (SCO) ===
  {
    "code": "SCO",
    "name": "Escócia",
    "confederation": "UEFA",
    "color": "#0065bd",
    "stickers": generateTeamStickers(801, "SCO")
  },
  // === SENEGAL (SEN) ===
  {
    "code": "SEN",
    "name": "Senegal",
    "confederation": "CAF",
    "color": "#00853f",
    "stickers": generateTeamStickers(821, "SEN")
  },
  // === SWITZERLAND (SUI) ===
  {
    "code": "SUI",
    "name": "Suíça",
    "confederation": "UEFA",
    "color": "#ff0000",
    "stickers": generateTeamStickers(841, "SUI")
  },
  // === SWEDEN (SWE) ===
  {
    "code": "SWE",
    "name": "Suécia",
    "confederation": "UEFA",
    "color": "#006aa7",
    "stickers": generateTeamStickers(861, "SWE")
  },
  // === TUNISIA (TUN) ===
  {
    "code": "TUN",
    "name": "Tunísia",
    "confederation": "CAF",
    "color": "#e70013",
    "stickers": generateTeamStickers(881, "TUN")
  },
  // === TURKEY (TUR) ===
  {
    "code": "TUR",
    "name": "Turquia",
    "confederation": "UEFA",
    "color": "#e30a17",
    "stickers": generateTeamStickers(901, "TUR")
  },
  // === URUGUAY (URU) ===
  {
    "code": "URU",
    "name": "Uruguai",
    "confederation": "CONMEBOL",
    "color": "#7b96c4",
    "stickers": generateTeamStickers(921, "URU")
  },
  // === UNITED STATES (USA) ===
  {
    "code": "USA",
    "name": "Estados Unidos",
    "confederation": "CONCACAF",
    "color": "#002868",
    "stickers": generateTeamStickers(941, "USA")
  },
  // === UZBEKISTAN (UZB) ===
  {
    "code": "UZB",
    "name": "Uzbequistão",
    "confederation": "AFC",
    "color": "#1eb53a",
    "stickers": generateTeamStickers(961, "UZB")
  }
];

// Gerar lista plana de todas as figurinhas
export const ALL_STICKERS = TEAMS.flatMap(team =>
  team.stickers.map(s => ({
    ...s,
    id: `${team.code}-${s.num}`,
    teamCode: team.code,
    teamName: team.name,
    confederation: team.confederation
  }))
);

// Total esperado: 980 figurinhas
// PANINI: 1
// FWC: 19
// 48 seleções x 20 = 960
// Total: 1 + 19 + 960 = 980
