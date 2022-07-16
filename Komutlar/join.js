module.exports = {
 name: "join",
 aliases: ['connect'],
 code: `
<#$voiceid[$authorid]>'e başarıyla katıldı
$joinvc[$voiceid[$authorid]]
$onlyif[$voiceid[$clientid]==;:x: Birisi başka bir Ses Kanalında şarkı dinliyor.]
$onlyIf[$voiceid[$authorid]!=;:x: Lütfen bir Ses Kanalına katılın ve bu komutu kullanın.]
`
}