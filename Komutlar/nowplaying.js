module.exports = ({
    name: "nowplaying",
    code: `$color[GREEN]
    $description[⏯ Şu an çalan şarkı - **[$songInfo[title]\\]($songInfo[url])**]
    $thumbnail[$songinfo[thumbnail]]
    $addTimestamp
    $onlyIf[$queueLength>0;{color:RED}{description:sıra boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:❌ Bu izinlere ihtiyacım var - **Embed Links**}{color:RED}]`
})