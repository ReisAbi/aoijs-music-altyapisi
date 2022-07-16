module.exports = ({
    name: "volume",
    code: `$color[GREEN]
    $description[🔊 Sesi "$message" olarak değiştirin.]
    $volume[$message]
    $onlyIf[$voiceID==$voiceID[$clientID];{color:RED}{description:Bot ile aynı Ses Kanalında olmalısınız!} {field:Bot'un Ses Kanalı:<#$voiceID[$clientID]>} {field:Kullanıcı Ses Kanalı:<#$voiceID>}]
    $onlyIf[$queueLength>0;{description:sıra boş!}{color:RED}]
    $onlyIf[$isNumber[$message[1]]==true;{description: Argüman bir sayı olmalıdır!}{color:RED}]
    $onlyIf[$message[1]<=200;{description: Maksimum Hacim "200"!}{color:RED}] 
    $onlyIf[$message[1]>=1;{description: Minimum Hacim "1"!}{color:RED}] 
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RED}{description:Bir hata oluştu! Bu durum devam ederse lütfen Bot Geliştiricisi ile iletişime geçin!}]
    $onlyBotPerms[embedlinks; {description:❌ Bu izinlere ihtiyacım var - **Bağlantıları Göm**}{color:RED}]`
    })  