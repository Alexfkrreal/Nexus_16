  importazione    { watchFile,  unwatchFile }   da   "fs"
  importazione chalk from    "gesso"
  importazione fs from    "fs"
  importazione    { fileURLToPath }   da   "url"

globale.proprietario     =     [
  [3492670189,  " , ~vero],
  [xxxxx,],
  //['xxxxxxx'], 
  [xxxxx,],
  [xxxxx],
  [xxxxx],
] //Numero degli owner

/ • • • 

globale.Mod   =   [xxxxx] 
globale.Prems    =    [xxxxx xxxxx]

/ • • • 

globale.KeysZen    =    ["C2459dB922"  ,    37 CC845916, "6fb0eff124"]
// 'fiktod' 'BF39D349845E' '675e34de8a' '0b917b905e6f'
globale.Keysxxx = keysZen[Mata.pavimento(KeysZen.Lunghezza  * matematica.random())]
globale.Keysxteammm   =   ["29d4b59aa687ca" ,   "5LTV57azwaid7dXfz5fzJu" ,   'cb15ed422c71a2fb'  ,    '5bd33b276d41d6b4'  ,    'HIRO'  ,    'kurrxd09'  ,    'ebb6251cc00f9c63']
globale.Keysxteam = keysxteammm[Mata.pavimento(keysxteammm.Lunghezza   * matematica. random())]
globale.Keysneoxrrr    =    ["5VC9rvNx"  ,    "cfALv5"]
globale.Keysneoxr = keysneoxrrr[Mata.pavimento(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { 
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm-nhie.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
}


//⊱ ════════════ •⊰✧⊱• ════════════
global.imagen1 = ['./media/menu1.jpg']
global.imagen4 = fs.readFileSync('./bixbyvision16.png')
//════════════ •⊰✧⊱• ════════════

// Sticker WM
global.packname = '𝐁𝐢𝐱𝐛𝐲𝐕𝐢𝐬𝐢𝐨𝐧𝐁𝐨𝐭'
global.author = '𝐌𝐝'

//════════════ •⊰✧⊱• ════════════

global.vs = '𝟏.𝟖'

global.lb = 'ꪶ 𝐁𝐢𝐱𝐛𝐲 𝐕𝐢𝐬𝐢𝐨𝐧 ꫂ'
global.lolibot = lb

global.dygp = 'https://chat.whatsapp.com/BHZDSUDHuwWEed4Ut8aeUQ' //grupo del bot

global.nna = 'https://chat.whatsapp.com/BHZDSUDHuwWEed4Ut8aeUQ' //UPDATE

global.fglog = 'https://telegra.ph/file/1861aab98389b13db8588.png' 

global.multiplier = 69 
global.maxwarn = '4' // máxima advertencias

//════════════ •⊰✧⊱• ════════════

global.wm = '𝐁𝐢𝐱𝐛𝐲𝐁𝐨𝐭-𝐌𝐝'
global.wait = '𝐅𝐚𝐭𝐭𝐨 ✓'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//════════════ •⊰✧⊱• ════════════

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

//════════════ •⊰✧⊱• ════════════
  
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
