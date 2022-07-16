module.exports = {
 name: "leave",
 aliases: ['disconnect', 'dc'],
 code: `
<#$voiceid[$clientid]> ile bağlantı başarıyla kesildi
$leavevc
$onlyif[$voiceid[$clientid]!=;:x: Herhangi bir Ses Kanalına bağlı değilim.]
$onlyIf[$voiceid[$authorid]!=;:x: Lütfen bir Ses Kanalına katılın ve bu komutu kullanın.]`
}