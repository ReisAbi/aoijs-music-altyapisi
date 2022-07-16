module.exports = {
  name: "yardım",
  code: `
  $editIn[15s;{description: Sohbet Kirlenmesini engellemek için, Yardım Komutum Silindi! 💬} {color: # 836fff} ]
  $title[🎶  Müzik Komutlarım]
  $description[
 **🎧 Yardıma Hoşgeldin, Komutlarım Aşağıda Sıralandı!  🎧**

\`play  stop  connect\`
\`disconnect  skip  skipto\`
\`loopsong  loopqueue  nowplaying\`
\`pause  resume  volume  lyrics\`

**Bu Mesaj 15 Saniye İçinde Silinecektir.** 
$thumbnail[$userAvatar[$findMember[$message]]]
$author[$userTag[$findMember[$message]];$userAvatar[$findMember[$message]]]
    
    
$footer[Müzik Komutlarına Bakmak Mı İstedin? 📢]
$color[GREEN]
`
}