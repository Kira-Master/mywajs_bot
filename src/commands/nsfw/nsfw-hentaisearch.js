import Nishino from 'nishino-project'
import fetch from 'node-fetch'
export default {
    name: 'hentaisearch',
    aliases: ['carihentai', 'searchhent'],
    type: 'search',
    desc: 'search hentai',
    example: 'Example: %prefix%command milf',
    execute: async({m, hisoka}) => {
        m.reply("wait")
        try{
            let data = await Nishino.hentai.search(m.text)
            m.reply('berhasil mendapat data, tunggu!!')
            //let ch = await fetch(data)
            //let json = await data.json()
            let json = data.result.map((v) =>
                                   `
*Title:* ${v.title}
*Views:* ${v.views}
*Url:* ${v.url}\n
`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
            hisoka.sendMessage(m.from, data.result[0].thumbnail, { caption: json, quoted: m })
            //console.log(data)
            }catch(e){
                m.reply("error," +' sending random hentai')
                let data = await Nishino.hentai.random()
                let capt = `
*Title:* ${data.result.title}
*Views:* ${data.result.views}
*Published:* ${data.result.publised}
*Url:* ${data.result.url}
`
                console.log(data)
                hisoka.sendMessage(m.from, data.result.image, { caption: capt, quoted: m })
                }
        },
    isLimit: true,
    isPremium: true
    }