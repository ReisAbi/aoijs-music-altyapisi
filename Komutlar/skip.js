module.exports = ({
    name: "skip",
    category: "music",
    code: `$color[GREEN]
    $description[⏩ Şarkıyı atladı!]
    $skipSong
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$queueLength>0;{color:RED}{description:Sıra boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})