const BukeleR= require("aoi.js")
var fs = require('fs');
const bot = new BukeleR.Bot({
  token: "OTgzMzU2Mjk4NDAzOTM0MjQ4.GtEbQk.78BQfHeuGxZmOQ17BbIfb_jtt-rLH1jVamuRn8", //TOKEN BURAYA YAZIN
  prefix: "!",    // PREFİXİNİ BURAYA YAZABİLİRSİN
  fetchInvites: true
})


bot.onJoined()    //BURAYI SİLME ÖNEMLİ

bot.onLeave()   //BURAYI SİLME ÖNEMLİ

bot.onMessage()    //BURAYI SİLME ÖNEMLİ 


bot.loadCommands('./Komutlar/')     //BURAYI SİLME ÖNEMLİ   