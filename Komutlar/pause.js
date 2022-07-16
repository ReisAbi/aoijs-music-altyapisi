module.exports = ({
    name: "pause",
    code: `$color[GREEN]
    $description[⏸ Şarkıyı duraklattı!]
    $pauseSong
    $onlyIf[$queueLength>0;{color:RED}{description:sıra boşy!}]
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})