module.exports = ({
    name: "resume",
    code: `$color[GREEN]
    $description[▶ Şarkıyı devam ettirdi!]
    $resumeSong
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$queueLength>0;{color:RED}{description:Sıra Boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})