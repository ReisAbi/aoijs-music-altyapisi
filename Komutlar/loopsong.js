module.exports = ({
    name: "loopsong",
    code: `$color[GREEN]
    $description[🔁 $replaceText[$replaceText[$loopSong;true;Şimdi şarkıyı döngüye alıyorum!];false;Artık şarkıyı döngüye almıyor.]]
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$queueLength>0;{color:RED}{description:sıra boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})