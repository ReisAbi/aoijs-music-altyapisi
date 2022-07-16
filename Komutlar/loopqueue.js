module.exports = ({
    name: "loopqueue",
    code: `$color[GREEN]
    $description[🔁 $replaceText[$replaceText[$loopQueue;true;Şimdi sıra döngü!];false;Artık kuyruğu döngüye almıyor.]]
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$queueLength>0;{color:RED}{description:sıra boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})