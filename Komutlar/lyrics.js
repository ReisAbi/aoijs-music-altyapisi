module.exports = ({
    name: "lyrics",
    code: `$color[GREEN]
    $if[$argsCount>0]
    $title[$message için şarkı sözleri]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;{description: Bu şarkıya ait şarkı sözü bulunamadı!}{color:RANDOM}]]
    $elseIf[$argsCount==0]
    $title[şarkı sözleri $songInfo[title]]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;{description: Bu şarkıya ait şarkı sözü bulunamadı!}{color:RANDOM}]]
    $onlyIf[$queueLength>0;{color:RED}{description:Sıra boş!}]
    $endelseif
    $endif
    $botTyping
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyBotPerms[embedlinks; {description:❌ Bu izinlere ihtiyacım var - **Embed Links**}{color:RED}]`
})