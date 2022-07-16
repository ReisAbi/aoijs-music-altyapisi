module.exports = ({
    name: "stop",
    code: `$color[GREEN]
    $description[⏹ Şarkıyı durdurdu!]
    $stopSong
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$queueLength>0;{color:RED}{description:sıra boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})