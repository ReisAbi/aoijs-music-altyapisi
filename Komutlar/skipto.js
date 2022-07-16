module.exports = ({
    name: "skipto",
    code: `$color[GREEN]
    $description[⏩ Şarkı "$message" sıra numarasına atlandı!]
    $skipTo[$message]
    $onlyIf[$voiceID!=;{color:RED}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$queueLength>0;{color:RED}{description:Sıra boş!}]
    $onlyIf[$message!=;{description:Atlamak için bir sıra numarası belirtmelisiniz!}{color:RED}]
    $onlyIf[$isNumber[$message]==true;{description: Lütfen geçerli bir sıra numarası belirtin!}{color:RED}]
    $onlyIf[$queueLength>$message;{description: Bu sıra numarası mevcut değil!}{color:RED}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})