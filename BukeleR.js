 BukeleR= require("aoi.js")
var fs = require('fs');
const bot = new BukeleR.Bot({
  token: "OTcyMzU2MjgxOTYyNzU0MDk5.Gtdy4w.6nDSRLgS0A7-nHn8rxeQ1Z79IWoOKm9IIVbJSQ", //TOKEN BURAYA YAZIN
  prefix: "t!",    // PREFİXİNİ BURAYA YAZABİLİRSİN
  fetchInvites: true
})


bot.onJoined()    //BURAYI SİLME ÖNEMLİ

bot.onLeave()   //BURAYI SİLME ÖNEMLİ

bot.onMessage()    //BURAYI SİLME ÖNEMLİ 


bot.loadCommands('./Komutlar/')     //BURAYI SİLME ÖNEMLİ   
