import {Util, Odesus} from 'odesus'
const odesu = new Odesus()
export default {
    name: 'otakudetail',
    type: 'search',
    desc: 'get detail anime',
    example: 'Example: %prefix%command url',
    execute: async({m,hisoka}) => {
        m.reply("wait")
        try {
            let txt = Func.isUrl(m.body)[0]
            let solved = Util.resolveSlug(txt)
            let data = await odesu.getAnimeInfo(solved)
           let z = data.episodes
            console.log(data)
                let teks = z.map(v => {
                   return `

*EPISODE*
_Title: ${v.title}_
*URL*: ${v.url}`
}).filter(v => v).join('\n••••••••••••••••••••••••••••••••••••••••\n')
                //m.reply(teks)
                hisoka.sendMessage(m.from, data.image, {caption: `*_Title: ${data.name}_*
*Synopsis:* ${data.synopsis}
*Rating:* ${data.rating}
*Status:* ${data.status}
*Total Episodes:* ${data.totalEpisodes}
*Duration Episode:* ${data.duration}
` +teks, quoted: m })
                }catch(error){
                    console.error(error)
                m.reply(error)
                }
        }
    }