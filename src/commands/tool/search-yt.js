import yts from 'yt-search'
import fs from 'fs'
export default {
    name: 'searchyt',
    aliases: ['yts', 'syt', 'ytsearch'],
    type: 'search',
    desc : 'search youtube',
    example: 'Example: %prefix%command hbrp - tokyo milk',
    execute: async({m,hisoka}) => {
        m.reply("wait")
        try {
            let x = m.text
            if(!m.text) throw 'search for what?'
            let res = await yts(m.text)
            let z = res.all
            let teks = res.all.map(v => {
    switch (v.type) {
      case 'video': return `
*_${v.title}_*
*_Link :_* ${v.url}
*_Duration :_* ${v.timestamp}
*_Uploaded :_* ${v.ago}
*_Views :_* ${v.views}`}}).filter(v => v).join('\n••••••••••••••••••••••••••••••••••••••••\n')
            //console.log(res)
            hisoka.sendMessage(m.from, z[0].thumbnail, { caption: teks, quoted: m })
            }catch(error){
                m.reply(error)
                }
        }
    }