module.exports = ({
    name: "queue",
    code:
    `
    $color[GREEN]
    $thumbnail[$songinfo[thumbnail]]
    $title[Müzik Sırası]
    $description[$queue[$replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1];10;{number}. {title} | {duration}]]
    $addField[Güncel Şarkı;[$songinfo[title]\\]($songinfo[url])]
   
    $footer[Page $replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1] / $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]]]
    $addTimestamp
   
    $textSplit[$divide[$queueLength;10];.]
    $onlyIf[$voiceID==$voiceID[$clientID];{{color:RED}{description:Bot ile aynı Ses Kanalında olmalısınızt!}] 
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$queueLength>0;{color:RED}{description:sıra boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:❌ Bu izinlere ihtiyacım var - **Embed Links**}{color:RED}]
    $suppressErrors[{color:RED}{description:Bir hata oluştu! Bu durum devam ederse lütfen Bot Geliştiricisi ile iletişime geçin.!}]
    `
   })