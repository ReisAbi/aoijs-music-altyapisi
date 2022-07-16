module.exports = ({
    name: "play",
    code: `$color[GREEN]
    $title[Şarkı sıraya eklendi!;$songInfo[url]]
    $description[✅ Eklendi **$playSong[$message;1m;yes;yes;{color:GREEN}{açıklama:Bir hata oluştu! Bu durum devam ederse lütfen Bot Geliştiricisi ile iletişime geçin!}]**]
    $footer[$userTag tarafından istendi]
    $addTimestamp
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$message!=;{description: Çalmak için bir şarkı adı/url belirtmelisiniz!}{color:RED}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RED}{description:Bir hata oluştu! Bu durum devam ederse lütfen Bot Geliştiricisi ile iletişime geçin!}]
    $onlyBotPerms[speak;connect;{description:❌ Bu izinlere ihtiyacım var - **Konuş** ve **Bağlan**}{color:RED}]
    $botTyping[3s]`   
})