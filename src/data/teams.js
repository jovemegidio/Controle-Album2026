// Estrutura do album Panini Copa do Mundo FIFA 2026.
// Numeração segue o padrão do álbum: CODIGO1, CODIGO2, etc.
// Estado no localStorage: { [id]: count }
//   0 = faltando, 1 = tenho, 2+ = repetidas (count - 1 extras)

export const CONFEDERATIONS = {
  "FIFA": { "name": "Introdução", "color": "#1d4ed8" },
  "CONMEBOL": { "name": "América do Sul", "color": "#15803d" },
  "CONCACAF": { "name": "América do Norte/Central", "color": "#b45309" },
  "UEFA": { "name": "Europa", "color": "#1e40af" },
  "CAF": { "name": "África", "color": "#b91c1c" },
  "AFC": { "name": "Ásia", "color": "#7e22ce" },
  "OFC": { "name": "Oceania", "color": "#0e7490" }
}

// Helper function to generate player stickers for a team (1-20)
function generateTeamStickers(teamCode) {
  return [
    { num: `${teamCode}1`, label: "Escudo", shiny: true },
    { num: `${teamCode}2`, label: "Jogador 1" },
    { num: `${teamCode}3`, label: "Jogador 2" },
    { num: `${teamCode}4`, label: "Jogador 3" },
    { num: `${teamCode}5`, label: "Jogador 4" },
    { num: `${teamCode}6`, label: "Jogador 5" },
    { num: `${teamCode}7`, label: "Jogador 6" },
    { num: `${teamCode}8`, label: "Jogador 7" },
    { num: `${teamCode}9`, label: "Jogador 8" },
    { num: `${teamCode}10`, label: "Jogador 9" },
    { num: `${teamCode}11`, label: "Jogador 10" },
    { num: `${teamCode}12`, label: "Foto do Time", shiny: true },
    { num: `${teamCode}13`, label: "Jogador 11" },
    { num: `${teamCode}14`, label: "Jogador 12" },
    { num: `${teamCode}15`, label: "Jogador 13" },
    { num: `${teamCode}16`, label: "Jogador 14" },
    { num: `${teamCode}17`, label: "Jogador 15" },
    { num: `${teamCode}18`, label: "Jogador 16" },
    { num: `${teamCode}19`, label: "Jogador 17" },
    { num: `${teamCode}20`, label: "Jogador 18" },
  ];
}

export const TEAMS = [
  // === PANINI (1 figurinha) ===
  {
    code: "00",
    name: "Panini",
    confederation: "FIFA",
    color: "#1d4ed8",
    stickers: [
      { num: "00", label: "Logo Panini", shiny: true }
    ]
  },
  // === FIFA WORLD CUP (19 figurinhas) ===
  {
    code: "FWC",
    name: "FIFA World Cup 2026",
    confederation: "FIFA",
    color: "#1d4ed8",
    stickers: [
      { num: "FWC1", label: "Logo FIFA World Cup 2026", shiny: true },
      { num: "FWC2", label: "Mascote Oficial", shiny: true },
      { num: "FWC3", label: "Troféu", shiny: true },
      { num: "FWC4", label: "MetLife Stadium" },
      { num: "FWC5", label: "SoFi Stadium" },
      { num: "FWC6", label: "AT&T Stadium" },
      { num: "FWC7", label: "Hard Rock Stadium" },
      { num: "FWC8", label: "Mercedes-Benz Stadium" },
      { num: "FWC9", label: "Lumen Field" },
      { num: "FWC10", label: "Levi's Stadium" },
      { num: "FWC11", label: "NRG Stadium" },
      { num: "FWC12", label: "Lincoln Financial Field" },
      { num: "FWC13", label: "Arrowhead Stadium" },
      { num: "FWC14", label: "Gillette Stadium" },
      { num: "FWC15", label: "Estádio Azteca" },
      { num: "FWC16", label: "Estádio Akron" },
      { num: "FWC17", label: "Estádio Monterrey" },
      { num: "FWC18", label: "BC Place" },
      { num: "FWC19", label: "BMO Field" }
    ]
  },
  // === SELEÇÕES (48 times x 20 figurinhas = 960) ===
  // CONMEBOL
  { code: "ARG", name: "Argentina", confederation: "CONMEBOL", color: "#75aadb", stickers: generateTeamStickers("ARG") },
  { code: "BRA", name: "Brasil", confederation: "CONMEBOL", color: "#ffdf00", stickers: generateTeamStickers("BRA") },
  { code: "COL", name: "Colômbia", confederation: "CONMEBOL", color: "#fcd116", stickers: generateTeamStickers("COL") },
  { code: "ECU", name: "Equador", confederation: "CONMEBOL", color: "#ffdd00", stickers: generateTeamStickers("ECU") },
  { code: "PAR", name: "Paraguai", confederation: "CONMEBOL", color: "#0038a8", stickers: generateTeamStickers("PAR") },
  { code: "URU", name: "Uruguai", confederation: "CONMEBOL", color: "#7b96c4", stickers: generateTeamStickers("URU") },
  // CONCACAF
  { code: "CAN", name: "Canadá", confederation: "CONCACAF", color: "#ff0000", stickers: generateTeamStickers("CAN") },
  { code: "CUW", name: "Curaçao", confederation: "CONCACAF", color: "#002b7f", stickers: generateTeamStickers("CUW") },
  { code: "HAI", name: "Haiti", confederation: "CONCACAF", color: "#00209f", stickers: generateTeamStickers("HAI") },
  { code: "MEX", name: "México", confederation: "CONCACAF", color: "#006847", stickers: generateTeamStickers("MEX") },
  { code: "PAN", name: "Panamá", confederation: "CONCACAF", color: "#da121a", stickers: generateTeamStickers("PAN") },
  { code: "USA", name: "Estados Unidos", confederation: "CONCACAF", color: "#002868", stickers: generateTeamStickers("USA") },
  // UEFA
  { code: "AUT", name: "Áustria", confederation: "UEFA", color: "#ed2939", stickers: generateTeamStickers("AUT") },
  { code: "BEL", name: "Bélgica", confederation: "UEFA", color: "#ed2939", stickers: generateTeamStickers("BEL") },
  { code: "BIH", name: "Bósnia e Herzegovina", confederation: "UEFA", color: "#002395", stickers: generateTeamStickers("BIH") },
  { code: "CRO", name: "Croácia", confederation: "UEFA", color: "#ff0000", stickers: generateTeamStickers("CRO") },
  { code: "CZE", name: "República Tcheca", confederation: "UEFA", color: "#d7141a", stickers: generateTeamStickers("CZE") },
  { code: "ENG", name: "Inglaterra", confederation: "UEFA", color: "#ffffff", stickers: generateTeamStickers("ENG") },
  { code: "ESP", name: "Espanha", confederation: "UEFA", color: "#aa151b", stickers: generateTeamStickers("ESP") },
  { code: "FRA", name: "França", confederation: "UEFA", color: "#002654", stickers: generateTeamStickers("FRA") },
  { code: "GER", name: "Alemanha", confederation: "UEFA", color: "#000000", stickers: generateTeamStickers("GER") },
  { code: "NED", name: "Holanda", confederation: "UEFA", color: "#ff6600", stickers: generateTeamStickers("NED") },
  { code: "NOR", name: "Noruega", confederation: "UEFA", color: "#ba0c2f", stickers: generateTeamStickers("NOR") },
  { code: "POR", name: "Portugal", confederation: "UEFA", color: "#006600", stickers: generateTeamStickers("POR") },
  { code: "SCO", name: "Escócia", confederation: "UEFA", color: "#0065bd", stickers: generateTeamStickers("SCO") },
  { code: "SUI", name: "Suíça", confederation: "UEFA", color: "#ff0000", stickers: generateTeamStickers("SUI") },
  { code: "SWE", name: "Suécia", confederation: "UEFA", color: "#006aa7", stickers: generateTeamStickers("SWE") },
  { code: "TUR", name: "Turquia", confederation: "UEFA", color: "#e30a17", stickers: generateTeamStickers("TUR") },
  // CAF
  { code: "ALG", name: "Argélia", confederation: "CAF", color: "#15803d", stickers: generateTeamStickers("ALG") },
  { code: "CIV", name: "Costa do Marfim", confederation: "CAF", color: "#ff8200", stickers: generateTeamStickers("CIV") },
  { code: "COD", name: "RD Congo", confederation: "CAF", color: "#007fff", stickers: generateTeamStickers("COD") },
  { code: "CPV", name: "Cabo Verde", confederation: "CAF", color: "#003893", stickers: generateTeamStickers("CPV") },
  { code: "EGY", name: "Egito", confederation: "CAF", color: "#ce1126", stickers: generateTeamStickers("EGY") },
  { code: "GHA", name: "Gana", confederation: "CAF", color: "#006b3f", stickers: generateTeamStickers("GHA") },
  { code: "MAR", name: "Marrocos", confederation: "CAF", color: "#c1272d", stickers: generateTeamStickers("MAR") },
  { code: "RSA", name: "África do Sul", confederation: "CAF", color: "#007a4d", stickers: generateTeamStickers("RSA") },
  { code: "SEN", name: "Senegal", confederation: "CAF", color: "#00853f", stickers: generateTeamStickers("SEN") },
  { code: "TUN", name: "Tunísia", confederation: "CAF", color: "#e70013", stickers: generateTeamStickers("TUN") },
  // AFC
  { code: "AUS", name: "Austrália", confederation: "AFC", color: "#ffcd00", stickers: generateTeamStickers("AUS") },
  { code: "IRN", name: "Irã", confederation: "AFC", color: "#da0000", stickers: generateTeamStickers("IRN") },
  { code: "IRQ", name: "Iraque", confederation: "AFC", color: "#007a3d", stickers: generateTeamStickers("IRQ") },
  { code: "JOR", name: "Jordânia", confederation: "AFC", color: "#007a33", stickers: generateTeamStickers("JOR") },
  { code: "JPN", name: "Japão", confederation: "AFC", color: "#bc002d", stickers: generateTeamStickers("JPN") },
  { code: "KOR", name: "Coreia do Sul", confederation: "AFC", color: "#cd2e3a", stickers: generateTeamStickers("KOR") },
  { code: "KSA", name: "Arábia Saudita", confederation: "AFC", color: "#006c35", stickers: generateTeamStickers("KSA") },
  { code: "QAT", name: "Catar", confederation: "AFC", color: "#8d1b3d", stickers: generateTeamStickers("QAT") },
  { code: "UZB", name: "Uzbequistão", confederation: "AFC", color: "#1eb53a", stickers: generateTeamStickers("UZB") },
  // OFC
  { code: "NZL", name: "Nova Zelândia", confederation: "OFC", color: "#000000", stickers: generateTeamStickers("NZL") }
];

// Gerar lista plana de todas as figurinhas
export const ALL_STICKERS = TEAMS.flatMap(team =>
  team.stickers.map(s => ({
    ...s,
    id: s.num, // O ID agora é o próprio número (ex: BRA1, ARG5)
    teamCode: team.code,
    teamName: team.name,
    confederation: team.confederation
  }))
);

// Total esperado: 980 figurinhas
// 00 (Panini): 1
// FWC: 19
// 48 seleções x 20 = 960
// Total: 1 + 19 + 960 = 980
