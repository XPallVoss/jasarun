import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `β°ββ£β πΊππππ πΈππππ ββ’β
β«Ήβ«Ί π½πππ:
β«Ήβ«Ί ππππ:
β«Ήβ«Ί π°πππππ:
β«Ήβ«Ί π·πππ:
β«Ήβ«Ί πΏπππππππ:
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://facebook.com/sadtime098",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'IΙ΄α΄Κα΄α΄α΄α΄α΄α΄Ιͺα΄Ι΄',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler